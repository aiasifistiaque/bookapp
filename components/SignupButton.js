import React from 'react';
import { TouchableOpacity } from 'react-native';
import { WhiteText } from '.';
import { colors } from '../styles';

export default function SignupButton({ buttonPressed }) {
	return (
		<TouchableOpacity
			onPress={buttonPressed}
			style={{
				width: '70%',
				paddingVertical: 12,
				backgroundColor: colors.primary,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 100,
				marginVertical: 10,
			}}>
			<WhiteText>Sign Up</WhiteText>
		</TouchableOpacity>
	);
}
