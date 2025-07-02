import {Role,} from "@/model/Role";

export default (): Role => ({
    id: 6,
    start: {month: 2, year: 1997,},
    end: {month: 6, year: 2005,},
    companyName: "Siemens PG ICIS",
    introduction: `I was a Systems Engineer working on various bespoke and integration projects in
electrical engineering and IT, predominately for the power generation industries.`,
    projects: [
        {
            title: "EU-ETS carbon reporting and trading",
            description: `EU-ETS reporting and trading - I was responsible for designing and developing a web-
based monitoring, reporting and trading application for use within the EU-ETS scheme. The
application was hosted from our data centre and provided facilities to connect directly into
plant for live monitoring of emissions, dealing directly with SCADA systems to collect
calculated data. The tool provided a modelling engine, allowing producers to calculate their
position and provide feedback to the plant operators and chemists to allow them to meet
their obligations.`,
            category: "Architecture",
            highlights: [],
            technologies: [],
        },
        {
            title: "Financial reporting",
            description: `I was responsible for designing and developing the internal
procurement, fulfilment and project financial reporting tools. The system interfaced with
the company’s SunSystems financial products and provided real time updates of order
status, order entry and project inventory. The system also monitored project income and
expenditure and provided management accounts.`,
            category: "Development",
            highlights: ["Distributed web based procurement system",],
            technologies: ["Microsoft SQL Server", "PHP", "Java", "Microsoft DCOM",],
        },
        {
            title: "Hardware rollout to all mainland UK power stations",
            category: "Management",
            highlights: ["Roll out of Panacea for UK electrical trading",],
            technologies: ["Microsoft Access", "Microsoft Excel",],
        },
        {
            title: "Feedwater bypass trip",
            description: `I worked as a systems engineer on the feedwater bypass system at Dungeness B power station. This included
amending the existing electrical drawings, designing the new electrical scheme, creating a physical control room module to manage the 
system, and programming the software. It was the first safety integrity level 1 software trip in the UK.`,
            category: "Architecture",
            highlights: ["Safety integrity category 1 system for Dungeness B Power Station", "Drawing office team lead",],
            technologies: ["Programmable logic controllers", "AutoCAD",],
        },
    ],
});