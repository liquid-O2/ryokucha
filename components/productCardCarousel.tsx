import Image from 'next/image'
import * as Icon from 'react-feather'

type CardProps = { img: string; price: string; title: string; attributes: Array<string>; id: string }

const Card = ({ img, price, title, attributes, id: string }: CardProps) => {
  return (
    <>
      <div className=' slide-center shrink-0 relative  first:pl-6 first:md:pl-12 min-[1833px]:first:pl-0'>
        <figure className='p-14 bg-green-50 w-full relative rounded-3xl flex justify-center items-center'>
          <Image src={img} alt='loose tea leaf' width={300} height={308} className='object-cover h-full w-full' />
          <button className='absolute top-4 right-4'>
            <Icon.Heart />
          </button>
        </figure>
        <div className='card-details flex flex-col justify-center items-center mt-4'>
          <p className=' text-xl md:text-2xl font-bold mb-2'>{price}</p>
          <p className='text-lg md:text-xl mb-4'>{title}</p>
          <div className='flex justify-between items-center gap-2'>
            {attributes.map((attr, index) => (
              <p key={index} className='px-4 py-1 max-w-fit rounded-full border border-green-900 '>
                {attr}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
