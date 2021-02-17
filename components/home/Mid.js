import React from 'react';
import { View, Text } from 'react-native';
import CurrentBook from './CurrentBook';

export default function Mid() {
	return (
		<View
			style={{
				flex: 1.5,
				backgroundColor: 'rgba(30,30,20,.97)',
				marginHorizontal: '-10%',
				borderRadius: 20,
				alignItems: 'center',
				justifyContent: 'center',
				paddingVertical: 10,
			}}>
			<Text style={{ fontSize: 24, color: 'white', fontWeight: '600' }}>
				Your Current Book
			</Text>
			<CurrentBook />
		</View>
	);
}
