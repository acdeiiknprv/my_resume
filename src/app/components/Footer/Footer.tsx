import React from 'react';
import Link from 'next/link'
import { Box, Button, Typography } from '@mui/material';
import styles from './Footer.module.css';

const Footer = () => {

    let links = [
        { name: "About", link: "#" },
        { name: "Work Experience", link: "/work-experience" },
    ];

    return (
        <Box display={'flex'} flexDirection="column" justifyContent="center" alignItems="center">
            {/* <Box>{ Logo }</Box> */}
            <Box padding="0.75rem" textAlign="center">
                <Typography variant="h5" fontWeight={600} margin="2rem 0px 0px 0px">
                    Kevin Picard
                </Typography>
                <Typography variant="h5" fontWeight={600} margin="0px 0px 2rem 0px">
                    2023
                </Typography>
            </Box>
            <Box>
                <Link href="https://www.linkedin.com/in/kevin-picard/">
                    <Button className={`${styles.footerButton} ${styles.styleButtonColorLight}`} variant="outlined">
                        <span className={styles.smallIcon}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                        </span>
                    </Button>
                </Link>
                <Link href="https://github.com/acdeiiknprv">
                    <Button className={`${styles.footerButton} ${styles.styleButtonColorLight}`} variant="outlined">
                        <span className={styles.smallIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            aria-label="GitHub" role="img"
                            viewBox="0 0 512 512"><rect
                            width="512" height="512"
                            rx="15%"
                            fill="#0727f3"/><path fill="#ffffff" d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"/></svg>
                        </span>
                    </Button>
                </Link>
                <Link href="mailto:kevin.picard.au@gmail.com">
                    <Button className={`${styles.footerButton} ${styles.styleButtonColorLight}`} variant="outlined">
                        <span className={styles.smallIcon}>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg>
                        </span>
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;