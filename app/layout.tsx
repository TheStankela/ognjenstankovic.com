import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL("https://ognjenstankovic.com"),
  title: {
    default: "Ognjen Stankovic",
    template: "%s | Ognjen Stankovic",
  },
  description: 'Explore Ognjen Stankovic tech blog with a lot of latest topics and articles about the tech industry and tech development. Latest topics about C#, .NET, JavaScript, TypeScript, Angular, React, Next and More!',
  alternates:{
    canonical: ''
  },
  authors:
    {name: 'Ognjen Stankovic', url: 'https://www.linkedin.com/in/ognjenstankovich/'}
  ,
  icons: {
    icon: "favicon.ico"
    },
  publisher: 'Ognjen Stankovic',
  openGraph: {
    type: 'website',
    siteName: 'Ognjen Stankovic | Tech Blog',
    title: 'Ognjen Stankovic | Tech Blog',
    url: 'https://ognjenstankovic.com'
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
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </head>
      <body className='bg_dark_blue'>
        <Navbar />
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
