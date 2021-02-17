import React from 'react';
import { View, Text } from 'react-native';
import Book from './Book';
import { ScrollView } from 'react-native-gesture-handler';
import getAllBooks from '../hooks/getAllBooks';

export default function ShelfSample() {
	const { result, loading } = getAllBooks();
	return (
		<ScrollView>
			<View style={{ flex: 1, padding: 10 }}>
				{result.map((book, i) => (
					<Book key={i} book={book} />
				))}
			</View>
		</ScrollView>
	);
}
