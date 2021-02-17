import React from 'react';
import { View } from 'react-native';
import { PrimaryText } from '..';
import ResultContainer from './ResultContainer';

export default function BookAdded() {
	return (
		<ResultContainer>
			<View style={{ alignItems: 'center' }}>
				<PrimaryText>Book has been added to the library</PrimaryText>
			</View>
		</ResultContainer>
	);
}
