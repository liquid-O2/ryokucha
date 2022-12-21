import Head from './head'
import localfont from '@next/font/local'
import Header from '../components/header'
import '../styles/globals.css'
import ContextProviders, { Teas } from '../components/contextProvider'
import Footer from '../components/footer'

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} className={Mori.variable}>
      <Head />
      <body className='bg-background font-sans'>
        <ContextProviders>
          <Header />
          <main className=''>{children}</main>
          <Footer />
        </ContextProviders>
      </body>
    </html>
  )
}
