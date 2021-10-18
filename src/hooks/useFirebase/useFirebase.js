import initailizeAuthenticaion from "../../Pages/Shared/Login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
initailizeAuthenticaion()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth()
    const nameHandler = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    const getUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
    }
    const emailHandler = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const passwordHandler = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    const registerHandler = (e) => {
        e.preventDefault()
        creatEmailPassword(email, password)
    }
    const creatEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result => {
                const user = result.user
                console.log(user)
            }))
        console.log(email, password)
        getUserName()
    }
    const signInHandler = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result => {
                console.log(result.user)
            }))
    }
    return {
        user,
        email,
        password,
        nameHandler,
        registerHandler,
        emailHandler,
        passwordHandler,
        signInHandler
    }

};

export default useFirebase;