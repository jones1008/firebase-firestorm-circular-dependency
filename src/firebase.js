const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

import * as firestorm from 'firebase-firestorm';

const firestore = firebase.initializeApp({
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx",
    measurementId: "xxx"
}).firestore();

firestorm.initialize(firestore);