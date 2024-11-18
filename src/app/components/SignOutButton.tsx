'use client'
import { signOut } from 'firebase/auth'

import { auth } from '../firebase/firebase'

export const SignOutButton: React.FC = () => {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => console.log('user logged out'))
            .catch((error) => console.error(error))
    }
    return (
        <button
            className="border-2 border-orange-400/50 p-3 rounded-md"
            onClick={handleSignOut}
        >
            {' '}
            Sign Out{' '}
        </button>
    )
}
