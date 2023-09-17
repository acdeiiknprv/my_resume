import React from 'react';
import { Inter } from 'next/font/google'
import { DisplayJobsProps, JobsData } from '@/app/interfaces/interfaces';
import styles from './DisplayJobs.module.css'
import { Box, Typography } from '@mui/material';
import { useThemeContext } from '@/app/styles/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

const DisplayJobs: React.FC<DisplayJobsProps> = (props) => {

    const { theme } = useThemeContext();

    const findBorderColorByJobTitleAndTheme = (jobTitle: string) => {
        if (theme.palette.mode === 'dark') {
            if (jobTitle.toLocaleLowerCase().includes('fullstack')) {
                return styles.fullstackDark;
            } else if (jobTitle.toLocaleLowerCase().includes('devops')) {
                return styles.devopsDark;
            } else if (jobTitle.toLocaleLowerCase().includes('android')) {
                return styles.mobileDark;
            }
        } else if (theme.palette.mode === 'light') {
            if (jobTitle.toLocaleLowerCase().includes('fullstack')) {
                return styles.fullstackLight;
            } else if (jobTitle.toLocaleLowerCase().includes('devops')) {
                return styles.devopsLight;
            } else if (jobTitle.toLocaleLowerCase().includes('android')) {
                return styles.mobileLight;
            }
        }
    }

    return (
        <div>
            {props.filteredJobs.map((job: JobsData, index: number) => {
                return (
                    <Box key={index} margin={'2vh'}>
                        <Box border={'2px solid'} className={findBorderColorByJobTitleAndTheme(job.jobTitle)} borderRadius={'8px'} padding={'3vh'}>
                            <Typography variant='h5' fontWeight={'700'}>
                                {job.jobTitle} @ <span className='underline'>{job.jobCompany}</span>
                            </Typography>
                            <Typography fontWeight={'700'}>
                                {job.jobEndDate === "now" ? (
                                    job.jobCityLocation + ', ' + job.jobCountryLocation + ' - Since ' + job.jobStartDate
                                ) : (
                                    job.jobCityLocation + ', ' + job.jobCountryLocation + ' - From ' + job.jobStartDate + ' to ' + job.jobEndDate
                                )}
                            </Typography>
                            <br />
                            <Typography dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
                            <br />
                            <span className='text-sm'>Keywords: {job.jobKeywords.join(' ')}</span>
                        </Box>
                    </Box>
                )
            })}
        </div>
    );
};

export default DisplayJobs;