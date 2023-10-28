import { app as firebase } from '../../../firebase-config.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const auth = getAuth(firebase);

export const registerRequest = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User created:', user.uid);
            return userCredential
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('User creation error:', errorCode, errorMessage);
        });
};

export const loginRequest = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User logged in:', user.uid);
            return userCredential
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorCode, errorMessage);
        });
};

export const checkAuthState = (setUser) => {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User logged in:', user.uid);
            setUser(user);
        } else {
            console.log('User logged out');
        }
    });
};

export const logoutRequest = () => {
    return signOut(auth)
        .then(() => {
            console.log('User logged out successfully');
            return;
        })
        .catch((error) => {
            console.error('Logout error:', error);
            // You can handle the error here if needed
            throw error;
        });
};