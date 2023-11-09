import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar/navbar'
import Breadcrumb from './Navbar/breadcrumb'
import MobileMenu from './Navbar/mobilemenu'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Wishlist',
  description: 'An app to store my wishlist items in my personal bucket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Head>
      <link rel='icon' href={"/favicon.ico"}/>      
    </Head>
    <html lang="en">      
      <body             
      className={inter.className}>                           
    <div
        className='min-h-[1920px] max-w-[1440px] md:mx-[120px] lg:mx-[160px]'>
        <Navbar/>
        <MobileMenu/>
        <Breadcrumb/>
        {children}
        </div>
      </body>
    </html>
    </>
  )
}
