import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../styles';

export default function PageLoading() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: colors.black,
			}}>
			<ActivityIndicator color='white' />
		</View>
	);
}
