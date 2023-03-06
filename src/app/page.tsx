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
      <Menu activeLink='' />

      <div className='flex flex-row justify-between'>
        <div className="basis-3/5">
        <span className="text-3xl">Hi !</span>
        <br />
        <span className="text-4xl font-bold">I'm Kevin Picard,</span>
        <br />
        <span className="text-4xl font-bold">a FullStack Developer</span>
        </div>

        <div className="basis-2/5">
          <Image
            src="/main.pmg"
            alt="Developer picture"
            className=""
            width={500}
            height={465}
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <ClickableCard
          title="FullStack"
          query="full-stack"
          pathname="/work-experience"
          description="Find in-depth information about Next.js features and API."
        />

        <ClickableCard
          title="DevOps"
          query="dev-ops"
          pathname="/work-experience"
          description="Explore the Next.js 13 playground."
        />

        <ClickableCard
          title="Mobile"
          query="mobile"
          pathname="/work-experience"
          description="Instantly deploy your Next.js site to a shareable URL with Vercel."
        />
      </div>
      <Footer />
    </main>
  )
}
