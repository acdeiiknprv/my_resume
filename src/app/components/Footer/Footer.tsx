import React from 'react';
import Link from 'next/link'
import { Box, Typography } from '@mui/material';

const Footer = () => {

    let links = [
        { name: "About", link: "#" },
        { name: "Work Experience", link: "/work-experience" },
        { name: "Passions", link: "#" }
    ];

    return (
        <Box display={'flex'} width={'66%'} justifyContent={'space-between'} marginTop={'20vh'}>
            <Box>
                <Typography variant="h6" fontWeight={'700'} sx={{ flexGrow: 1 }}>
                    Contact
                </Typography>
                <br />
                <p>Campsie, NSW 2194</p>
                <p>PH: <a href="tel:+61475564651">0475 564 651</a></p>
                <p>Email: <a href="mailto:kevin.picard.au@gmail.com">kevin.picard.au@gmail.com</a></p>
            </Box>

            <Box textAlign={'center'}>
                <Typography variant="h6" fontWeight={'700'} sx={{ flexGrow: 1 }}>
                    Menu
                </Typography>
                <br />
                {
                    links.map((element) => (
                        <div key={element.name} className=''>
                            <Link href={element.link}><p>{element.name}</p></Link>
                        </div>
                    ))
                }
            </Box>

            <Box textAlign={'center'}>
                <Typography variant="h6" fontWeight={'700'} sx={{ flexGrow: 1 }}>
                    Quick Access
                </Typography>
                <br />
                <a href="#">Technology used</a>
                <br />
                <a href="#">Visa status</a>
            </Box>

            <Box textAlign={'right'}>
                <Typography variant="h6" fontWeight={'700'} sx={{ flexGrow: 1 }}>
                    Links
                </Typography>
                <br />
                <a href="https://github.com/acdeiiknprv">Github</a>
                <br />
                <a href="https://www.linkedin.com/in/kevin-picard/">LinkedIn</a>
            </Box>
        </Box>
    );
};

export default Footer;