import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderHome from '../components/home/HeaderHome';
import MainContainer from '../components/home/MainContainer';
import { colors } from '../styles';
import SearchBook from '../components/home/SearchBook';
import Result from '../components/home/Result';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import useSearchBook from '../hooks/useSearchBook';

export default function AddBookPage() {
	const [search, setSearch] = useState('');
	const db = firebase.firestore();
	const user = firebase.auth().currentUser;
	const navigation = useNavigation();
	const { dat } = useSearchBook(search);
	const [loading, setLoading] = useState();

	const addNewBook = () => {
		setLoading(true);
		const book = dat;
		db.collection('books').add({
			id: book.id,
			etag: book.etag,
			uid: user.uid,
			title: book.volumeInfo.title ? book.volumeInfo.title : '',
			subtitle: book.volumeInfo.subtitle ? book.volumeInfo.subtitle : '',
			authors: book.volumeInfo.authors || [''],
			description: book.volumeInfo.description
				? book.volumeInfo.description
				: '',
			imageLinks: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : '',
			started: firebase.firestore.FieldValue.serverTimestamp(),
		});

		db.collection('users')
			.doc(user.uid)
			.update({
				isReading: true,
				bookid: book.id,
				currentBook: {
					id: book.id,
					etag: book.etag,
					uid: user.uid,
					title: book.volumeInfo.title ? book.volumeInfo.title : '',
					subtitle: book.volumeInfo.subtitle ? book.volumeInfo.subtitle : '',
					authors: book.volumeInfo.authors ? book.volumeInfo.authors : [''],
					description: book.volumeInfo.description
						? book.volumeInfo.description
						: '',
					imageLinks: book.volumeInfo.imageLinks
						? book.volumeInfo.imageLinks
						: '',
					started: firebase.firestore.FieldValue.serverTimestamp(),
				},
			})
			.then(() => {
				setLoading(false);
				navigation.goBack();
			});
	};

	return (
		<View style={{ flex: 1, backgroundColor: colors.primary }}>
			<HeaderHome header='Add Book' />
			<MainContainer>
				<SearchBook search={search} setSearch={text => setSearch(text)} />
				{search.length > 0 && (
					<View style={{ flex: 1 }}>
						<Result
							addButtonPressed={addNewBook}
							search={search}
							dat={dat}
							loading={loading}
						/>
					</View>
				)}
			</MainContainer>
		</View>
	);
}
