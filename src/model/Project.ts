import {Category,} from "@/model/Category";

export type Highlights = string[];


export interface Project {
    title: string;
    description?: string;
    category: Category;
    highlights: Highlights;
    technologies: string[];
}