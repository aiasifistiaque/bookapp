import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function HeaderHome({ header }) {
	return (
		<SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
				{header}
			</Text>
		</SafeAreaView>
	);
}
