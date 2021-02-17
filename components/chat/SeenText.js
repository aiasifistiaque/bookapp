import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../styles';

export default function SeenText({ status }) {
	return (
		<Text
			style={{
				marginTop: 4,
				marginHorizontal: 20,
				alignSelf: 'flex-end',
				fontSize: 12,
				fontWeight: '600',
				color: colors.primary,
				textTransform: 'capitalize',
			}}>
			{status}
		</Text>
	);
}
