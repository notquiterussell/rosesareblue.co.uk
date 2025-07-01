import {Role,} from "@/model/Role";

export default (): Role => ({
    companyName: "Davy Research and Development",
    introduction: "Apprentice engineer: practicing wiring, wiring scheme design, plant sizing, piping, commissioning, 4GL mimic design",
    end: {month: 9, year: 1994,},
    id: 4,
    start: {month: 6, year: 1992,},
    projects: [
        {
            category: "ElectricalEngineering",
            highlights: ["Electrical wiring scheme for their pilot hydro-desulphurisation plant",],
            technologies: ["AutoCAD", "Rosemount", "Three-term control",],
            title: "Hydro-desulphurisation of Diesel fuel",
        },
        {
            title: "Network manager",
            category: "Architecture",
            highlights: ["Management of a Novell Netware network",],
            technologies: ["Novell Netware", "AutoCAD", "Lotus123", "Microsoft Word",],
        },
    ],
});