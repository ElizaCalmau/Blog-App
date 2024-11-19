import React from 'react'
import { HOME_DESCRIPRION, SIGN_UP, ROUTES } from '../constants/constants'
import { Button } from './Button'
import { handleRedirect } from '../utils/handleRedirect'
export const UnauthenticatedHome: React.FC = () => {
    return (
        <div className="flex flex-col gap-20">
            <div>
                <h1 className="text-6xl text-primary font-extrabold pb-5">
                    Unleashing the Power of{' '}
                    <span className="text-secondary">Connection</span>
                </h1>
                <p className="text-xl">{HOME_DESCRIPRION}</p>
            </div>
            <Button
                text={SIGN_UP}
                styles="bg-blue-500 text-white font-bold text-lg rounded hover:bg-blue-600 transition-colors w-2/4 py-5 m-auto"
                onClick={() => handleRedirect(ROUTES.SIGN_UP)}
            />
        </div>
    )
}
