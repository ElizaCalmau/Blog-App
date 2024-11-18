import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase/firebase'
import { redirect } from 'next/navigation'

export const SignInWithGoogleButton = () => {
    const handleSignInWithGoogle = async () => {
        await signInWithPopup(auth, provider).catch((error) => {
            console.error('User did not sign in with Google', error)
        })
        redirect('/')
    }
    return (
        <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={handleSignInWithGoogle}
        >
            Sign In With Google
        </button>
    )
}
