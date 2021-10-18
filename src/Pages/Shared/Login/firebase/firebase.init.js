import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initailizeAuthenticaion = () => {
    return initializeApp(firebaseConfig);
}

export default initailizeAuthenticaion