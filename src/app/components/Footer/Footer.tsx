import React from 'react';
import Link from 'next/link'

const Footer = () => {

    let links = [
        { name: "Passions", link: "#" },
        { name: "Work Experience", link: "/work-experience" },
        { name: "About", link: "#" }
    ];

    return (
        <div className='flex flex-row justify-between w-9/12'>
            <div id='left'>
                <h1 className='font-bold text-lg'>Contact</h1>
                <br />
                <p>Unit 14, 23-25 Campsie Street</p>
                <p>Campsie, NSW 2194</p>
                <p>Phone number: <a href="tel:+61475564651">0475 564 651</a></p>
                <p>Email: <a href="mailto:kevin.picard.au@gmail.com">kevin.picard.au@gmail.com</a></p>
            </div>

            <div id='left-middle'>
                <h1 className='font-bold text-lg'>Menu</h1>
                <br />
                {
                    links.map((element) => (
                        <div key={element.name} className=''>
                            <Link href={element.link}><p>{element.name}</p></Link>
                        </div>
                    ))
                }
            </div>

            <div id='right-middle'>
                <h1 className='font-bold text-lg'>Quick Access</h1>
                <br />
            </div>

            <div id='right'>
                <h1 className='font-bold text-lg'>Links</h1>
                <br />
                <a href="https://github.com/acdeiiknprv">Github</a>
                <br />
                <a href="https://www.linkedin.com/in/kevin-picard/">LinkedIn</a>
            </div>
        </div>
    );
};

export default Footer;