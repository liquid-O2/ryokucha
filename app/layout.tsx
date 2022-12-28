import Head from './head'
import localfont from '@next/font/local'
import Header from '../components/header/header'
import '../styles/globals.css'
import ContextProviders from '../components/contextProvider'
import Footer from '../components/footer'
import Modal from '../components/modal'

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
      <body className='bg-background relative font-sans'>
        <ContextProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContextProviders>
        <Modal />
      </body>
    </html>
  )
}
