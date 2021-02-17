import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../styles';

export default function MainContainer({ children }) {
	return (
		<View
			style={{
				marginHorizontal: '7%',
				flex: 1,
				backgroundColor: colors.black,
				marginTop: 20,
				borderTopRightRadius: 30,
				borderTopLeftRadius: 30,
			}}>
			{children}
		</View>
	);
}
