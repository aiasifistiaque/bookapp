import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function useGetChats({ user, friend }) {
	const db = firebase.firestore();
	const [chats, setChats] = useState([]);
	const [loading, setLoading] = useState(true);
	const [status, setStatus] = useState('');
	const users = user && [friend.uid, user.uid];
	const sortedUsers = users.sort();

	const userRef = db.collection('latestChat').doc(user.uid);
	const secondUserRef = db.collection('latestChat').doc(friend.uid);

	const friendRef = userRef.collection('activefriends').doc(friend.uid);
	const secondFriendRef = secondUserRef
		.collection('activefriends')
		.doc(user.uid);

	useEffect(() => {
		setLoading(true);
		const loadMessage = db
			.collection('chats')
			.where('room', '==', sortedUsers)
			.orderBy('timestamp', 'asc')
			.onSnapshot(
				querySnapshot => {
					const threads = querySnapshot.docs.map(documentSnapshot => {
						return {
							_id: documentSnapshot.id,
							name: '',
							latestMessage: { text: '' },
							...documentSnapshot.data(),
						};
					});
					setLoading(false);
					const reverseThreads = threads.reverse();
					setChats(reverseThreads);
					setLoading(() => false);
					const textIsSeen = friendRef
						.update({ status: 'seen' })
						.catch(err => console.log(err.message));
				},
				err => console.log(err)
			);

		const isTextSeen = db
			.collection('latestChat')
			.doc(friend.uid)
			.collection('activefriends')
			.doc(user.uid)
			.onSnapshot(
				doc => {
					if (doc.exists) {
						setStatus(doc.data().status);
					}
				},
				function (error) {
					console.log(error);
				}
			);

		return () => loadMessage();
	}, []);

	return { chats, loading, status };
}
