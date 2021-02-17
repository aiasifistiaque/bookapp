import React from 'react';
import { View } from 'react-native';

export default function ChatBox({ children }) {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				flexDirection: 'row',
				justifyContent: 'space-between',
				borderBottomColor: 'rgba(0,0,0,.1)',
			}}>
			{children}
		</View>
	);
}
