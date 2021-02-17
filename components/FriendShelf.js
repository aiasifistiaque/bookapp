import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Book from './Book';
import { ScrollView } from 'react-native-gesture-handler';
import getBooksFromUsers from '../hooks/getBooksFromUsers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WhiteText } from '.';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FriendShelf({ friend }) {
	const { result, loading } = getBooksFromUsers(friend.uid);
	const navigation = useNavigation();
	return (
		<SafeAreaView style={{ flex: 1, padding: 10 }}>
			<View
				style={{
					alignItems: 'center',
					paddingVertical: 10,
					flexDirection: 'row',
				}}>
				<TouchableOpacity
					style={{ padding: 10 }}
					onPress={() => navigation.goBack()}>
					<AntDesign name='left' size={20} color='white' />
				</TouchableOpacity>

				<View
					style={{
						flex: 1,
						alignItems: 'center',
						marginRight: 20,
					}}>
					<WhiteText size={20}>{friend.username}'s Library</WhiteText>
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				{result.map((book, i) => (
					<Book key={i} book={book} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
}
