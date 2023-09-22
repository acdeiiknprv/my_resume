import React from 'react';
import Image from 'next/image'
import styles from './ClickableCard.module.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ClickableCardProps } from '@/app/interfaces/interfaces';
import { Box, Typography } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

const ClickableCard: React.FC<ClickableCardProps> = (props) => {
    return (
        <Box>
            <Link href={{
                pathname: props.pathname,
                query: {
                    filter: props.query
                }
            }}
            >
                <Image
                    src={props.picture}
                    alt={props.title.toLowerCase() + " picture"}
                    width={props.width ?? 225}
                    height={props.height ?? 155}
                    priority
                />
                {!props.hideInfo ? (
                    <Box marginTop={'1vh'}>
                        <Typography variant={'h5'} fontWeight={'700'} textAlign={'center'}>
                            {props.title}
                        </Typography>
                        <p className={inter.className}>
                            {props.description ?? ""}
                        </p>
                    </Box>
                )
            :
                null
            }
            </Link>
        </Box>
    );
};

export default ClickableCard;