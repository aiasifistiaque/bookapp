import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { gStyles } from '../styles';
import OnlineStatus from '../components/OnlineStatus';
import useGetChats from '../hooks/useGetChats';
import SendChat from '../components/chat/SendChat';
import FullChat from '../components/chat/FullChat';
import PageLoading from '../components/PageLoading';
import TopBar from '../components/chat/TopBar';

export default function ConversationPage({ route }) {
	const db = firebase.firestore();
	const { friend } = route.params;
	const user = firebase.auth().currentUser;
	const users = user && [friend.uid, user.uid];
	const sortedUsers = users.sort();
	const [message, setMessage] = useState('');

	const { chats, loading, status } = useGetChats({
		user: user,
		friend: friend,
	});

	const userRef = db.collection('latestChat').doc(user.uid);
	const secondUserRef = db.collection('latestChat').doc(friend.uid);

	const friendRef = userRef.collection('activefriends').doc(friend.uid);
	const secondFriendRef = secondUserRef
		.collection('activefriends')
		.doc(user.uid);

	const sendMessage = () => {
		const msg = message.trim();
		if (msg.length == 0) return;
		db.collection('chats')
			.add({
				sender: user.uid,
				receiver: friend.uid,
				message: msg,
				room: sortedUsers,
				people: [user.uid, friend.uid],
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})

			.catch(function (error) {
				console.error('Error adding document: ', error);
			});

		const [username, provider] = user.email.split('@');

		const doneRef = friendRef.set({
			uid: friend.uid,
			sender: user.uid,
			message: msg,
			room: sortedUsers,
			people: [user.uid, friend.uid],
			username: friend.username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			status: 'seen',
		});

		const doneTwoRef = secondFriendRef.set({
			uid: user.uid,
			sender: user.uid,
			message: msg,
			room: sortedUsers,
			people: [user.uid, friend.uid],
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			status: 'sent',
		});

		setMessage('');
	};

	if (loading) return <PageLoading />;
	else
		return (
			<View style={gStyles.background}>
				<SafeAreaView style={{ flex: 1, width: '100%' }}>
					<View style={{ flex: 8, width: '100%' }}>
						<TopBar>
							<OnlineStatus friend={friend} />
						</TopBar>
						<FullChat
							chats={chats}
							user={user}
							friend={friend}
							status={status}
						/>
					</View>
					<SendChat
						message={message}
						sendMessage={sendMessage}
						setMessage={text => setMessage(text)}
					/>
				</SafeAreaView>
			</View>
		);
}
