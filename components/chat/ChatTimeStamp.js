import React from 'react';
import { View, Text } from 'react-native';

export default function ChatTimeStamp({ chat }) {
	const unixToHourMin = () => {
		const date = new Date(chat.timestamp.seconds * 1000);
		const hour = date.getHours();
		const min =
			date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
		if (hour == 0) return '12:' + min + ' AM';
		if (hour == 12) return '12:' + min + ' PM';
		if (hour < 12) {
			if (hour < 10) return `0${hour}:${min} AM`;
			else return `${hour}:${min} AM`;
		}
		if (hour > 12) {
			let hh = hour - 12;
			if (hh < 10) return `0${hh}:${min} PM`;
			else return `${hh}:${min} PM`;
		}
	};

	return (
		<View>
			<Text style={{ alignSelf: 'flex-end', fontSize: 10, color: 'white' }}>
				{unixToHourMin()}
			</Text>
		</View>
	);
}
