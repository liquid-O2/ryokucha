'use client'
import { LazyMotion, m, useScroll, useTransform } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

type ParallaxImageProps = {
  image: StaticImageData
  alt: string
  className?: string
  priority?: boolean
}

const ParallaxImage = ({ image, alt, className, priority }: ParallaxImageProps) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.6], ['0%', '35%'])
  const loadFeatures = () => import('./framerFeatures').then((res) => res.default)
  return (
    <LazyMotion features={loadFeatures}>
      <figure className={`${className} overflow-hidden`}>
        <m.div
          initial={{ scale: 1.1, y: 0 }}
          style={{ scale: 1.1, y: y }}
          className={'relative w-full h-full overflow-hidden'}>
          <Image
            src={image}
            alt={alt}
            className='object-cover h-full w-full '
            quality={90}
            priority={priority ? true : false}
          />
        </m.div>
      </figure>
    </LazyMotion>
  )
}

export default ParallaxImage
