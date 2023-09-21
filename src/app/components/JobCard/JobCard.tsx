import React from 'react';
import Image from 'next/image'
import styles from './JobCard.module.css'
import Link from 'next/link'
import { JobCardProps } from '@/app/interfaces/interfaces';
import { Box, Typography } from '@mui/material';

const JobCard: React.FC<JobCardProps> = (props) => {
    return (
        <Box className={styles.jobContent}>
            <Box>
                {props.icon}
            </Box>
            <Box>
                <Typography variant={'h6'} fontWeight={'700'}>
                    {props.title}
                </Typography>
            </Box>
            <Box marginBottom="2em">
                <Typography fontSize="18px" >
                    {props.description}
                </Typography>
            </Box>
            <Box marginTop="50px" marginBottom="8px">
                <Typography fontSize="18px" color="#0727f3">
                    {props.toolTitle}
                </Typography>
            </Box>
            <Box>
            {props.toolList.map((tool, index) => {
                return (
                    <Box marginTop="0.25em" key={index}>
                        {tool}
                    </Box>
                );
            })}
            </Box>
        </Box>
    );
};
export default JobCard;