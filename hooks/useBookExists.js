import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function useBookExists({ book, uid }) {
	const db = firebase.firestore();
	const [exists, setExists] = useState(false);
	const [existsLoading, setExistsLoading] = useState(false);
	const [books, setBooks] = useState();

	useEffect(() => {
		if (book) {
			console.log('new query');
			setExistsLoading(true);
			db.collection('books')
				.get()
				.then(querySnapshot => {
					console.log('doc', querySnapshot.length);
					querySnapshot.forEach(f => {
						setBooks(f);
						console.log('1');
					});
					setExistsLoading(false);
				})
				.catch(e => console.log('err'));
		}
	}, [book]);

	console.log(books);

	return {
		exists,
		existsLoading,
	};
}
