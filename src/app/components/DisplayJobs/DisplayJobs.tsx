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
    jobKeywords: Array<string>
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
                            <h2 className="text-xl">
                                {job.jobTitle} @ <span className='underline '>{job.jobCompany}</span>
                            </h2>
                            <h3 className="text-lg">
                                {job.jobEndDate === "now" ? (
                                    job.jobCityLocation + ', ' + job.jobCountryLocation + ' - Since ' + job.jobStartDate
                                ) : (
                                    job.jobCityLocation + ', ' + job.jobCountryLocation + ' - From ' + job.jobStartDate + ' to ' + job.jobEndDate
                                )}
                            </h3>
                            <span className='text-base'>
                                {job.jobDescription}
                            </span>
                            <span className='text-sm'>Keywords: {job.jobKeywords.join('  ')}</span>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
};

export default DisplayJobs;