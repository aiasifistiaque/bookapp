import React from 'react';
import { View } from 'react-native';

export default function TextBox({ isSender, same, children }) {
	return (
		<View
			style={{
				flex: 1,
				alignSelf: isSender ? 'flex-end' : 'flex-start',
				width: '100%',
				shadowColor: 'black',
				shadowOpacity: 0.1,
				shadowOffset: {
					height: 2,
					width: 1,
				},
				shadowRadius: 4,
				paddingHorizontal: 2,
				marginTop: same ? 0 : 10,
				borderRightColor: '#BCAF37',
				borderLeftColor: '#0038FF',
				borderRightWidth: isSender ? 4 : 0,
				borderLeftWidth: !isSender ? 4 : 0,
			}}>
			{children}
		</View>
	);
}
