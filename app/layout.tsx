import Head from './head'
import localfont from '@next/font/local'
import Header from '../components/header'
import '../styles/globals.css'

const Eiko = localfont({
  src: [
    {
      path: '../fonts/PPEiko-Medium.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-Eiko',
})

const Mori = localfont({
  src: [
    {
      path: '../fonts/PPMori-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPMori-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-Mori',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} className={`${Eiko.variable} ${Mori.variable}`}>
      <Head />
      <body className='bg-background'>
        <Header />
        <main className='pt-[4rem]'>{children}</main>
      </body>
    </html>
  )
}
