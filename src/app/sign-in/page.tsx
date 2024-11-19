'use client'
import { Accordion } from '../components/Accordion'
import { SignInWithGoogleButton } from '../components/SignInWithGoogleButton'
import { AuthForm } from '../components/AuthForm'
import useHandleSignIn from '../utils/useHandleSignIn'
const SignIn = () => {
    return (
        <div className="grid grid-cols-2 min-h-screen py-10">
            <Accordion title="Sign In With Email">
                <AuthForm title="Sign In" authFunction={useHandleSignIn} />
            </Accordion>
            <Accordion title="Sign In With Google">
                <SignInWithGoogleButton />
            </Accordion>
        </div>
    )
}

export default SignIn
