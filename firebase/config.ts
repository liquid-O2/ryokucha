import { initializeApp } from 'firebase/app'
import { browserLocalPersistence, GoogleAuthProvider, indexedDBLocalPersistence, initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'mock key',
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || 'mock auth domain',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || 'mock project id',
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || 'mock storage bucket',
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || 'mock messaging sender id',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'mock id',
}

const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence],
})
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()
