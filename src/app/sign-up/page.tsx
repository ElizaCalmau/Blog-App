'use client'

import { AuthForm } from '../components/AuthForm'
import { useHandleSignUp } from '../utils/useHandleSignUp'

const SignUp = () => {
    return <AuthForm title="Sing Up" authFunction={useHandleSignUp} />
}

export default SignUp
