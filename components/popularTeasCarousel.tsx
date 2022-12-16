import { collection, getDocs, query, where } from 'firebase/firestore'
import Link from 'next/link'

import { db } from '../firebase/config'
import Carousel from './carouselFramer'
import { Container } from './container'
import { FavouriteTeas } from './favouriteTeas'

export type Teas = {
  name: string
  id: string
  attributes: Array<string>
  image: string
  price: string
  featured?: boolean
}

// const fetchTeas = async () => {
//   const q = query(collection(db, 'teas'), where('featured', '==', true))
//   const data = await getDocs(q)
//   const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//   return teas as Teas[]
// }

export const PopularTeas = async () => {
  // let teas = await fetchTeas()
  return (
    <>
      <div className='popularTeas flex '>
        <Carousel
          teas={[
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
            {
              name: 'a',
              price: '$99',
              id: 'sfsefsd',
              attributes: ['smooth', 'sweet'],
              image:
                'https://firebasestorage.googleapis.com/v0/b/complexapp-5d19d.appspot.com/o/Teas%2FGyokuro%20Cha%20Meijin.png?alt=media&token=ccfd0628-d450-43a4-849b-313f44843e24',
            },
          ]}
        />
      </div>
    </>
  )
}
