import {Role,} from "@/model/Role";

export default (): Role => ({
    id: 10,
    start: {month: 6, year: 2010,},
    end: {month: 6, year: 2025,},
    companyName: "BJSS/CGI",
    introduction: `I was a developer and am currently a Technical Architect for BJSS. I worked in diverse industries including healthcare, 
finance, public administration, sports broadcasting, and gambling.`,
    projects: [],
});