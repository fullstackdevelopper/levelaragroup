
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@/app/global.css"
import Script from 'next/script'

export const metadata = {
  title: 'LevelARA Group',
  description: '',
  icons: {
    icon: "/img/LevelARA-Group-Favicon-2.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Sidebar />
        <main className='main'>
          {children}
        </main>
        <Footer />
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        ><i className="bi bi-arrow-up-short"></i></a>
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}