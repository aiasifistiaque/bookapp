import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default function useIsOnline(uid) {
	const db = firebase.firestore();
	const [status, setStatus] = useState('');

	const isOnline = () => {
		db.collection('onlinestatus')
			.doc(uid)
			.onSnapshot(doc => {
				if (doc.exists) {
					setStatus(doc.data().status);
				}
			});
	};

	useEffect(() => {
		isOnline();
	}, []);

	return { status };
}
