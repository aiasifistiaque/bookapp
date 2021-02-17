import React from 'react';
import { View } from 'react-native';
import { WhiteText, PrimaryText } from '.';
import useIsOnline from '../hooks/useIsOnline';
import useCurrentBook from '../hooks/useCurrentBook';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function OnlineStatus({ friend }) {
	const navigation = useNavigation();
	const { status } = useIsOnline(friend.uid);
	const { currentBook } = useCurrentBook();

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
			}}>
			<TouchableOpacity
				onPress={() => navigation.navigate('FLibrary', { friend: friend })}
				style={{
					flex: 1,
					alignItems: 'center',
					paddingHorizontal: 90,
				}}>
				<WhiteText>{friend.username}</WhiteText>
				{currentBook && <WhiteText size={18}>{currentBook.title}</WhiteText>}
				<PrimaryText size={12}>
					{status == 'active' ? 'online' : 'offline'}
				</PrimaryText>
			</TouchableOpacity>
		</View>
	);
}
