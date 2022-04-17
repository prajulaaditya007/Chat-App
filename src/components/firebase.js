import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
    .initializeApp({
        apiKey: "AIzaSyCyAfK7tQ-bi75Kg3MNmPywu3w1ikzmxKs",
        authDomain: "chaddt-102e0.firebaseapp.com",
        projectId: "chaddt-102e0",
        storageBucket: "chaddt-102e0.appspot.com",
        messagingSenderId: "327844698681",
        appId: "1:327844698681:web:2f02f02008380a05084be8",
    })
    .auth();
