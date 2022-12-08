import Image, { StaticImageData } from 'next/image'

type CardProps = { img: StaticImageData; price: string; title: string; attributes: Array<string> }

const Card = ({ img, price, title, attributes }: CardProps) => {
  return (
    <>
      <div className='card max-w-[30rem]'>
        <figure className='p-14 bg-green-50 w-full rounded-3xl'>
          <Image src={img} alt='loose tea leaf' className='object-cover h-full w-full' />
        </figure>
        <div className='card-details flex flex-col justify-center items-center mt-4'>
          <p className=' text-2xl font-bold mb-2'>{price}</p>
          <p className='text-xl mb-4'>{title}</p>
          <div className='flex justify-center items-center gap-2'>
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
