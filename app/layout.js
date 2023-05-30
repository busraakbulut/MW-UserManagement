import Header from '@/components/HomePage/Header/Header';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "Malwation",
  description: "Sing-up and start using Malwation",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Header />
        <main>{children}</main></body>
    </html>
  )
}
