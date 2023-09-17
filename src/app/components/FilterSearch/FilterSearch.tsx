import React, { useState, useEffect } from "react";
import styles from './FilterSearch.module.css'
import { FilterField, JobsData, Filter, FilterSearchProps } from '@/app/interfaces/interfaces';
import { Box, Button, Collapse, List, ListItem, Typography } from "@mui/material";
import { MenuType } from "@/app/interfaces/interfaces";

const FilterSearch: React.FC<FilterSearchProps> = ({
    activatedFilters,
    jobData,
    onFilterValueChange,
}) => {
    const [filters, setFilters] = useState<Filter>({
        keywords: [],
        country: [],
        jobTitle: [],
    });

    const [menus, setMenus] = useState({
        tech: true,
        country: false,
        jobTitle: false,
    });

    const toggleMenu = (menuName: MenuType) => {
        setMenus(prevMenus => ({
            ...prevMenus,
            [menuName]: !prevMenus[menuName]
        }));
    };

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
        <Box>
            <span className="text-lg font-bold">Filters</span>
            <br />
            <br />
            <Button onClick={() => toggleMenu('tech')}>
                Tech
                {filters?.keywords.filter(keyword => keyword.active).length > 0 &&
                    <span className={styles.counter}>
                        +{filters?.keywords.filter(keyword => keyword.active).length}
                    </span>
                }
            </Button>
            <Collapse in={menus.tech}>
                <List>
                    {filters?.keywords.map((keyword: FilterField) =>
                        <div className={keyword.active ? styles.activeBtn : styles.notActiveBtn} key={keyword.name} onClick={() => activateFilter("keywords", keyword.name)}>
                            <span className="text-sm font-bold">{keyword.name}</span>
                        </div>
                    )}
                </List>
            </Collapse>
            <Button onClick={() => toggleMenu('country')}>
                Country
                {filters?.country.filter(country => country.active).length > 0 &&
                    <span className={styles.counter}>
                        +{filters?.country.filter(country => country.active).length}
                    </span>
                }
            </Button>
            <Collapse in={menus.country}>
                <List>
                    {filters?.country.map((country: FilterField) =>
                        <div className={country.active ? styles.activeBtn : styles.notActiveBtn} key={country.name} onClick={() => activateFilter("country", country.name)}>
                            <span className="text-sm font-bold">{country.name}</span>
                        </div>
                    )}
                </List>
            </Collapse>
            <Button onClick={() => toggleMenu('jobTitle')}>
                Job Title
                {filters?.jobTitle.filter(jobTitle => jobTitle.active).length > 0 &&
                    <span className={styles.counter}>
                        +{filters?.jobTitle.filter(jobTitle => jobTitle.active).length}
                    </span>
                }
            </Button>
            <Collapse in={menus.jobTitle}>
                <List>
                    {filters?.jobTitle.map((jobTitle: FilterField) =>
                        <div className={jobTitle.active ? styles.activeBtn : styles.notActiveBtn} key={jobTitle.name} onClick={() => activateFilter("jobTitle", jobTitle.name)}>
                            <span className="text-sm font-bold">{jobTitle.name}</span>
                        </div>
                    )}
                </List>
            </Collapse>
        </Box>
    )
};

export default FilterSearch;