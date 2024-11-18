import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/firebase'
export const useHandleSignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleAuth = (event: React.FormEvent) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log('user', user)
                setEmail('')
                setPassword('')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.error('error', errorCode, errorMessage)
            })
    }

    return { email, setEmail, password, setPassword, handleAuth }
}
