import { Container } from '../../components/container'
import PageWrapper from '../../components/pageWrapper'
import DisplayWishlist from './displayWishlist'

const Store = () => {
  return (
    <PageWrapper>
      <Container className=' mt-56'>
        <h1 className='text-5xl px-8 text-center font-semibold w-full mb-10'>Your Wishlist</h1>
        <DisplayWishlist />
      </Container>
    </PageWrapper>
  )
}

export default Store
