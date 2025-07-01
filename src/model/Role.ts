import {Category,} from "./Category";

export interface RoughDate {
    month: number;
    year: number;
}

export type Highlights = Partial<Record<Category, string[]>>;

export interface Role {
    id: number;
    start: RoughDate;
    endDate?: RoughDate;
    companyName: string;
    description: string;
    highlights: Highlights;
}
