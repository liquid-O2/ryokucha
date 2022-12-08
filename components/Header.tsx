import Link from 'next/link'
import * as Icon from 'react-feather'

const Header = () => {
  return (
    <>
      <header className='w-full font-serif leading-none fixed top-0 left-0 '>
        <div className=' header max-w-[1920px] m-auto  bg-green-50 bg-opacity-50 h-16 flex rounded-3xl items-center mt-4 px-6 md:px-12 w-full '></div>
        <div className=' max-w-[1920px] m-auto  h-16 flex rounded-3xl items-center mt-4 px-6 md:px-12 w-full absolute top-0 mx-auto left-0 right-0  z-50'>
          <p className='text-2xl  mr-auto '>緑茶</p>
          <nav className='flex gap-x-6'>
            <Link href={'/shop'} className='text-xl '>
              shop
            </Link>
            <Link href={'/search'} className='text-xl'>
              search
            </Link>
            <Link href={'/login'} className='text-xl underline mr-2'>
              login
            </Link>
            <button>
              <Icon.ShoppingCart size={20} />
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
