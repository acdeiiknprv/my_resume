'use client'
import { getJobsData } from '@/app/services/fetchJobData';
import React from 'react';
import DisplayJobs from '../DisplayJobs/DisplayJobs';
import FilterSearch from '../FilterSearch/FilterSearch';
import logo from '@/app/ressources/logo.svg';

interface FilterField {
    name: string;
    active: boolean;
}

interface filter {
    keywords: Array<FilterField>,
    country: Array<FilterField>,
    jobTitle: Array<FilterField>
};

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

interface WorkExperienceProps {
    toActivate: filter
};

interface WorkExperienceState {
    filter: filter,
    jobData: Array<jobsData>,
    loading: boolean
};

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
        let filteredData: Array<jobsData> = [];
        let userHasSelectedFilter = false;
        this.state.jobData.forEach((element: jobsData) => {
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

    handleFilterValueChange = (filter: filter) => {
        this.setState({ filter: filter });
    }

    render() {
        const loading = true; // define loading variable here
        return (
            <div>
                {loading ? (
                    <img src={logo} className="App-logo" alt="logo" />
                ) : (
                    <div className="flex flex-row">
                        <div className="basis-1/1">
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