'use client'

import { AnimatePresence, LazyMotion, motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useState } from 'react'
import { Heart, LogOut } from 'react-feather'
import Link from 'next/link'
import Image from 'next/image'

type Profile = {
  photoUrl: string | undefined | null
  emptyProfile: StaticImageData
  email: string | null
  logout: () => void
}

const Profile = ({ photoUrl, emptyProfile, email, logout }: Profile) => {
  const [modalVisible, setModalVisible] = useState(false)
  const loadFeatures = () => import('../utils/framerFeatures').then((res) => res.default)

  return (
    <div className='relative text-primary '>
      <button onClick={() => setModalVisible((prev) => !prev)} className='h-7 w-7 overflow-hidden rounded-full'>
        <Image
          src={photoUrl ? `${photoUrl}` : emptyProfile}
          alt={'your avatar'}
          width={24}
          height={24}
          className='h-full w-full object-cover'
        />
      </button>
      <div className='absolute  top-full -right-24 z-50 mt-2 overflow-hidden  rounded-2xl md:right-0'>
        <LazyMotion features={loadFeatures}>
          <AnimatePresence initial={false}>
            {modalVisible && (
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: '-100%', opacity: 0 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.4 }}
                className=' z-50 m-2  flex w-[296px] flex-col items-start justify-start  gap-1 rounded-3xl border border-primary/10 bg-background px-6 py-4 shadow-md shadow-primary-dark/10'
              >
                <p className='w-full py-3'> {email}</p>
                <Link
                  onClick={() => setModalVisible(false)}
                  className='flex w-full items-center gap-4 py-3 transition-opacity duration-200 ease-in hover:opacity-50'
                  href={'/wishlist'}
                >
                  <Heart size={20} />
                  Wishlist
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setModalVisible(false)
                  }}
                  className='flex w-full items-center gap-4 py-3 transition-opacity  duration-200 ease-in hover:opacity-50'
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  )
}

export default Profile
