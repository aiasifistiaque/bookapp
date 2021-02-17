import React from 'react';
import { View, Text } from 'react-native';

export default function SenderName({ isSender, same, name }) {
	return (
		<View style={{ alignItems: isSender ? 'flex-end' : 'flex-start' }}>
			{!same && (
				<Text
					style={{
						marginTop: -3,
						fontSize: 14,
						fontWeight: '700',
						textTransform: 'uppercase',
						color: isSender ? '#BCAF37' : '#0038FF',
					}}>
					{isSender ? 'me' : name}
				</Text>
			)}
		</View>
	);
}
