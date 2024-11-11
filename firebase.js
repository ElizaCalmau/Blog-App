import { initializeApp } from 'firebase/app'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: 'elizabethcalamureactapp.firebaseapp.com',
    projectId: 'elizabethcalamureactapp',
    storageBucket: 'elizabethcalamureactapp.firebasestorage.app',
    messagingSenderId: '548106812981',
    appId: '1:548106812981:web:453dfe32b79efe95fc7b7c',
}

const app = initializeApp(firebaseConfig)

export default app
