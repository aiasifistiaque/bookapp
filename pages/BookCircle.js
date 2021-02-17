import React from 'react';
import { View } from 'react-native';
import { colors } from '../styles';
import HeaderHome from '../components/home/HeaderHome';
import MainContainer from '../components/home/MainContainer';
import BookmateSearch from '../components/home/BookmateSearch';
import ReaderCircle from '../components/home/ReaderCircle';
import Book from '../components/home/Book';

export default function BookCircle({ route }) {
	const { book } = route.params;
	return (
		<View style={{ flex: 1, backgroundColor: colors.primary }}>
			<HeaderHome header='Book Circle' />
			<MainContainer>
				<View>
					<Book currentBook={book} />
				</View>
				<View style={{ alignItems: 'center' }}>
					<BookmateSearch />
				</View>
				<View style={{ alignItems: 'center' }}>
					<ReaderCircle currentBook={book} />
				</View>
			</MainContainer>
		</View>
	);
}
