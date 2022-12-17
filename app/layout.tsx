import Head from './head'
import localfont from '@next/font/local'
import Header from '../components/header'
import '../styles/globals.css'
import ContextProviders, { Teas } from '../components/contextProvider'
import Footer from '../components/footer'
import { query, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { cache } from 'react'

const Mori = localfont({
  src: [
    {
      path: '../fonts/PPMori-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPMori-SemiBold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-Mori',
})

const fetchTeas = cache(async () => {
  const q = query(collection(db, 'teas'))
  const data = await getDocs(q)
  const teas = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return teas as Teas[]
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const teas = await fetchTeas()

  return (
    <html lang={'en'} className={Mori.variable}>
      <Head />
      <body className='bg-background font-sans'>
        <ContextProviders fetchedTeas={teas}>
          <Header />
          <main className=''>{children}</main>
          <Footer />
        </ContextProviders>
      </body>
    </html>
  )
}
