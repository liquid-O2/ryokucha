import Image from 'next/image'
import hero from '/public/hero.jpg'
import { Container } from './container'
export const Hero = () => {
  return (
    <>
      <Container>
        <div className='hero-text flex flex-col justify-center items-center leading-tight'>
          <p className='font-serif text-3xl md:text-4xl mt-[9rem]'>緑茶</p>
          <p className='font-serif font-bold tracking-tighter text-5xl md:text-6xl mt-3'>Ryokucha</p>
          <h1 className='text-lg leading-snug font-sans text-center mt-6 px-2 md:px-0'>
            Enjoy the Finest Japanese Green Tea.
            <br className='hidden md:block' /> Taste the extraordinary flavour of pure, organic green{' '}
            <br className='hidden md:block' />
            {`tea from Japan's finest tea growers.`}
          </h1>
          <button className='py-4 px-16 text-background text-lg font-semibold rounded-full transition-colors mt-10 bg-primary shadow-2xl shadow-primary/80 hover:bg-primary/90'>
            BROWSE OUR TEAS
          </button>
        </div>
        <div className='hero-image w-full  mt-14  mb-32 '>
          <figure className=''>
            <Image
              src={hero}
              alt={'teapot, teacups filled with green tea with some loose green tea leaves around them'}
              className='object-cover h-[55vh] md:h-[80vh]  w-full rounded-3xl md:rounded-[3rem]'
              priority
            />
          </figure>
        </div>
      </Container>
    </>
  )
}
