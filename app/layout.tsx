import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ognjen Stanković",
  description: '',
  icons: {
    icon: "favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </head>
      <body className='bg_dark_blue'>
        <Navbar />
        <main className='prose-xl prose-slate dark:prose-invert mx-auto transition-all'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
