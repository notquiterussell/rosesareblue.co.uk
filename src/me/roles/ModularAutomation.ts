import {Role,} from "@/model/Role";

export default (): Role => ({
    id: 5,
    start: {month: 9, year: 1995,},
    end: {month: 2, year: 1997,},
    companyName: "Modular Automation",
    introduction: "I was a control engineer, designing mechanical, wiring, and programming schemes for automation systems, production cell, robotics, and high speed rotating machinery",
    projects: [
        {
            title: "Hozelock",
            category: "Architecture",
            highlights: ["Development of the control software for the Hozelock production cell",],
            technologies: ["Siemens PLCs", "Simatic", "Ladder logic", "HP Unix", "Apple System 7",],
        },
        {
            title: "Automotive Airbags",
            category: "Architecture",
            highlights: [],
            technologies: ["Ladder logic", "4Mation", "Allen Bradley", "Omron PLCs", "HP Unix", "Apple System 7",],
        },
    ],
});