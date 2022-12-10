import Image from 'next/image'
import teaFieldDark from '/public/teaFieldDark.jpg'
import { Container } from './container'
export const Hero = () => {
  return (
    <>
      <Container>
        <div className='hero-text flex flex-col justify-center items-center leading-tight'>
          <p className='font-serif text-4xl mt-[9rem]'>緑茶</p>
          <p className='font-serif text-6xl mt-3'>Ryokucha</p>
          <h1 className='text-lg leading-snug font-sans text-center mt-6'>
            Enjoy the Finest Japanese Green Tea.
            <br /> Taste the extraordinary flavour of pure, organic green <br />
            {`tea from Japan's finest tea growers.`}
          </h1>
          <button className='py-4 px-16 text-green-50 text-lg font-semibold rounded-2xl  mt-10 bg-green-800  shadow-2xl shadow-green-800/30 hover:bg-green-700'>
            BROWSE OUR TEAS
          </button>
        </div>
        <div className='hero-image w-full  mt-14  mb-24 '>
          <figure className=''>
            <Image
              src={teaFieldDark}
              alt={'A tea field'}
              className='object-cover h-[80vh]  w-full rounded-[2rem]'
              priority
            />
          </figure>
        </div>
      </Container>
    </>
  )
}
