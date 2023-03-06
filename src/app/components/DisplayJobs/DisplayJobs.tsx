import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface jobsData {
    jobTitle: string,
    jobDescription: string,
    jobCityLocation: string,
    jobCountryLocation: string,
    jobCompany: string,
    jobStartDate: string,
    jobEndDate: string,
    jobKeywords: Array<string>,
};

interface DisplayJobsProps {
    filteredJobs: Array<jobsData>
}

const DisplayJobs: React.FC<DisplayJobsProps> = (props) => {
    return (
        <div>
            {props.filteredJobs.map((job: jobsData, index: number) => {
                return (
                    <div key={index}>
                        <div className='' >
                            <h2 className={inter.className}>
                                {job.jobTitle}
                            </h2>
                            <p className={inter.className}>
                                {job.jobDescription}
                            </p>
                            <p className={inter.className}>
                                {job.jobCityLocation}
                            </p>
                            <p className={inter.className}>
                                {job.jobCountryLocation}
                            </p>
                            <p className={inter.className}>
                                {job.jobCompany}
                            </p>
                            <p className={inter.className}>
                                {job.jobStartDate}
                            </p>
                            <p className={inter.className}>
                                {job.jobEndDate}
                            </p>
                            <p className={inter.className}>
                                {job.jobKeywords}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default DisplayJobs;