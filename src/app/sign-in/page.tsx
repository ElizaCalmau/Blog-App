'use client'
import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                console.log('user', user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log('error', errorCode, errorMessage)
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSignIn}
                className="bg-white p-8 rounded shadow-md w-80"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Sign Up
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignIn
