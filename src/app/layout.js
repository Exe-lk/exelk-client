import './globals.css'
import { Inter } from 'next/font/google'
import TopNavigation from "../components/nav/nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sri Lankan Best Innovative Software Solutions for Future Business World | Exe.lk',
  description: 'exelk offers top-notch software solutions to streamline your business processes located in Sri Lanka. Contact us today for a free consultation!',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css"/>
        </head>
      <body className={`${inter.className} bg-black`}>
      <TopNavigation/>
      {children}
      </body>
    </html>
  )
}
