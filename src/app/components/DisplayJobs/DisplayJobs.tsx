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
                                {job.jobTitle} @ {job.jobCompany}
                            </h2>
                            <h3 className={inter.className}>
                                {job.jobCityLocation}, {job.jobCountryLocation} - From {job.jobStartDate} to {job.jobEndDate}
                            </h3>
                            {job.jobDescription}
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