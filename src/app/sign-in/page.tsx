'use client'
import { Accordion } from '../components/Accordion'
import { SignInWithGoogleButton } from '../components/SignInWithGoogleButton'
import { SignInForm } from '../components/SignInForm'
import useHandleSignIn from '../utils/useHandleSignIn'
const SignIn = () => {
    return (
        <div className="grid grid-cols-3 gap-2 min-h-screen bg-gray-100 p-10">
            <Accordion title="Sign In With Email">
                <SignInForm title="Sign In" authFunction={useHandleSignIn} />
            </Accordion>
            <Accordion title="Sign In With Google">
                <SignInWithGoogleButton />
            </Accordion>
        </div>
    )
}

export default SignIn
