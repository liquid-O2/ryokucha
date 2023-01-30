import Head from './head'
import localfont from '@next/font/local'
import Header from '../components/header/header'
import '../styles/globals.css'
import ContextProviders from '../components/contextProvider'
import Footer from '../components/footer'

const Mori = localfont({
  src: [
    {
      path: '../fonts/PPMori-Book.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/PPMori-BookItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/PPMori-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-Mori',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} className={Mori.variable}>
      <Head />
      <body className='relative bg-background font-sans font-light '>
        <ContextProviders>
          <Header />
          <main className='relative font-light '>{children}</main>
          <Footer />
        </ContextProviders>
      </body>
    </html>
  )
}
