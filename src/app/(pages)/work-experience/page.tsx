'use client'
import Footer from '@/app/components/Footer/Footer';
import Menu from '@/app/components/Menu/Menu';
import styles from '@/app/page.module.css'
import WorkExperience from '@/app/components/WorkExperience/WorkExperience';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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


    const router = useRouter();

    let filtersToActivate: filter = {
        keywords: [],
        country: [],
        jobTitle: []
    };
    
    useEffect(() => {
        const filter = router.query.filter;
        if (filter) {
            switch (filter) {
                case 'front-end':
                    filtersToActivate.jobTitle.push({ name: "FullStack Developer", active: true });
                    filtersToActivate.jobTitle.push({ name: "Web Developer", active: true });
                    break;
                case 'back-end':
                    filtersToActivate.jobTitle.push({ name: "FullStack Developer", active: true });
                    filtersToActivate.jobTitle.push({ name: "DevOps Engineer", active: true });
                    break;
                case 'mobile':
                    filtersToActivate.jobTitle.push({ name: "Android Developer", active: true });
                    break;
                default:
                    break;
            }
        }
    }, []);

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