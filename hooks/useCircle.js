import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function useCircle(id) {
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState();
	const db = firebase.firestore();

	useEffect(() => {
		setLoading(true);
		db.collection('users')
			.where('bookid', '==', id)
			.onSnapshot(
				querySnapshot => {
					const threads = querySnapshot.docs.map(documentSnapshot => {
						if (documentSnapshot.data().isReading == true)
							return {
								_id: documentSnapshot.id,
								name: documentSnapshot.data().username || '',
								book: documentSnapshot.data().currentBook.title || '',
								...documentSnapshot.data(),
							};
					});
					const reverseThreads = threads.reverse();
					setResult(() => reverseThreads);
					setLoading(() => false);
				},
				err => console.log(err)
			);
	}, []);

	return { result, loading };
}
