
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

export default function Home() {
  return (

    <>
      <Header />
      <About />
      <Contact />
    </>

  )
}