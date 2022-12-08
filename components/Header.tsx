import Link from 'next/link'
import * as Icon from 'react-feather'
import Container from './Container'

const Header = () => {
  return (
    <>
      <header className=' header w-full font-serif leading-none fixed top-0 left-0  bg-background bg-opacity-70'>
        <Container className='h-16 flex rounded-3xl items-center  z-50'>
          <p className='text-2xl  mr-auto '>緑茶</p>
          <nav className='flex gap-x-4 md:gap-x-6'>
            <Link href={'/shop'} className='text-lg md:text-xl '>
              shop
            </Link>
            <Link href={'/search'} className='text-lg md:text-xl'>
              search
            </Link>
            <Link href={'/login'} className='text-lg md:text-xl mr-2'>
              login
            </Link>
            <button>
              <Icon.ShoppingCart size={20} />
            </button>
          </nav>
        </Container>
      </header>
    </>
  )
}

export default Header
