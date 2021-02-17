import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../styles';
import { WhiteText } from '..';

export default function AddBookToLibrary({ loading, setPressed }) {
	return (
		<TouchableOpacity
			onPress={setPressed}
			style={{
				backgroundColor: colors.black,
				alignItems: 'center',
				marginVertical: 10,
				paddingHorizontal: 20,
				paddingVertical: 10,
				borderRadius: 100,
			}}>
			{loading ? (
				<ActivityIndicator color='white' />
			) : (
				<WhiteText>add book</WhiteText>
			)}
		</TouchableOpacity>
	);
}
