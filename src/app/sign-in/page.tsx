'use client'
import { useState } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { Accordion } from '../components/Accordion'
import { SignInWithGoogleButton } from '../components/SignInWithGoogleButton'
const SignIn = () => {
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

    return (
        <div className="grid grid-cols-3 gap-2 min-h-screen bg-gray-100 p-10">
            <Accordion title="Sign In With Email">
                <form
                    onSubmit={handleSignIn}
                    className="bg-white p-8 rounded shadow-md w-80"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Sign In
                    </h2>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="email"
                        >
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
                        Sign In
                    </button>
                </form>
            </Accordion>
            <Accordion title="Sign In With Google">
                <SignInWithGoogleButton />
            </Accordion>
        </div>
    )
}

export default SignIn
