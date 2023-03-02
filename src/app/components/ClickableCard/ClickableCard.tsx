import React from 'react';
import Image from 'next/image'
import styles from './ClickableCard.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface ClickableCardProps {
    href: string;
    title: string;
    description: string;
}

const ClickableCard: React.FC<ClickableCardProps> = (props) => {
    return (
        <div className='flex flex-row justify-between w-9/12 text-center' >
            <a
                href={props.href}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    {props.title} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    {props.description}
                </p>
            </a>
        </div>
    );
};

export default ClickableCard;