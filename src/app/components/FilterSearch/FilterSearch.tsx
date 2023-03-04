import React from 'react';
import DisplayJobs from '../DisplayJobs/DisplayJobs';

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

interface FilterSearchProps { };

interface FilterSearchState {
    filter: filter,
    jobData: Array<jobsData>
};

class FilterSearch extends React.Component<FilterSearchProps, FilterSearchState> {

    constructor(props: FilterSearchProps) {
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
        let data: Array<jobsData> = [];

        data.forEach((element: any) => {
            this.setState({ jobData: [...this.state.jobData, element] });
        });
        this.findFilters();
    }

    findFilters() {
        let filter: filter = {
            keywords: [],
            country: [],
            jobTitle: []
        };
        this.state.jobData.forEach((element: any) => {
            element.jobKeywords.forEach((keyword: any) => {
                if (!filter.keywords.includes(keyword)) {
                    filter.keywords.push({ name: keyword, active: false });
                }
            });
            if (!filter.country.includes(element.jobCountryLocation)) {
                filter.country.push({ name: element.jobCountryLocation, active: false });
            }
            if (!filter.jobTitle.includes(element.jobTitle)) {
                filter.jobTitle.push({ name: element.jobTitle, active: false });
            }
        });
        this.setState({ filter: filter });
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

    activateFilter(filter: string, name: string) {
        let newFilter: filter = this.state.filter;
        switch (filter) {
            case "keywords":
                newFilter.keywords.forEach((keyword: any) => {
                    if (keyword.name === name) {
                        keyword.active = !keyword.active;
                    }
                });
                break;
            case "country":
                newFilter.country.forEach((country: any) => {
                    if (country.name === name) {
                        country.active = !country.active;
                    }
                });
                break;
            case "jobTitle":
                newFilter.jobTitle.forEach((jobTitle: any) => {
                    if (jobTitle.name === name) {
                        jobTitle.active = !jobTitle.active;
                    }
                });
                break;
            default:
                break;
        }
        this.setState({ filter: newFilter });
    }

    render() {
        //TODO: display Filters, add onClick to filter, display filtered data
        return (
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1 col-end-3">
                    {this.state.filter.keywords.map((keyword: any) => {
                        return (
                            <div onClick={() => this.activateFilter("keywords", keyword.name)}>
                                <p>{keyword.name}</p>
                            </div>
                        );
                    })};
                    {this.state.filter.country.map((country: any) => {
                        return (
                            <div onClick={() => this.activateFilter("country", country.name)}>
                                <p>{country.name}</p>
                            </div>
                        );
                    })};
                    {this.state.filter.jobTitle.map((jobTitle: any) => {
                        return (
                            <div onClick={() => this.activateFilter("jobTitle", jobTitle.name)}>
                                <p>{jobTitle.name}</p>
                            </div>
                        );
                    })};
                </div>
                <div className="col-start-3 col-span-4">
                    <DisplayJobs filteredJobs={this.filterData()} />
                </div>
            </div>

        )
    };

} export default FilterSearch;