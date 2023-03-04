import TestChild from '@/app/components/TestChild/TestChild';
import Footer from '@/app/components/Footer/Footer';
import Menu from '@/app/components/Menu/Menu';
import styles from '@/app/page.module.css'

export default function Passions() {
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