'use client'
import Image from 'next/image'
import hero from '/public/hero.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'
import { Container } from './container'
export const Hero = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%'])

  return (
    <>
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className='hero-text flex flex-col justify-center items-center leading-tight' id='hero'>
            <div className='overflow-hidden'>
              <motion.p
                initial={{ opacity: 0, y: '35%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                transition={{ duration: 1, delay: 0.0 }}
                viewport={{ once: true }}
                className='font-serif text-3xl md:text-4xl mt-[9rem]'>
                緑茶
              </motion.p>
            </div>
            <div className='overflow-hidden pb-4'>
              <motion.p
                initial={{ opacity: 0, y: '35%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className='font-serif font-bold tracking-tighter text-5xl md:text-6xl mt-3'>
                Ryokucha
              </motion.p>
            </div>
            <div className='overflow-hidden relative mt-[-1rem]'>
              <motion.h1
                initial={{ opacity: 0, y: '35%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className='text-lg leading-snug font-sans text-center mt-6 px-2 md:px-0'>
                Enjoy the Finest Japanese Green Tea.
                <br className='hidden md:block' /> Taste the extraordinary flavour of pure, organic green{' '}
                <br className='hidden md:block' />
                {`tea from Japan's finest tea growers.`}
              </motion.h1>
            </div>
            <motion.button
              initial={{ opacity: 0, y: '35%' }}
              whileInView={{ opacity: 1, y: '0%' }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className='py-4 px-16 text-background text-lg font-semibold rounded-full transition-colors mt-10 bg-primary shadow-2xl shadow-primary/80 hover:bg-primary/90'>
              BROWSE OUR TEAS
            </motion.button>
          </div>
          <div className='hero-image w-full relative  mt-14  mb-24 md:mb-32 overflow-hidden rounded-3xl md:rounded-[3rem]'>
            <motion.div
              initial={{ height: '100%' }}
              whileInView={{ height: '0%' }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className='absolute top-0 w-full h-full z-20 bg-primary'></motion.div>
            <figure className='overflow-hidden '>
              <motion.div
                initial={{ scale: 1.5, y: 0 }}
                style={{ scale: 1.5, y: y }}
                className={'relative w-full h-full overflow-hidden'}>
                <Image
                  src={hero}
                  alt={'teapot, teacups filled with green tea with some loose green tea leaves around them'}
                  className='object-cover h-[55vh] md:h-[80vh]  w-full rounded-3xl md:rounded-[3rem]'
                  priority
                />
              </motion.div>
            </figure>
          </div>
        </motion.div>
      </Container>
    </>
  )
}
