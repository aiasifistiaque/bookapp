import React from 'react';
import { View, Image } from 'react-native';
import { PrimaryText, WhiteText } from '..';
import getDate from '../../hooks/getDate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useRemoveCurrentBook from '../../hooks/useRemoveCurrentBook';
import * as firebase from 'firebase';

const Book = ({ currentBook }) => {
	return (
		<View style={{ alignItems: 'center', marginVertical: 10 }}>
			<PrimaryText size={30}>{currentBook.title}</PrimaryText>
			<Image
				source={{
					uri: currentBook.imageLinks.thumbnail || null,
				}}
				style={{
					marginHorizontal: 20,
					height: 180,
					width: 160,
					resizeMode: 'contain',
				}}
			/>
			<View style={{ marginVertical: 5, alignItems: 'center' }}>
				{currentBook.authors.map((writer, i) => (
					<PrimaryText key={i}>{writer}</PrimaryText>
				))}
				<PrimaryText>Starting Date: {getDate(currentBook.started)}</PrimaryText>
				<FinishedButton />
				<WhiteText>Tap here if you have finished this book!</WhiteText>
			</View>
		</View>
	);
};

const FinishedButton = () => {
	const user = firebase.auth().currentUser;
	return (
		<TouchableOpacity
			onPress={() => useRemoveCurrentBook(user.uid)}
			style={{
				backgroundColor: 'red',
				paddingHorizontal: 30,
				paddingVertical: 10,
				borderRadius: 6,
				marginVertical: 5,
			}}>
			<WhiteText>Finished</WhiteText>
		</TouchableOpacity>
	);
};

export default Book;
