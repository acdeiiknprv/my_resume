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
          query="front-end"
          pathname="/work-experience"
          description="Find in-depth information about Next.js features and API."
        />

        <ClickableCard
          title="BackEnd"
          query="back-end"
          pathname="/work-experience?filter=back-end"
          description="Explore the Next.js 13 playground."
        />

        <ClickableCard
          title="Mobile"
          query="mobile"
          pathname="/work-experience?filter=mobile"
          description="Instantly deploy your Next.js site to a shareable URL with Vercel."
        />
      </div>
      <Footer />
    </main>
  )
}
