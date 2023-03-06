import React from 'react';
import Image from 'next/image'
import styles from './ClickableCard.module.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ClickableCardProps } from '@/app/interfaces/interfaces';

const inter = Inter({ subsets: ['latin'] })

const ClickableCard: React.FC<ClickableCardProps> = (props) => {
    return (
        <div className='flex flex-row justify-between w-9/12 text-center' >
            <Link href={{
                pathname: props.pathname,
                query: {
                    filter: props.query
                }
            }}
            >
                <h2 className={inter.className}>
                    {props.title} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    {props.description}
                </p>
            </Link>
        </div>
    );
};

export default ClickableCard;