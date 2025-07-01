import {Role,} from "@/model/Role";

export default (): Role => {
    return {
        companyName: "Davy Research and Development",
        description: "",
        endDate: {month: 9, year: 1994,},
        id: 1,
        start: {month: 6, year: 1992,},
        highlights: {
            "ElectricalEngineering": [
                "Electrical wiring scheme for their pilot hydro-desulphurisation plant",
            ],
            "IT Operations": [
                "Management of a Novell Netware network",
            ],
        },
    };
};