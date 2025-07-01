import {Role,} from "@/model/Role";

export default (): Role => ({
    companyName: "Davy Research and Development",
    description: "Apprentice engineer: practicing wiring, wiring scheme design, plant sizing, piping, commissioning, 4GL mimic design",
    end: {month: 9, year: 1994,},
    id: 4,
    start: {month: 6, year: 1992,},
    highlights: {
        "ElectricalEngineering": [
            "Electrical wiring scheme for their pilot hydro-desulphurisation plant",
        ],
        "IT Operations": [
            "Management of a Novell Netware network",
        ],
    },
    technologies: ["Novell Netware", "AutoCAD", "Lotus", "Rosemount", "Three-term control",],
});