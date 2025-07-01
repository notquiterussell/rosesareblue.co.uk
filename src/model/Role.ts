import {Project,} from "@/model/Project";

export interface RoughDate {
    month: number;
    year: number;
}


export interface Role {
    id: number;
    start: RoughDate;
    end?: RoughDate;
    companyName: string;
    introduction: string;
    projects: Project[];
}
