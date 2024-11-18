import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyDj5VaVFlMZSISrffU3M-GU015Cq5PFGNI',
    authDomain: 'elizabethcalamureactapp.firebaseapp.com',
    projectId: 'elizabethcalamureactapp',
    storageBucket: 'elizabethcalamureactapp.firebasestorage.app',
    messagingSenderId: '548106812981',
    appId: '1:548106812981:web:453dfe32b79efe95fc7b7c',
}

export const provider = new GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
export { auth, app }
