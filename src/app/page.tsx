'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { SignOutButton } from './components/SignOutButton'
import { redirect } from 'next/navigation'

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
                redirect('/sign-in')
            }
        })
    }, [])
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {user?.email}
                {user?.email && <SignOutButton />}
            </main>
        </div>
    )
}
