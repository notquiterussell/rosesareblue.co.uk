import {Role,} from "@/model/Role";

export default (): Role => ({
    id: 5,
    start: {month: 9, year: 1995,},
    end: {month: 2, year: 1997,},
    companyName: "Modular Automation",
    description: "I was a control engineer, designing mechanical, wiring, and programming schemes for automation systems, production cell, robotics, and high speed rotating machinery",
    highlights: {
        ElectricalEngineering: ["Development of the control software for the Hozelock production cell", "Software and wiring schemes for automotive airbags",],
    },
    technologies: ["Siemens PLCs", "Simatic", "Ladder logic", "4Mation", "Allen Bradley", "Omron PLCs", "HP Unix", "Apple",],
});