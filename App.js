import React from 'react';
import Navigator from './navigation';
import * as firebase from 'firebase';
//import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './constants/firebase';

firebase.initializeApp(firebaseConfig);

export default function App() {
	return <Navigator />;
}
