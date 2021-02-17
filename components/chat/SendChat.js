import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SendChatButton from './SendChatButton';
import ChatInputContainer from './ChatInputContainer';

export default function SendChat({ message, setMessage, sendMessage }) {
	return (
		<View
			style={{
				flex: 0.8,
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<ChatInputContainer>
				<View style={{ flex: 1, flexDirection: 'column' }}>
					<TextInput
						placeholder='enter text'
						value={message}
						onChangeText={text => setMessage(text)}
					/>
				</View>
				<SendChatButton sendMessage={sendMessage} />
			</ChatInputContainer>
		</View>
	);
}
