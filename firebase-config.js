import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCWk4wU1Jr7DppWER_a3EkWnFhNXEM0g7Q",
    authDomain: "meals-to-go-ee731.firebaseapp.com",
    projectId: "meals-to-go-ee731",
    storageBucket: "meals-to-go-ee731.appspot.com",
    messagingSenderId: "892577693993",
    appId: "1:892577693993:web:ab529559b1219b08d77738"
};

export const app = initializeApp(firebaseConfig);