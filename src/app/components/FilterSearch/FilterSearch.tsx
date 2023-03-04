import React from 'react';

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
    }

    findFilter() {
        //find filter from jobData and set it to state filter with active = false
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

    render() {
        //TODO: display Filters, add onClick to filter, display filtered data
        return this.filterData().map((element: any) => {
            return <div>{element.jobTitle}</div>
        });
    };

} export default FilterSearch;