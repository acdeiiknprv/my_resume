import TestChild from '@/app/components/TestChild/TestChild';
import Footer from '@/app/components/Footer/Footer';
import Menu from '@/app/components/Menu/Menu';
import styles from '../../page.module.css'

export default function About() {
    return (
        <main className={styles.main}>
            <Menu activeLink="/about" />
            <div className={styles.description}>
                <TestChild />
            </div>
            <Footer />
        </main>
    )
};