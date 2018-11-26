import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
	apiKey: 'AIzaSyDs6D0mBTScHVgI1Zc-41A6NOsUG_LDd1E',
	authDomain: 'my-base-app.firebaseapp.com',
	databaseURL: 'https://my-base-app.firebaseio.com',
	projectId: 'my-base-app',
	storageBucket: 'my-base-app.appspot.com',
	messagingSenderId: '1053450346606',
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
// export const provider = new firebase.auth.FacebookAuthProvider();
