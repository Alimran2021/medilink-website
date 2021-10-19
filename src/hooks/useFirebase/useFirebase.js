import initailizeAuthenticaion from "../../Pages/Shared/Login/firebase/firebase.init";
import {
    getAuth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
initailizeAuthenticaion()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth()
    const fbProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()
    const fbHandler = () => {
        signInWithPopup(auth, fbProvider)
            .then((result => {
                const { displayName, email, photoURL } = result.user
                const fbLogged = {
                    name: displayName,
                    email: email,
                    img: photoURL
                }

                setUser(fbLogged)
            }))
    }
    const googleSignInHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then((result => {
                const { displayName, email, photoURL } = result.user
                const googleLogged = {
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                setUser(googleLogged)
            }))
    }
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
    }
    const passwordHandler = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    const registerHandler = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('place insert min 6 character')
            return
        }
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/.test(password)) {
            setError('password must be 1 uppercase 1 lowercase 1 number')
            return
        }
        creatEmailPassword(email, password)
    }
    const signInHandler = (e) => {
        e.preventDefault()
        signInEmailPass(email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user)
            }
        })
    }, [])

    const creatEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result => {
                const user = result.user
                console.log(user)
                setError('')
            }))
            .catch(() => {
                setError('This email already in use.')
            })
        console.log(email, password)
        getUserName()
    }
    const signInEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result => {
                console.log(result.user)
            }))
    }
    const logOutHandler = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }
    return {
        user,
        email,
        password,
        error,
        nameHandler,
        registerHandler,
        emailHandler,
        passwordHandler,
        signInHandler,
        fbHandler,
        googleSignInHandler,
        logOutHandler

    }

};

export default useFirebase;