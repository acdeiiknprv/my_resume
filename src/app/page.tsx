import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import TestChild from "./components/TestChild/TestChild";
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import ClickableCard from './components/ClickableCard/ClickableCard';
import { Box, Typography } from '@mui/material';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu activeLink='' />

      <Box width={'75%'}>
        <Box display={'flex'} justifyContent={'space-around'} alignContent={'center'}>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Typography variant={'h5'}>
              Hi !
            </Typography>
            <Typography variant={'h4'} fontWeight={'700'}>
              I&apos;m Kevin Picard,
            </Typography>
            <Typography variant={'h4'} fontWeight={'700'}>
              a FullStack Developer
            </Typography>
          </Box>

          <Box> {/* Add picture of me */}
            <Image
              src="/main.png"
              alt="Developer picture"
              className=""
              width={250}
              height={250}
              priority
            />
          </Box>
        </Box>

        <Box margin={'10vh 0px'}>
          {/* Include desc here */}
          <Typography variant={'h4'} fontWeight={'700'} textAlign={'center'}>
            Insert Description (2 lines)
          </Typography>
        </Box>

        <Box> {/* To move to about + replace by Technology used */}
          <Box textAlign={'center'} marginBottom={'5vh'}>
            <Typography variant={'h4'} fontWeight={'700'}>
              ~ My Tech Stack ~
            </Typography>
          </Box>
          <Box display={'flex'} justifyContent={'space-around'}>
            
            <ClickableCard
                title="DevOps"
                query="dev-ops"
                pathname="/work-experience"
                picture="/devops.png"
              />
              
              <ClickableCard
                title="FullStack"
                query="full-stack"
                pathname="/work-experience"
                picture="/fullstack.png"
              />

              <ClickableCard
                title="Mobile"
                query="mobile"
                pathname="/work-experience"
                picture="/mobile.png"
              />

          </Box>
        </Box>

        <Box margin={'10vh 0px 0px 0px'}>
          {/* Include quote here */}
          <Typography variant={'h4'} fontWeight={'700'} textAlign={'center'}>
            Insert quote here
          </Typography>
        </Box>
      </Box>

      <Footer />
    </main>
  )
}
