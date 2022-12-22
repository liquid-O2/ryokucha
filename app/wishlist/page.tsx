import { Container } from '../../components/container'
import DisplayWishlist from './displayWishlist'

const Store = () => {
  return (
    <Container className=' mt-56'>
      <h1 className='text-5xl px-8 text-center font-bold w-full mb-10'>Your Wishlist</h1>
      <DisplayWishlist />
    </Container>
  )
}

export default Store
