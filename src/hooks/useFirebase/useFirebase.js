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
    // facebook login handler here
    const fbHandler = () => {
        return signInWithPopup(auth, fbProvider)

    }
    // google login handler here
    const googleSignInHandler = () => {
        return signInWithPopup(auth, googleProvider)

    }
    // name input handler here
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

    // email input handler here
    const emailHandler = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
        console.log(e.target.value)
        // history.push('/home')
    }
    // password input handler here
    const passwordHandler = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    // registerhandler here
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
    // sign in handler here
    const signInHandler = (e) => {
        e.preventDefault()
        console.log(email, password)
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

    // creat email and password area here

    const creatEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result => {
                const user = result.user
                console.log(user)
                getUserName(name)
                setError('')
                window.location.reload()
            }))
            .catch(() => {
                setError('This email already in use.')
            })
    }
    // sign in email password area here
    const signInEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result => {
                setUser(result.user)
                setError('')
            }))
            .catch(() => {
                setError('alredy logined')
            })
    }
    // logout handler here
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