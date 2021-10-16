import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // const handleRegistration = e => {
    //     e.preventDefault();
    //     isLoggedIn ? register(email, password) : SignInUsingEmailAndPassword(email, password);
    // }

    const signInUsingGoogle = (e) => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            }, [])
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
    }
    const SignInUsingEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setUserName();
                setIsLoggedIn(true)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
    }
    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    useEffect(() => {
        const unsubscribed = () => {
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user);
                }
                else {
                    setUser({});
                }
            })
        }
        return () => unsubscribed;
    }, [])
    return {
        user,
        register,
        signInUsingGoogle,
        SignInUsingEmailAndPassword,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        logOut,
        // handleRegistration,
        isLoggedIn,
        setIsLoggedIn

    };
};

export default useFirebase;