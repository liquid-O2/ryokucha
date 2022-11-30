import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDtAAd8Hpnyv5Ss1FBu8RHFKbf-PBBVa94',
  authDomain: 'complexapp-5d19d.firebaseapp.com',
  projectId: 'complexapp-5d19d',
  storageBucket: 'complexapp-5d19d.appspot.com',
  messagingSenderId: '703550922847',
  appId: '1:703550922847:web:8b829ae510bb088bc5bbea',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
connectAuthEmulator(auth, 'http://localhost:9099')
