'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { SignOutButton } from './components/SignOutButton'
import { redirect } from 'next/navigation'
import { UnauthenticatedHome } from './components/UnauthenticatedHome'

interface User {
    email: string | null
    accessToken: string | null
}

export default function Home() {
    const [user, setUser] = useState<User>()
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log('user:', user)
                const token = await user.getIdToken()
                setUser({ email: user.email, accessToken: token })
            } else {
                //redirect('/sign-in')
            }
        })
    }, [])
    return (
        <main className="flex gap-8 items-start">
            <UnauthenticatedHome />
        </main>
    )
}
