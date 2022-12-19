'use client'
import { AnimatePresence, m, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Heart, LogOut } from 'react-feather'

type Profile = {
  photoUrl: string | undefined | null
  emptyProfile: StaticImageData
  email: string | null
  logout: () => void
}

const Profile = ({ photoUrl, emptyProfile, email, logout }: Profile) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <div className='relative '>
      <button onClick={() => setModalVisible((prev) => !prev)} className='overflow-hidden rounded-full h-7 w-7'>
        <Image
          src={photoUrl ? `${photoUrl}` : emptyProfile}
          alt={'your avatar'}
          width={24}
          height={24}
          className='w-full h-full object-cover'
        />
      </button>
      <div className='absolute  z-50 top-full mt-4 -right-24 md:right-0  overflow-hidden rounded-2xl'>
        <AnimatePresence initial={false}>
          {modalVisible && (
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: '-100%', opacity: 0 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              className=' gap-1 z-50  rounded-3xl w-[296px] shadow-md m-2 shadow-primary-dark/10  bg-background flex flex-col justify-start items-start px-6 py-4'>
              <p className='py-3 w-full'> {email}</p>
              <Link
                onClick={() => setModalVisible(false)}
                className='hover:opacity-50 transition-opacity duration-200 ease-in flex gap-4 py-3 items-center w-full'
                href={'/wishlist'}>
                <Heart size={20} />
                Wishlist
              </Link>
              <button
                onClick={() => {
                  logout()
                  setModalVisible(false)
                }}
                className='flex gap-4 hover:opacity-50 transition-opacity duration-200 ease-in  w-full py-3 items-center'>
                <LogOut size={20} />
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Profile
