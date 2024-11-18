'use client'
import { Accordion } from '../components/Accordion'
import { SignInWithGoogleButton } from '../components/SignInWithGoogleButton'
import { AuthForm } from '../components/AuthForm'
import useHandleSignIn from '../utils/useHandleSignIn'
const SignIn = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 min-h-screen bg-gray-100 p-10">
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
