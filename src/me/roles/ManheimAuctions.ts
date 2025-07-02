import {Role,} from "@/model/Role";

export default (): Role => ({
    id: 9,
    companyName: "Manheim Auctions",
    start: {month: 5, year: 2010,},
    end: {month: 9, year: 2009,},
    introduction: `I was team lead for Manheim's Simulcast auction system. This involved leading a
distributed team based in Atlanta, Shanghai, Rothwell and Toulouse developing a Java
application for Simulcast whilst integrating with the Perl based website for administration
and auction setup.`,
    projects: [],
});