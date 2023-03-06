import React from 'react';
import { Inter } from 'next/font/google'
import { DisplayJobsProps, JobsData } from '@/app/interfaces/interfaces';

const inter = Inter({ subsets: ['latin'] })

const DisplayJobs: React.FC<DisplayJobsProps> = (props) => {
    return (
        <div>
            {props.filteredJobs.map((job: JobsData, index: number) => {
                return (
                    <div key={index}>
                        <div className=''>
                            <br />
                            <h2 className="text-xl">
                                {job.jobTitle} @ <span className='underline'>{job.jobCompany}</span>
                            </h2>
                            <h3 className="text-lg">
                                {job.jobEndDate === "now" ? (
                                    job.jobCityLocation + ', ' + job.jobCountryLocation + ' - Since ' + job.jobStartDate
                                ) : (
                                    job.jobCityLocation + ', ' + job.jobCountryLocation + ' - From ' + job.jobStartDate + ' to ' + job.jobEndDate
                                )}
                            </h3>
                            <br />
                            <span className='text-base'>
                                {job.jobDescription}
                            </span>
                            <br />
                            <br />
                            <span className='text-sm'>Keywords: {job.jobKeywords.join(' ')}</span>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
};

export default DisplayJobs;