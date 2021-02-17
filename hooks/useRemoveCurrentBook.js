import * as firebase from 'firebase';
import 'firebase/firestore';

export default function useRemoveCurrentBook(uid) {
	const db = firebase.firestore();
	db.collection('users').doc(uid).update({
		isReading: false,
		bookid: null,
		currentBook: null,
	});
}
