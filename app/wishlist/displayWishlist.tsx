'use client'

import { doc, getDoc } from 'firebase/firestore'
import { cache, useContext, useEffect, useState } from 'react'
import { Coffee } from 'react-feather'
import { Container } from '../../components/container'
import { GlobalContext, Teas } from '../../components/contextProvider'
import Card from '../../components/productCard'
import { db } from '../../firebase/config'

const DisplayWishlist = () => {
  console.log('component mount')
  const { isLoggedIn, userDetails, router } = useContext(GlobalContext)
  const { likedTeas } = userDetails
  const [favouriteTeas, setFavouriteTeas] = useState<Teas[]>([])

  useEffect(() => {
    const fetchTea = cache(async (id: string) => {
      const docRef = doc(db, 'teas', `${id}`)
      const data = await getDoc(docRef)
      const tea = { ...data.data(), id: id }
      return tea as Teas
    })

    const getFavouriteTeas = async () => {
      const teaIds = likedTeas.filter((id) => id !== '')
      const res = teaIds.map((id) => fetchTea(id))
      const data = Promise.all(res)
      const teas = await data
      return teas
    }
    getFavouriteTeas().then((res) => setFavouriteTeas([...res]))
  }, [likedTeas])

  if (!isLoggedIn) router.back()

  return (
    <Container className='flex flex-col justify-center items-center'>
      {favouriteTeas.length === 0 && (
        <div className='flex flex-col justify-center h-[367px] items-center w-full gap-6 text-center p-10 my-10 rounded-3xl md:rounded-[3rem] bg-tertiary-light bg-opacity-[0.02]'>
          <span className=''>
            <Coffee size={24} />
          </span>
          <p className='opacity-90 leading-snug font-normal text-lg px-6'>
            You have no items saved to your Wishlist, add some from the shop to see them here
          </p>
        </div>
      )}
      <div className='grid pb-32 max-[517px]:grid-cols-1  max-[1200px]:grid-cols-3 max-[910px]:grid-cols-2 pt-8 gap-x-4 lg:gap-x-6 gap-y-14  grid-cols-4'>
        {favouriteTeas.map((tea: Teas) => {
          const { name, image, price, attributes, id } = tea
          return (
            <Card
              key={name}
              img={image}
              title={name}
              price={price}
              id={id}
              attributes={attributes}
              className={'rounded-2xl overflow-hidden cursor-pointer'}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default DisplayWishlist
