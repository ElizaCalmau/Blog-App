import React from 'react'
import Link from 'next/link'
import { ROUTES, SIGN_IN_PROMPT, SIGN_IN } from '../constants/constants'
export const SignInPrompt = () => {
    return (
        <div className="my-2 text-primary">
            <span className="text-sm">{SIGN_IN_PROMPT} </span>
            <Link href={ROUTES.SIGN_IN} className="hover:text-blue-500">
                {SIGN_IN}
            </Link>
        </div>
    )
}
