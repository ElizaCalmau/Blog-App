import React from 'react'
import { HOME_DESCRIPRION, SIGN_UP } from '../constants/constants'
import { Button } from './Button'

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
                color="text-white bg-accent"
                size="text-2xl font-bold"
                width="w-2/4 "
                padding="py-5"
                position="m-auto"
            />
        </div>
    )
}
