import React from 'react';
import Image from 'next/image'
import styles from '../../page.module.css'

const Menu = () => {
    return (
        <div className='flex flex-row justify-between w-9/12'>
            <div id='left' className='basis-1/4'>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
            </div>

            <div id='right' className='basis-1/3'>
                <div id='menu' className='flex flex-row justify-between'>
                    <p>About</p>
                    <p>Passions</p>
                    <p>Portfolio</p>
                    <p>Contact Me</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;