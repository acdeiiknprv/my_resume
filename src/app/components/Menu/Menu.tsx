import React from 'react';
import Image from 'next/image'
import styles from '../../page.module.css'
import Link from 'next/link'

interface MenuProps {
    activeLink: string;
}

const Menu = (props: MenuProps) => {

    let links = [
        { name: "Passions", link: "/passions" },
        { name: "Work Experience", link: "/work-experience" },
        { name: "About", link: "/about" }
    ];

    return (
        <div className='flex flex-row justify-between w-9/12'>
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