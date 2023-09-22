import React from 'react';
import Image from 'next/image'
import styles from './Menu.module.css'
import Link from 'next/link';
import { Box } from '@mui/system';
import ToggleThemeButton from '../ToggleTheme/ToggleThemeButton';
import { useThemeContext } from '@/app/styles/ThemeContext';

const Menu = () => {

    const { theme } = useThemeContext();
    const logoClass = theme.palette.mode === 'dark' ? styles.darkLogo : styles.lightLogo;

    let links = [
        // { name: "About", link: "#" },
        { name: "Work Experience", link: "/work-experience" },
    ];

    return (
        <div id='container' className={styles.containerMenu}>
            <div id='navBrand' className={styles.navbarBrand}>
                <Link href='/'>
                    {/* Change to SVG */}
                    <Image
                        src="/kp.png"
                        alt="Kevin Picard logo"
                        width={250}
                        height={57}
                        priority
                    />
                </Link>
            </div>
            <div id='navMenu' className={styles.navbarMenu} >
                {links.map((element) => (
                    <div key={element.name} className={styles.navbarLink}>
                        <Link href={element.link}><p>{element.name}</p></Link>
                    </div>
                ))}
                {/* <ToggleThemeButton /> */}
            </div>
        </div>
    );
};
export default Menu