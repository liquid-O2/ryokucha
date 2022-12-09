import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'mock key',
  authDomain: 'complexapp-5d19d.firebaseapp.com',
  projectId: 'complexapp-5d19d',
  storageBucket: 'complexapp-5d19d.appspot.com',
  messagingSenderId: '703550922847',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'mock id',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

// connectFirestoreEmulator(db, 'localhost', 8080)
// connectAuthEmulator(auth, 'http://localhost:9099')
