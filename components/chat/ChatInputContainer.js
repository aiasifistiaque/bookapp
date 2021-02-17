import React from 'react';
import { View } from 'react-native';

export default function ChatInputContainer({ children }) {
	return (
		<View
			style={{
				width: '90%',
				borderRadius: 100,
				backgroundColor: 'whitesmoke',
				marginVertical: 5,
				flexDirection: 'row',
				alignItems: 'center',
				paddingLeft: 20,
				justifyContent: 'space-between',
				height: 45,
			}}>
			{children}
		</View>
	);
}
