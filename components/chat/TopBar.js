import React from 'react';
import { View } from 'react-native';

export default function TopBar({ children }) {
	return (
		<View
			style={{
				height: 50,
				borderBottomWidth: 0.5,
				borderBottomColor: 'rgba(0, 58, 91, 0.3)',
				justifyContent: 'center',
				alignItems: 'center',
				marginHorizontal: '5%',
			}}>
			{children}
		</View>
	);
}
