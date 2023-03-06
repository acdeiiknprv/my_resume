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

      <div className='flex flex-row justify-between mb-16'>
        <div className="basis-3/5">
          <span className="text-3xl">Hi !</span>
          <br />
          <span className="text-4xl font-bold">I&apos;m Kevin Picard,</span>
          <br />
          <span className="text-4xl font-bold">a FullStack Developer</span>
        </div>

        <div className="basis-2/5">
          <Image
            src="/main.png"
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
          description="(JavaScript)"
          picture="/fullstack.png"
        />

        <ClickableCard
          title="DevOps"
          query="dev-ops"
          pathname="/work-experience"
          description="(AWS, Docker, Kubernetes)"
          picture="/devops.png"
        />

        <ClickableCard
          title="Mobile"
          query="mobile"
          pathname="/work-experience"
          description="(Kotlin, React Native)"
          picture="/mobile.png"
        />
      </div>
      <Footer />
    </main>
  )
}
