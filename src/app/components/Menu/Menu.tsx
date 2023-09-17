import React from 'react';
import Image from 'next/image'
import styles from './Menu.module.css'
import Link from 'next/link'
import { MenuProps } from '@/app/interfaces/interfaces';
import { Box } from '@mui/system';
import ToggleThemeButton from '../ToggleTheme/ToggleThemeButton';
import { useThemeContext } from '@/app/styles/ThemeContext';

const Menu = (props: MenuProps) => {

    const { theme } = useThemeContext();
    const logoClass = theme.palette.mode === 'dark' ? styles.darkLogo : styles.lightLogo;

    let links = [
        { name: "About", link: "#" },
        { name: "Work Experience", link: "/work-experience" },
    ];

    const getActiveLinkClass = (link: string) => {
        if (link === props.activeLink)
            return styles.activeLink;
        else
            return '';
    }

    return (
        <Box display={'flex'} width={'66%'} justifyContent={'space-between'} marginBottom={'7vh'}>
            <Box>
                <Link href='/'>
                    {/* Change to SVG */}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={logoClass}
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
            </Box>
            <Box display={'flex'} gap={'3vw'} >
                {links.map((element) => (
                    <div key={element.name} className={getActiveLinkClass(element.link)}>
                        <Link href={element.link}><p>{element.name}</p></Link>
                    </div>
                ))}
                <ToggleThemeButton />
            </Box>
        </Box>
    );
};
export default Menu