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
            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Tech</span>
                                <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">

                                {filters?.keywords.map((keyword: FilterField) => {
                                    return (
                                        <li>
                                            <a onClick={() => activateFilter("keywords", keyword.name)} href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{keyword.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>

                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Country</span>
                                <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">

                                {filters?.country.map((country: FilterField) => {
                                    return (
                                        <li>
                                            <a onClick={() => activateFilter("country", country.name)} href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{country.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>

                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Job Title</span>
                                <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">

                                {filters?.jobTitle.map((jobTitle: FilterField) => {
                                    return (
                                        <li>
                                            <a onClick={() => activateFilter("jobTitle", jobTitle.name)} href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{jobTitle.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
};

export default FilterSearch;