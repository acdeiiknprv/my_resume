import React from 'react';
import Image from 'next/image'
import styles from '../../page.module.css'
import Link from 'next/link'
import { MenuProps } from '@/app/interfaces/interfaces';
import { Box } from '@mui/system';
import ToggleThemeButton from '../ToggleTheme/ToggleThemeButton';

const Menu = (props: MenuProps) => {

    let links = [
        { name: "About", link: "#" },
        { name: "Work Experience", link: "/work-experience" },
        { name: "Passions", link: "#" }
    ];
    console.log(props);

    return (
        <Box display={'flex'} width={'66%'} justifyContent={'space-between'} marginBottom={'7vh'}>
            <Box>
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
            </Box>
            <Box display={'flex'} gap={'3vw'} >
                {links.map((element) => (
                    <div key={element.name} className={element.link === props.activeLink ? 'activeLink' : ''}>
                        <Link href={element.link}><p>{element.name}</p></Link>
                    </div>
                ))}
            </Box>
            <ToggleThemeButton />
        </Box>
    );
};
export default Menu