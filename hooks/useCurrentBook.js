import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function useCurrentBook() {
	const db = firebase.firestore();
	const user = firebase.auth().currentUser;
	const [isReading, setIsReading] = useState(false);
	const [currentBook, setCurrentBook] = useState();
	useEffect(() => {
		if (user) {
			db.collection('users')
				.doc(user.uid)
				.onSnapshot(doc => {
					setIsReading(() => doc.data().isReading);
					doc.data().isReading == true &&
						setCurrentBook(() => doc.data().currentBook);
				});
		}
	}, [user]);

	return { isReading: isReading, currentBook: currentBook };
}
