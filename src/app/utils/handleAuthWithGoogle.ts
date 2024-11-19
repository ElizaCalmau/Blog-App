import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase/firebase'
import { redirect } from 'next/navigation'
export const handleAuthWithGoogle = async () => {
    await signInWithPopup(auth, provider).catch((error) => {
        console.error('User did not sign in with Google', error)
    })
    redirect('/')
}
