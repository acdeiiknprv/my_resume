'use client'
import { getJobsData } from '@/app/services/fetchJobData';
import React from 'react';
import DisplayJobs from '../DisplayJobs/DisplayJobs';
import FilterSearch from '../FilterSearch/FilterSearch';

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
    jobData: Array<jobsData>
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
            jobData: []
        };
    }

    componentDidMount() {
        //get Data from API
        const data = getJobsData()

        data.then((result: any) => {
            result.forEach((element: any) => {
                this.setState({ jobData: [...this.state.jobData, element] });
            });
        });
    }


    filterData() {
        let filteredData: Array<jobsData> = [];
        this.state.jobData.forEach((element: any) => {
            this.state.filter.keywords.forEach((keyword: any) => {
                if (keyword.active && element.jobKeywords.includes(keyword.name)) {
                    if (!filteredData.includes(element)) {
                        filteredData.push(element);
                    }
                }
            });
            this.state.filter.country.forEach((country: any) => {
                if (country.active && element.jobCountryLocation.includes(country.name)) {
                    if (!filteredData.includes(element)) {
                        filteredData.push(element);
                    }
                }
            });
            this.state.filter.jobTitle.forEach((jobTitle: any) => {
                if (jobTitle.active && element.jobTitle.includes(jobTitle.name)) {
                    if (!filteredData.includes(element)) {
                        filteredData.push(element);
                    }
                }
            });
        });
        return filteredData;
    }

    handleFilterValueChange = (filter: filter) => {
        this.setState({ filter: filter });
    }

    render() {
        //TODO: display Filters, add onClick to filter, display filtered data
        return (
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1 col-end-3">
                    <FilterSearch activatedFilters={this.props.toActivate} jobData={this.state.jobData} onFilterValueChange={this.handleFilterValueChange} />
                </div>
                <div className="col-start-3 col-span-4">
                    <DisplayJobs filteredJobs={this.filterData()} />
                </div>
            </div>

        )
    };

} export default WorkExperience;