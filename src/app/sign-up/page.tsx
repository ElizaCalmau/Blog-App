'use client'

import { AuthForm } from '../components/AuthForm'
import { SIGN_UP } from '../constants/constants'
import { useHandleSignUp } from '../utils/useHandleSignUp'

const SignUp = () => {
    return (
        <div className="flex justify-center row-span-2">
            <AuthForm title={SIGN_UP} authFunction={useHandleSignUp} />
        </div>
    )
}

export default SignUp
