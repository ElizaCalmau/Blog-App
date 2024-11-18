import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function useHandleSignIn() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleAuth = (event: React.FormEvent) => {
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
    return { email, setEmail, password, setPassword, handleAuth }
}
