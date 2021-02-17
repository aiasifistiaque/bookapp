import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function addBook({ book, uid, pressed }) {
	const db = firebase.firestore();
	const [loading, setLoading] = useState(false);
	const [done, setDone] = useState(false);

	useEffect(() => {
		if (pressed) {
			setLoading(true);
			db.collection('books')
				.add({
					id: book.id,
					etag: book.etag,
					uid: uid,
					title: book.volumeInfo.title ? book.volumeInfo.title : '',
					subtitle: book.volumeInfo.subtitle ? book.volumeInfo.subtitle : '',
					authors: book.volumeInfo.authors || [''],
					description: book.volumeInfo.description
						? book.volumeInfo.description
						: '',
					imageLinks: book.volumeInfo.imageLinks
						? book.volumeInfo.imageLinks
						: '',
					started: firebase.firestore.FieldValue.serverTimestamp(),
				})
				.then(() => {
					setLoading(false);
					setDone(true);
				});
		}
	}, [pressed]);

	return { loading, done };
}
