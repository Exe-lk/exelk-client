import './globals.css'
import { Inter } from 'next/font/google'
import TopNavigation from "../components/nav/nav";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sri Lankan Best Innovative Software Solutions For Business | Exe.lk',
  description: 'exelk offers top-notch software solutions to streamline your business processes located in Sri Lanka. Contact us today for a free consultation!',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css"/>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-W7Z7Q3W3N7"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-W7Z7Q3W3N7');
              `,
                }}
            />
        </head>
      <body className={`${inter.className} bg-black`}>
      <TopNavigation/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
