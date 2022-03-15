import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.Config";

export const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}