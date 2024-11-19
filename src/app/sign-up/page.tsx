'use client'

import { AuthForm } from '../components/AuthForm'
import { useHandleSignUp } from '../utils/useHandleSignUp'

const SignUp = () => {
    return (
        <div className="flex justify-center row-span-2">
            <AuthForm title="Sing Up" authFunction={useHandleSignUp} />
        </div>
    )
}

export default SignUp
