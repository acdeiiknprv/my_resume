import { ImageProps } from "next/image";

export interface ClickableCardProps {
    pathname: string;
    query: string;
    title: string;
    description?: string;
    picture: string;
    width?: number;
    height?: number;
    hideInfo?: boolean;
};

export interface DisplayJobsProps {
    filteredJobs: Array<JobsData>
}

export interface JobsData {
    jobTitle: string;
    jobDescription: string;
    jobCityLocation: string;
    jobCountryLocation: string;
    jobCompany: string;
    jobStartDate: string;
    jobEndDate: string;
    jobKeywords: Array<string>;
};

export interface FilterField {
    name: string;
    active: boolean;
};

export interface Filter {
    keywords: FilterField[];
    country: FilterField[];
    jobTitle: FilterField[];
};

export interface FilterSearchProps {
    activatedFilters: Filter;
    jobData: JobsData[];
    onFilterValueChange: (filter: Filter) => void;
};

export interface MenuProps {
    activeLink: string;
}

export interface WorkExperienceProps {
    toActivate: Filter
};

export interface WorkExperienceState {
    filter: Filter,
    jobData: Array<JobsData>,
    loading: boolean
};

