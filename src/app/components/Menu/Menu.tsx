import React from 'react';
import Image from 'next/image'
import styles from '../../page.module.css'
import Link from 'next/link'
import menuStyle from './Menu.module.css'
import { MenuProps } from '@/app/interfaces/interfaces';

const Menu = (props: MenuProps) => {

    let links = [
        { name: "About", link: "#" },
        { name: "Work Experience", link: "/work-experience" },
        { name: "Passions", link: "#" }
    ];

    return (
        <div className='flex flex-row justify-between w-9/12 mb-16'>
            <div id='left' className='basis-1/4'>
                {/*TODO: Make div size of image*/}
                <Link href='/'>
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
            </div>

            <div id='right' className='basis-1/3'>
                <div id='menu' className='flex flex-row justify-between'>
                    {links.map((element) => (
                        <div key={element.name} className={element.link === props.activeLink ? 'activeLink' : ''}>
                            <Link href={element.link}><p>{element.name}</p></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;