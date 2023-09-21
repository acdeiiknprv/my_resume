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
                {props.toolList.map((tool) => {
                    return (
                        <Box marginTop="0.25em" key={tool}>
                            {tool}
                        </Box>
                    );
                })}
            </Box>
            {props.learning && (
                <Box>
                    <br/>
                    <Box marginTop="0.25em" color="#0727f3">
                            Also learning:
                    </Box>
                    {props.learning.map((tool) => {
                        return (
                            <Box marginTop="0.25em" key={tool}>
                                {tool}
                            </Box>
                        );
                    })}
                </Box>
            )}
            {props.also && (
                <Box>
                    <br/>
                    <Box marginTop="0.25em" color="#0727f3">
                            And also:
                    </Box>
                    {props.also.map((tool) => {
                        return (
                            <Box marginTop="0.25em" key={tool}>
                                {tool}
                            </Box>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
};
export default JobCard;