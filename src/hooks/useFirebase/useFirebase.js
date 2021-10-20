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
                setUser(result.user)
            }))
    }
    const googleSignInHandler = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const nameHandler = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    const getUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                setName(name)
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
        if (password.length < 6) {
            setError('place insert min 6 character')
            return
        }
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/.test(password)) {
            setError('password must be 1 uppercase 1 lowercase 1 number')
            return
        }
        creatEmailPassword(email, password)
        signInEmailPass(email, password)
        console.log(email, password)

    }
    const signInHandler = (e) => {
        e.preventDefault()
        signInEmailPass(email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setEmail(user)
                setPassword(user)
            }
        })
    }, [])

    const creatEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result => {
                const user = result.user
                console.log(user)
                getUserName()
                setError('')
            }))
            .catch(() => {
                setError('This email already in use.')
            })
        console.log(email, password)

    }
    const signInEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result => {
                setUser(result.user)
                console.log(result.user)
                setError('')
            }))
            .catch(() => {
                setError('alredy logined')
            })
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