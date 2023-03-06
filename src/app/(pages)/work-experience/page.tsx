'use client'
import Footer from '@/app/components/Footer/Footer';
import Menu from '@/app/components/Menu/Menu';
import styles from '@/app/page.module.css'
import WorkExperience from '@/app/components/WorkExperience/WorkExperience';
import { useSearchParams } from 'next/navigation'

interface FilterField {
    name: string;
    active: boolean;
}

interface filter {
    keywords: Array<FilterField>,
    country: Array<FilterField>,
    jobTitle: Array<FilterField>
};

export default function WorkExp() {

    const searchParams = useSearchParams()
    const filter = searchParams.get('filter')

    let filtersToActivate: filter = {
        keywords: [],
        country: [],
        jobTitle: []
    };

    if (filter) {
        switch (filter) {
            case 'full-stack':
                filtersToActivate.jobTitle.push({ name: "FullStack Developer", active: true });
                break;
            case 'dev-ops':
                filtersToActivate.jobTitle.push({ name: "DevOps Engineer", active: true });
                break;
            case 'mobile':
                filtersToActivate.jobTitle.push({ name: "Android Developer", active: true });
                break;
            default:
                break;
        }
    }

    return (
        <main className={styles.main}>
            <Menu activeLink="/about" />
            <div className={styles.description}>
                <WorkExperience toActivate={filtersToActivate} />
            </div>
            <Footer />
        </main>
    )
};