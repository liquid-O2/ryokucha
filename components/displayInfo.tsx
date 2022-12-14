'use client'
import { Container } from './container'
import Image from 'next/image'
import col1 from '../public/col1.jpg'
import col2 from '../public/col2.jpg'
import col3 from '../public/col3.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'
const DisplayInfo = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.8, 1], ['0%', '15%'])
  return (
    <Container>
      <div className='grid grid-cols-[1] grid-flow-row  min-[880px]:grid-cols-3 third-section gap-y-4  gap-x-6 min-[880px]:gap-y-10 mb-24 md:mb-32'>
        <div className='overflow-hidden  flex w-[75%] min-[880px]:w-auto md:items-end'>
          <motion.p
            initial={{ opacity: 0, y: '35%' }}
            whileInView={{ opacity: 1, y: '0%' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='font-bold text-3xl '>
            The best green tea from the
            <br className='hidden min-[1328px]:block' />
            {` best farmers in Japan`}
          </motion.p>
        </div>
        <div className='overflow-hidden min-[880px]:col-span-2 flex justify-end items-end'>
          <motion.p
            initial={{ opacity: 0, y: '35%' }}
            whileInView={{ opacity: 1, y: '0%' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className=' text-xl char flex justify-end min-[880px]:pl-[10rem]  mb-6 min-[880px]:mb-0'>
            Ryokucha sources the highest quality green teas from Japan and delivers them directly to you.
            <br className='hidden min-[1664px]:block' /> Our teas are organically farmed and provide a true taste of
            Japan.
          </motion.p>
        </div>
        <div className='relative h-[400px] min-[880px]:h-[500px] overflow-hidden rounded-3xl md:rounded-[3rem]'>
          <motion.div
            initial={{ height: '100%' }}
            whileInView={{ height: '0%' }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='absolute top-0 w-full h-full z-20 bg-primary'></motion.div>
          <motion.div
            initial={{ scale: 1.3, y: 0 }}
            style={{ scale: 1.3, y: y }}
            className={'relative w-full h-full overflow-hidden '}>
            <Image className='w-full h-full object-cover ' src={col1} alt={'a small teacup with green tea'} />
          </motion.div>
        </div>
        <div className='relative h-[400px] min-[880px]:h-[500px] overflow-hidden rounded-3xl md:rounded-[3rem]'>
          <motion.div
            initial={{ height: '100%' }}
            whileInView={{ height: '0%' }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='absolute top-0 w-full h-full z-20 bg-primary'></motion.div>
          <motion.div
            initial={{ scale: 1.3, y: 0 }}
            style={{ scale: 1.3, y: y }}
            className={'relative w-full h-full overflow-hidden '}>
            <Image
              className='w-full h-full object-cover '
              src={col2}
              alt={'a small porcelain dish with loose green tea leaves and some small cups with green tea in it'}
            />
          </motion.div>
        </div>
        <div className='relative h-[400px] min-[880px]:h-[500px] overflow-hidden rounded-3xl md:rounded-[3rem]'>
          <motion.div
            initial={{ height: '100%' }}
            whileInView={{ height: '0%' }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='absolute top-0 w-full h-full z-20 bg-primary'></motion.div>
          <motion.div
            initial={{ scale: 1.3, y: 0 }}
            style={{ scale: 1.3, y: y }}
            className={'relative w-full h-full overflow-hidden '}>
            <Image
              className='w-full h-full object-cover '
              src={col3}
              alt={'a small dish with some water and some green leaves on top'}
            />
          </motion.div>
        </div>
      </div>
    </Container>
  )
}

export default DisplayInfo
