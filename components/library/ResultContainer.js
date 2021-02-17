import React from 'react';
import { View } from 'react-native';
import { colors } from '../../styles';

export default function ResultContainer({ children }) {
	return (
		<View
			style={{
				backgroundColor: colors.primary,
				padding: 20,
				alignItems: 'center',
				flexDirection: 'row',
			}}>
			{children}
		</View>
	);
}
