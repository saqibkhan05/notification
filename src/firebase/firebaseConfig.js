// src/firebase/firebaseConfig.js
import { firebase } from '@react-native-firebase/app';

// Optionally configure Firebase (not required if using default setup)
const firebaseConfig = {
    // Your Firebase config here
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
