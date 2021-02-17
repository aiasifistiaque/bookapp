import React from 'react';
import { View, Text } from 'react-native';

export default function ChatMessage({ isSender, chat, same }) {
	return (
		<View
			style={{
				marginTop: same ? 4 : 0,
				fontSize: 14,
				maxWidth: '80%',
				minWidth: '40%',
				paddingVertical: 10,
				paddingHorizontal: 10,
				borderTopLeftRadius: isSender ? 10 : 2,
				borderBottomLeftRadius: isSender ? 10 : 2,
				borderTopRightRadius: !isSender ? 10 : 2,
				borderBottomRightRadius: !isSender ? 10 : 2,
				backgroundColor: isSender ? '#DFDBC6' : '#D2F7FF',
			}}>
			<Text
				style={{
					color: !isSender ? 'black' : 'black',
					fontWeight: '400',
					fontSize: 14,
				}}>
				{chat.message}
			</Text>
		</View>
	);
}
