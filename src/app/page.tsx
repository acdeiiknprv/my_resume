import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import TestChild from "./components/TestChild/TestChild";
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import ClickableCard from './components/ClickableCard/ClickableCard';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu activeLink=''/>

      <div className="grid grid-cols-3 gap-3">
        <ClickableCard
          title="FrontEnd"
          href="/work-experience/front-end"
          description="Find in-depth information about Next.js features and API."
        />

        <ClickableCard
          title="BackEnd"
          href="/work-experience/nack-end"
          description="Explore the Next.js 13 playground."
        />

        <ClickableCard
          title="Mobile"
          href="/work-experience/mobile"
          description="Instantly deploy your Next.js site to a shareable URL with Vercel."
        />
      </div>
      <Footer />
    </main>
  )
}
