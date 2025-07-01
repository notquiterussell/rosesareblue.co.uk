import {Role,} from "@/model/Role";

export default (): Role => ({
    id: 7,
    start: {month: 9, year: 2005,},
    end: {month: 8, year: 2006,},
    companyName: "Premier Farnell",
    introduction: "I worked as an engineer at Premier Farnell, developing their internal systems, and improving their website.",
    projects: [
        {
            title: "PCI Compliance",
            category: "Architecture",
            description: `I worked as part of the integration hub team to integrate the web servers’ ordering
system with the AS400 mainframe back-end servers. This used JMS and IBM MQ series to
transport the orders with payment details to the mainframe. The integration hub also dealt
with online credit card processing in order to ensure PCI compliance of all card processing
within the Farnell group.`,
            highlights: ["Development of secure ordering system to meet the needs of PCI compliance for card handling",],
            technologies: ["IBM MQ Series", "AS400",],
        },
        {
            title: "ATG Dynamo upgrade",
            category: "Development",
            description: `I was part of the team which upgraded the Farnell group websites from version 5.6
to version 7.1 of ATG Dynamo. I re-designed the shopping basket, integrating with the
existing trade account systems and integration of the US website with their stock
management systems.`,
            highlights: [],
            technologies: [],
        },
    ],
});