import React from 'react';
import Image from 'next/image'
import styles from './ClickableCard.module.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

interface ClickableCardProps {
    href: string;
    title: string;
    description: string;
}

const ClickableCard: React.FC<ClickableCardProps> = (props) => {
    return (
        <div className='flex flex-row justify-between w-9/12 text-center' >
            <Link href={props.href}>
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