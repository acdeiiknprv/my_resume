import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../app/page.module.css'
import Footer from '../app/components/Footer/Footer';
import Menu from '../app/components/Menu/Menu';
import ClickableCard from '../app/components/ClickableCard/ClickableCard';
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

        <Box>
          <Box textAlign={'center'} marginBottom={'5vh'}>
            <Typography variant={'h4'} fontWeight={'700'}>
              My Tech Stack
            </Typography>
          </Box>
          <Box display='flex' flexDirection='column' gap='7vh'>
            <Box display={'flex'} justifyContent={'space-around'}>
              <ClickableCard
                  title="DevOps"
                  query="dev-ops"
                  pathname="/work-experience"
                  picture="/tech/react.svg"
                  width={100}
                  height={100}
                  hideInfo
                />
                
                <ClickableCard
                  title="FullStack"
                  query="full-stack"
                  pathname="/work-experience"
                  picture="/tech/nodejs2.svg"
                  width={100}
                  height={100}
                  hideInfo
                />

                <ClickableCard
                  title="Mobile"
                  query="mobile"
                  pathname="/work-experience"
                  picture="/tech/python.svg"
                  width={100}
                  height={100}
                  hideInfo
                />

                <ClickableCard
                  title="DevOps"
                  query="dev-ops"
                  pathname="/work-experience"
                  picture="/tech/typescript.svg"
                  width={100}
                  height={100}
                  hideInfo
                />
                
                <ClickableCard
                  title="FullStack"
                  query="full-stack"
                  pathname="/work-experience"
                  picture="/tech/angular.svg"
                  width={100}
                  height={100}
                  hideInfo
                />

                <ClickableCard
                  title="Mobile"
                  query="mobile"
                  pathname="/work-experience"
                  picture="/tech/kotlin.svg"
                  width={100}
                  height={100}
                  hideInfo
                />

            </Box>
            <Box display={'flex'} justifyContent={'space-around'}>
              <ClickableCard
                  title="DevOps"
                  query="dev-ops"
                  pathname="/work-experience"
                  picture="/tech/git.svg"
                  width={100}
                  height={100}
                  hideInfo
                />
                
                <ClickableCard
                  title="FullStack"
                  query="full-stack"
                  pathname="/work-experience"
                  picture="/tech/tailwind.svg"
                  width={100}
                  height={100}
                  hideInfo
                />

                <ClickableCard
                  title="Mobile"
                  query="mobile"
                  pathname="/work-experience"
                  picture="/tech/linux.svg"
                  width={100}
                  height={100}
                  hideInfo
                />

                <ClickableCard
                  title="DevOps"
                  query="dev-ops"
                  pathname="/work-experience"
                  picture="/tech/amazon.svg"
                  width={100}
                  height={100}
                  hideInfo
                />
                
                <ClickableCard
                  title="FullStack"
                  query="full-stack"
                  pathname="/work-experience"
                  picture="/tech/materialui.svg"
                  width={100}
                  height={100}
                  hideInfo
                />

                <ClickableCard
                  title="Mobile"
                  query="mobile"
                  pathname="/work-experience"
                  picture="/tech/github.svg"
                  width={100}
                  height={100}
                  hideInfo
                />

            </Box>
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
