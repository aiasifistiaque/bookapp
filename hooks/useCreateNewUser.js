import React, { useEffect } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function useCreateNewUser() {
	const db = firebase.firestore();
	const user = firebase.auth().currentUser;

	useEffect(() => {
		if (user) {
			db.collection('users')
				.doc(user.uid)
				.get()
				.then(doc => {
					if (doc.exists) {
						console.log('this user already exists');
					} else {
						const [username, provider] = user.email.split('@');
						db.collection('users').doc(user.uid).set({
							displayName: user.displayName,
							uid: user.uid,
							email: user.email,
							username: username,
							phoneNumeber: user.phoneNumber,
							photoUrl: user.photoURL,
							isReading: false,
						});
					}
				})
				.catch(error => {
					console.log(
						'there was an error while fetching user from auth to user table',
						error
					);
				});
		}
		return () => {
			console.log('listener is supposed to be removed');
		};
	}, [user]);

	return null;
}
