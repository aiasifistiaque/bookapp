import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../styles';
import * as firebase from 'firebase';
import { WhiteText } from '..';

export default function LogoutButton() {
	return (
		<TouchableOpacity
			onPress={() => firebase.auth().signOut()}
			style={{
				width: '70%',
				paddingVertical: 12,
				backgroundColor: colors.primary,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 100,
				marginVertical: 10,
			}}>
			<WhiteText>Log Out</WhiteText>
		</TouchableOpacity>
	);
}
