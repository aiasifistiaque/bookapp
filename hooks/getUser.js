import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function getUser() {
	const currentUser = firebase.auth().currentUser;
	const [user, setUser] = useState('');
	const [name, setName] = useState('');
	const [loading, setLoading] = useState();
	const db = firebase.firestore();

	useEffect(() => {
		setLoading(true);
		db.collection('users')
			.doc(currentUser.uid)
			.onSnapshot(doc => {
				if (doc.exists) {
					setUser(() => doc.data());
					setName(() => currentUser.username);
					setLoading(() => false);
				}
			});
	}, [currentUser]);

	return { user, loading, name };
}
