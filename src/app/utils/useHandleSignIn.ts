import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export interface HandleAuthProp {
    email: string
    password: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    handleSignIn: (event: React.FormEvent) => void
}

export default function useHandleSignIn() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignIn = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log('user', user)
                setEmail('')
                setPassword('')
                router.push('/')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log('error', errorCode, errorMessage)
            })
    }
    return { email, setEmail, password, setPassword, handleSignIn }
}
