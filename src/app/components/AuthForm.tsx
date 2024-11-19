import { SIGN_UP } from '../constants/constants'
import { HandleAuthProp } from '../types/types'
import { Button } from './Button'
import { SignInPrompt } from './SignInPrompt'
interface Prop {
    title: string
    authFunction: () => HandleAuthProp
}

export const AuthForm: React.FC<Prop> = ({ title, authFunction }) => {
    const { email, setEmail, password, setPassword, handleAuth } =
        authFunction()
    return (
        <form
            onSubmit={handleAuth}
            className="bg-white p-8 rounded shadow-md w-80"
        >
            <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                    required
                />
            </div>
            {title === SIGN_UP && <SignInPrompt />}
            <Button
                text={title}
                styles="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                type="submit"
                onClick={handleAuth}
            />
        </form>
    )
}
