import TestChild from '@/app/components/TestChild/TestChild';
import Footer from '@/app/components/Footer/Footer';
import Menu from '@/app/components/Menu/Menu';
import styles from '@/app/page.module.css'
import FilterSearch from '@/app/components/FilterSearch/FilterSearch';

export default function WorkExperience() {
    return (
        <main className={styles.main}>
            <Menu activeLink="/about" />
            <div className={styles.description}>
                <FilterSearch />
            </div>
            <Footer />
        </main>
    )
};