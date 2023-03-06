'use client'
import { getJobsData } from '@/app/services/fetchJobData';
import React from 'react';
import DisplayJobs from '../DisplayJobs/DisplayJobs';
import FilterSearch from '../FilterSearch/FilterSearch';
import logo from '@/app/ressources/logo.svg';
import Image from 'next/image'
import styles from './WorkExperience.module.css'
import { FilterField, WorkExperienceProps, WorkExperienceState, JobsData, Filter} from '@/app/interfaces/interfaces';


class WorkExperience extends React.Component<WorkExperienceProps, WorkExperienceState> {

    constructor(props: WorkExperienceProps) {
        super(props);
        this.state = {
            filter: {
                keywords: [],
                country: [],
                jobTitle: []
            },
            jobData: [],
            loading: true
        };
    }

    componentDidMount() {
        const data = getJobsData()

        data.then((result: any) => {
            result.forEach((element: any) => {
                element.jobKeywords = element.jobKeywords.trim().split(',');
            });
            this.setState({ jobData: result });
            this.setState({ loading: false });
        });
    }


    filterData() {
        let filteredData: Array<JobsData> = [];
        let userHasSelectedFilter = false;
        this.state.jobData.forEach((element: JobsData) => {
            let shouldInclude = true;

            this.state.filter.keywords.forEach((keyword: FilterField) => {
                if (keyword.active) {
                    userHasSelectedFilter = true;
                }
                if (keyword.active && !element.jobKeywords.includes(keyword.name)) {
                    shouldInclude = false;
                }
            });

            this.state.filter.country.forEach((country: FilterField) => {
                if (country.active) {
                    userHasSelectedFilter = true;
                }
                if (country.active && !element.jobCountryLocation.includes(country.name)) {
                    shouldInclude = false;
                }
            });

            this.state.filter.jobTitle.forEach((jobTitle: FilterField) => {
                if (jobTitle.active) {
                    userHasSelectedFilter = true;
                }
                if (jobTitle.active && !element.jobTitle.includes(jobTitle.name)) {
                    shouldInclude = false;
                }
            });

            if (shouldInclude) {
                filteredData.push(element);
            }
        });

        if (userHasSelectedFilter) {
            return filteredData;
        } else {
            return this.state.jobData;
        }
    }

    handleFilterValueChange = (filter: Filter) => {
        this.setState({ filter: filter });
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <div className={styles.container}>
                        <div className={styles.loader}>
                            <Image
                                src="/logo.svg"
                                alt="React Logo Loader"
                                className={styles.logo}
                                width={100}
                                height={24}
                                priority
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row justify-between">
                        <div className="basis-1/4">
                            <FilterSearch activatedFilters={this.props.toActivate} jobData={this.state.jobData} onFilterValueChange={this.handleFilterValueChange} />
                        </div>
                        <div className="basis-3/4">
                            <DisplayJobs filteredJobs={this.filterData()} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
} export default WorkExperience;