import React, { useState } from 'react';
import { View } from 'react-native';
import { gStyles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShelfSample from '../components/ShelfSample';
import SearchBar from '../components/library/SearchBar';
import SearchResult from '../components/library/SearchResult';
import * as firebase from 'firebase';
import useSearchBook from '../hooks/useSearchBook';

export default function LibraryPage() {
	const user = firebase.auth().currentUser;
	const [search, setSearch] = useState('');
	const { searchResult, subtitle, dat } = useSearchBook(search);

	return (
		<View style={gStyles.background}>
			<SafeAreaView>
				<SearchBar search={search} setSearch={text => setSearch(text)} />
			</SafeAreaView>
			<View>
				{search.length > 0 && (
					<SearchResult
						search={search}
						res={searchResult}
						subtitle={subtitle}
						dat={dat}
						uid={user.uid}
					/>
				)}
				<ShelfSample />
			</View>
		</View>
	);
}
