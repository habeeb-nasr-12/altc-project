
import 'bootstrap/dist/css/bootstrap.css';

import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ALTC APP',
  description: 'ALTC APP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      <Footer/>
      </body>
    </html>
  )
}
