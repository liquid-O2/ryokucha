import Link from 'next/link'
import * as Icon from 'react-feather'
import Container from './container'

const Header = () => {
  return (
    <>
      <header className=' header w-full font-serif leading-none fixed top-0 left-0  bg-background bg-opacity-70 z-50'>
        <Container className='h-16 flex rounded-3xl items-center  z-[90]'>
          <Link href={'/'} className='mr-auto'>
            <p className='text-2xl'>緑茶</p>
          </Link>
          <nav className='flex gap-x-4 md:gap-x-6'>
            <Link href={'/shop'} className='text-lg  '>
              shop
            </Link>
            <Link href={'/search'} className='text-lg '>
              search
            </Link>
            <Link href={'/login'} className='text-lg  mr-2'>
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
