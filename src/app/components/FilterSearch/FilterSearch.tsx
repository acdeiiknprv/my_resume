import React, { useState, useEffect } from "react";
import styles from './FilterSearch.module.css'

interface FilterField {
    name: string;
    active: boolean;
}

interface Filter {
    keywords: FilterField[];
    country: FilterField[];
    jobTitle: FilterField[];
}

interface JobsData {
    jobTitle: string;
    jobDescription: string;
    jobCityLocation: string;
    jobCountryLocation: string;
    jobCompany: string;
    jobStartDate: string;
    jobEndDate: string;
    jobKeywords: Array<string>;
}

interface Props {
    activatedFilters: Filter;
    jobData: JobsData[];
    onFilterValueChange: (filter: Filter) => void;
}

const FilterSearch: React.FC<Props> = ({
    activatedFilters,
    jobData,
    onFilterValueChange,
}) => {
    const [filters, setFilters] = useState<Filter>({
        keywords: [],
        country: [],
        jobTitle: [],
    });

    useEffect(() => {
        findFiltersFromData();
    }, [jobData]);

    const findFiltersFromData = () => {
        const newFilters: Filter = {
            keywords: [],
            country: [],
            jobTitle: [],
        };
        jobData.forEach((element: JobsData) => {
            element.jobKeywords.forEach((keyword: string) => {
                if (!newFilters.keywords.some((existingKeyword) => existingKeyword.name === keyword)) {
                    newFilters.keywords.push({
                        name: keyword,
                        active: false
                    });
                }
            });
            if (!newFilters.country.some((existingCountry) => existingCountry.name === element.jobCountryLocation)) {
                newFilters.country.push({
                    name: element.jobCountryLocation,
                    active: false,
                });
            }
            if (!newFilters.jobTitle.some((existingJobTitle) => existingJobTitle.name === element.jobTitle)) {
                newFilters.jobTitle.push({
                    name: element.jobTitle,
                    active: false
                });
            }
        });
        setFilters(getActivatedFilters(newFilters, activatedFilters));
    };

    const getActivatedFilters = (newFilters: Filter, activatedFilters: Filter) => {
        const updatedFilters: Filter = {
            keywords: newFilters.keywords.map((filter) => ({
                ...filter,
                active: activatedFilters.keywords.some(
                    (activatedFilter) => activatedFilter.name === filter.name
                ),
            })),
            country: newFilters.country.map((filter) => ({
                ...filter,
                active: activatedFilters.country.some(
                    (activatedFilter) => activatedFilter.name === filter.name
                ),
            })),
            jobTitle: newFilters.jobTitle.map((filter) => ({
                ...filter,
                active: activatedFilters.jobTitle.some(
                    (activatedFilter) => activatedFilter.name === filter.name
                ),
            })),
        };

        updatedFilters.keywords.sort((a, b) => a.name.localeCompare(b.name));
        updatedFilters.country.sort((a, b) => a.name.localeCompare(b.name));
        updatedFilters.jobTitle.sort((a, b) => a.name.localeCompare(b.name));

        onFilterValueChange(updatedFilters);
        return updatedFilters;
    };

    const activateFilter = (filter: string, name: string) => {
        if (!filters) {
            return;
        }
        let newFilter = { ...filters };
        switch (filter) {
            case "keywords":
                newFilter.keywords.forEach((keyword: FilterField) => {
                    if (keyword.name === name) {
                        keyword.active = !keyword.active;
                    }
                });
                break;
            case "country":
                newFilter.country.forEach((country: FilterField) => {
                    if (country.name === name) {
                        country.active = !country.active;
                    }
                });
                break;
            case "jobTitle":
                newFilter.jobTitle.forEach((jobTitle: FilterField) => {
                    if (jobTitle.name === name) {
                        jobTitle.active = !jobTitle.active;
                    }
                });
                break;
            default:
                break;
        }
        setFilters(newFilter);
        onFilterValueChange(newFilter);
    }
    return (
        <div>
            <h2>Filter</h2>
            <hr />
            <h3>Technologies</h3>
            {filters?.keywords.map((keyword: FilterField) => {
                return (
                    <div className={keyword.active ? styles.activeBtn : '.filter'} key={keyword.name} onClick={() => activateFilter("keywords", keyword.name)}>
                        <p>{keyword.name}</p>
                    </div>
                );
            })}
            <hr />
            <h3>Country</h3>
            {filters?.country.map((country: FilterField) => {
                return (
                    <div className={country.active ? styles.activeBtn : '.filter'} key={country.name} onClick={() => activateFilter("country", country.name)}>
                        <p>{country.name}</p>
                    </div>
                );
            })}
            <hr />
            <h3>Job Title</h3>
            {filters?.jobTitle.map((jobTitle: FilterField) => {
                return (
                    <div className={jobTitle.active ? styles.activeBtn : '.filter'} key={jobTitle.name} onClick={() => activateFilter("jobTitle", jobTitle.name)}>
                        <p>{jobTitle.name}</p>
                    </div>
                );
            })}
        </div>
    )
};

export default FilterSearch;