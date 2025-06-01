import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import {
    initializeAuth,
    getReactNativePersistence,
} from "firebase/auth/react-native";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
    apiKey: "AIzaSyAVaqXLpONFxaD0BV9qeqlTiydSMVC-Dpk",
    authDomain: "fitwithmit-84f69.firebaseapp.com",
    projectId: "fitwithmit-84f69",
    storageBucket: "fitwithmit-84f69.firebasestorage.app",
    messagingSenderId: "499849975845",
    appId: "1:499849975845:web:48b276a93617461ab3c7cc",
    measurementId: "G-Z2YCWP02W6"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);


