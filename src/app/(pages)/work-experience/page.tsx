import TestChild from '@/app/components/TestChild/TestChild';
import Footer from '@/app/components/Footer/Footer';
import Menu from '@/app/components/Menu/Menu';
import styles from '@/app/page.module.css'
import FilterSearch from '@/app/components/FilterSearch/FilterSearch';
import WorkExperience from '@/app/components/WorkExperience/WorkExperience';

export default function WorkExp() {
    return (
        <main className={styles.main}>
            <Menu activeLink="/about" />
            <div className={styles.description}>
                <WorkExperience toActivate={{ keywords: [], country: [], jobTitle: []}} />
            </div>
            <Footer />
        </main>
    )
};