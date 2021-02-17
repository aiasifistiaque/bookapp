import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SendChatButton({ sendMessage }) {
	return (
		<TouchableOpacity
			onPress={sendMessage}
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				paddingHorizontal: 20,
				paddingVertical: 10,
			}}>
			<Text style={{ color: 'dodgerblue' }}>send</Text>
		</TouchableOpacity>
	);
}
