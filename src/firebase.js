import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB6Ec0v7p40k2_oQgFvb4_j7xve07E2DJ8",
  authDomain: "test-code-qr.firebaseapp.com",
  projectId: "test-code-qr",
  storageBucket: "test-code-qr.appspot.com",
  messagingSenderId: "396897484623",
  appId: "1:396897484623:web:6db15ba0125470fb48cf3a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)