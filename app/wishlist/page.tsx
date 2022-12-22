import { query, collection, getDocs } from 'firebase/firestore'
import { cache } from 'react'
import { Container } from '../../components/container'
import { Teas } from '../../components/contextProvider'
import { sortArray } from '../../components/utils/sort'
import { db } from '../../firebase/config'
import DisplayStore from '../shop/displayStore'
import DisplayWishlist from './displayWishlist'

const Store = async () => {
  return (
    <Container className=' mt-56'>
      <h1 className='text-5xl px-8 text-center font-bold w-full mb-10'>Your Wishlist</h1>
      <DisplayWishlist />
    </Container>
  )
}

export default Store
