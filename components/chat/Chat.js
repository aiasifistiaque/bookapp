import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SeenText from './SeenText';
import ChatMessage from './ChatMessage';
import SenderName from './SenderName';
import ChatTimeStamp from './ChatTimeStamp';
import TextBox from './TextBox';
import ChatBox from './ChatBox';

export default function Chat({ chat, index, arr, user, friend, status }) {
	const [same, setSame] = useState(false);
	const i = arr.indexOf(chat);
	const length = arr.length;
	const isSender = chat.sender === user.uid ? true : false;
	useEffect(() => {
		if (i < length - 1) {
			const prevItem = arr[i + 1];
			if (prevItem.sender == chat.sender) {
				setSame(true);
			}
		}
	}, []);
	if (!chat.timestamp) return null;
	return (
		<View key={i}>
			<TextBox isSender={isSender} same={same}>
				<SenderName isSender={isSender} same={same} name={friend.username} />
				<ChatBox>
					{chat.timestamp && isSender && <ChatTimeStamp chat={chat} />}
					<ChatMessage isSender={isSender} same={same} chat={chat} />
					{chat.timestamp && !isSender && <ChatTimeStamp chat={chat} />}
				</ChatBox>
			</TextBox>
			{isSender && chat == arr[0] && <SeenText status={status} />}
		</View>
	);
}
