'use client'
import { Accordion } from '../components/Accordion'
import { Button } from '../components/Button'
import { AuthForm } from '../components/AuthForm'
import useHandleSignIn from '../utils/useHandleSignIn'
import { SIGN_IN_WITH_GOOGLE } from '../constants/constants'
import { handleAuthWithGoogle } from '../utils/handleAuthWithGoogle'

const SignIn = () => {
    return (
        <div className="items-center row-span-3">
            <Accordion title="Sign In With Google">
                <Button
                    styles="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors text-center w-2/4 ml-8"
                    text={SIGN_IN_WITH_GOOGLE}
                    onClick={handleAuthWithGoogle}
                />
            </Accordion>
            <Accordion title="Sign In With Email">
                <AuthForm title="Sign In" authFunction={useHandleSignIn} />
            </Accordion>
        </div>
    )
}

export default SignIn
