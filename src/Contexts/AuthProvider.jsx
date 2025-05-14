import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const AuthProvider = ({ children }) => {

    const [jsonFile, setJsonFile] = useState(null)
    const [user, setUser] = useState(null)



    useEffect(() => {
        const jsonFilePromise = fetch('/public/Jobs.json').then(res => res.json()).then(data => {
            setJsonFile(data)
        })
    }, [])


    // const jsonFilePromise = fetch('/public/Jobs.json').then(res => res.json())

    // const jsonFile = use(jsonFilePromise)
    // console.log(jsonFile);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log('user ->', currentUser)
            setUser(currentUser)
        }
        else {
            console.log('user?', currentUser)
        }
    })


    const LogOut = () => {
        signOut(auth)
            .then(() => {
                console.log('user LoggedOut')
            })
    }


    const provider = new GoogleAuthProvider();
    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
    }



    const userinfo = {
        jsonFile: jsonFile,
        createUser,
        logIn,
        user,
        LogOut,
        googleLogIn
    }

    return (
        <AuthContext value={userinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;