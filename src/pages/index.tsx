import Image from 'next/image'
import styles from '@/app/page.module.css'
import { Box, Button, Link, Typography } from '@mui/material';
import JobCard from '@/app/components/JobCard/JobCard';
import StyleButton from '@/app/components/StyleButton/StyleButton';
import stylesButton from '@/app/components/StyleButton/StyleButton.module.css';

export default function Home() {
  return (
    <main>
        <section id='hero' className={styles.hero}>
          <Box className={styles.heroBody}>
            <Box className={styles.heroTitle}>
              <Typography variant={'h5'}>
                Hi!
              </Typography>
              <Typography variant={'h4'} fontWeight={'700'}>
                I&apos;m Kevin Picard,
              </Typography>
              <Typography variant={'h4'} fontWeight={'700'}>
                a FullStack Developer
              </Typography>
            </Box>

            <Box className={styles.heroPicture}>
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
          <Box className={styles.heroFooter}>
          </Box>
        </section>

        <section id='introduction'>
          <Box className={styles.introduction}>
            <Box className={styles.introductionTitle}>
              <Typography variant={'h4'} fontWeight={'700'} fontSize="2rem">
                Welcome to my Hub!
              </Typography>
            </Box>
            <Box className={styles.introductionDesc}>
              <Typography variant={'h5'}>
                Through this website, you will be able to know more about me.
              </Typography>
              <Typography variant={'h5'}>
                This is where I experiment, create, learn and share.
              </Typography>
              <br/>
              <Typography variant={'h5'}>
                My journey began in 2016, when I started to become a true developer.
              </Typography>
              <Typography variant={'h5'}>
                Today, I am a Full Stack Engineer, with a strong passion for React.
              </Typography>
            </Box>
          </Box>
        </section>

        <section id="technology" className={styles.technology}>   
          <Box className={styles.technologyContainer}>
              <Box className={styles.technologyContent}>
                <JobCard icon={null} title="Front End" description="I code to breathe life into my ideas, striving to design and craft products that are both simple and impactful." learning={["Spline"]} toolTitle="My Palette of Skills" toolList={["React", "NextJS", "Angular", "Vue", "Bootstrap", "Tailwind", "MaterialUI"]} />
                <JobCard icon={null} title="Back End" description="I simplify the complex, delivering structure and value with clarity and precision." toolTitle="My Toolbox of Languages:" also={["Prisma", "MongoDB", "MySQL", "Vercel"]} toolList={["ExpressJS", "Python", "C#", "Java"]} />
              </Box>
              <Box className={styles.ctaContainer}>
                <Typography variant='h5' fontWeight={600}>
                  Would you like to know more about my experiences?
                </Typography>
                <Typography variant='h6'>
                  I’m passionate about exploring various technologies and constantly broadening my skill set. Curious to see my journey and the diverse projects I’ve been a part of?
                  </Typography>
                <Typography variant='h6'>
                  Dive into my work experience to learn more!
                </Typography>
                <StyleButton href="/work-experience" cta="Learn more" />
              </Box>
          </Box>
        </section>

        <section id="company" className={styles.marginBottom}>
          <Box className={`${styles.companyContainer} ${styles.borderTop}`} >
            <Box className={styles.companyContainer}>
              <Typography variant='h5'>
                These companies trusted me ...
              </Typography>
              <Typography variant='h5'>
                ... and you should too!
              </Typography>
            </Box>
            <Box textAlign={"center"} display="flex" flexDirection="column" gap="0.25rem" width="33%" marginTop="2rem">
              <Link href="https://www.amadeus.com/en" target="_blank">
                <Box className={styles.backgroundHalf1}>
                  <Typography variant='h6' fontWeight={700}>
                    Amadeus
                  </Typography>
                </Box>
              </Link>
              <Link href="https://planpay.com/" target="_blank">
                <Box className={styles.backgroundHalf2}>
                  <Typography variant='h6' fontWeight={700}>
                    PlanPay
                  </Typography>
                </Box>
              </Link>
              <Link href="https://www.groupeonepoint.com/en-au/" target="_blank">
                <Box className={styles.backgroundHalf1}>
                  <Typography variant='h6' fontWeight={700}>
                    OnePoint
                  </Typography>
                </Box>
              </Link>
              <Link href="https://www.alten.com/" target="_blank">
                <Box className={styles.backgroundHalf2}>
                  <Typography variant='h6' fontWeight={700}>
                    Alten
                  </Typography>
                </Box>
              </Link>
              <Box className={styles.backgroundHalf1}>
                <Typography variant='h6' fontWeight={700}>
                  Seplay
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} >
              {/* <Box>
                <StyleButton href="/work-experience" cta="Contact me" />
              </Box> */}
              <Box>
                <Link href="/Files/Kevin_PICARD_-_Full_Stack_Engineer.pdf" download="Kevin_PICARD-Full_Stack_Engineer.pdf">
                  <Button className={`${stylesButton.styleButton} ${stylesButton.styleButtonColorLight}`} variant="outlined">Get my resume</Button>
                </Link>
              </Box>
            </Box>
            
          
          </Box>
        </section>

        <section id="quote" className={styles.quote}>
          <Box className={styles.quoteContainer} width="75%" display={"flex"} justifyContent={"center"} margin="0 auto">
            <Typography variant={'h6'} fontWeight={'700'} textAlign={'center'}>
              "Weaving innovation and functionality, I turn visions into seamless, memorable digital artistry. Embrace the code, change the world."
            </Typography>
          </Box>
        </section>
    </main>
  )
}
