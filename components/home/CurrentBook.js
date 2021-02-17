import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PrimaryText, WhiteText } from '..';
import { useNavigation } from '@react-navigation/native';
import useCurrentBook from '../../hooks/useCurrentBook';
import getDate from '../../hooks/getDate';

export default function CurrentBook() {
	const navigation = useNavigation();
	const { isReading, currentBook } = useCurrentBook();
	if (isReading == false) return null;
	if (!currentBook) return <ActivityIndicator />;

	return (
		<View
			style={{
				flexDirection: 'row',
				marginVertical: 15,
				flex: 1,
			}}>
			<Image
				source={{
					uri: currentBook.imageLinks.thumbnail || null,
				}}
				style={{
					marginHorizontal: 20,
					height: 140,
					width: 100,
					resizeMode: 'contain',
				}}
			/>
			<View style={{ justifyContent: 'space-between', flex: 1 }}>
				<View>
					<View style={{ marginBottom: 10 }}>
						<PrimaryText size={20} weight='700'>
							{currentBook.title}
						</PrimaryText>
					</View>

					<PrimaryText>Written by:</PrimaryText>
					{currentBook.authors.map((writer, i) => (
						<PrimaryText key={i}>{writer}</PrimaryText>
					))}
					<PrimaryText>
						Starting Date: {getDate(currentBook.started)}
					</PrimaryText>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate('Circle', { book: currentBook })}>
					<WhiteText>Tap to see your book circle</WhiteText>
				</TouchableOpacity>
			</View>
		</View>
	);
}
