import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function getBooksFromUsers(uid) {
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState();
	const db = firebase.firestore();

	useEffect(() => {
		setLoading(true);
		db.collection('books')
			.where('uid', '==', uid)

			.onSnapshot(
				querySnapshot => {
					const threads = querySnapshot.docs.map(documentSnapshot => {
						return {
							_id: documentSnapshot.id,
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
