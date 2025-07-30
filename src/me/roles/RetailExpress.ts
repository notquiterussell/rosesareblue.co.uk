import {Role,} from "@/model/Role";

export default (): Role => {
    return ({
        companyName: "Retail Express",
        introduction:
            `I worked at Retail Express as a java developer, later becoming a senior developer. I lead teams 
            across multiple disciplines, from DBAs to developers, and business analysts`,
        end: {month: 9, year: 2009,},
        id: 0,
        start: {month: 9, year: 2006,},
        projects: [
            {
                title: "High volume data transmission",
                category: "Architecture",
                description: `Simulation and forecasting - I  was seconded to the analytics and forecasting team to
    solve a problem they were having with the large data sets used in forecasting demand for
    product for large retailers. The application servers were running out of memory during a
    process that sent the pricing and offer data to the analytics server. After profiling the code
    and studying the heap dumps I determined that the problem was caused by constructing
    the entire XML message in memory then sending it using JMS or http to the analytics
    server, reading the message into memory on another server then constructing Java objects
    using the XML DOM utilities. I designed a replacement for this that used streaming
    technology to send the XML to a servlet on the analytics server.`,
                highlights: [],
                technologies: ["Java", "XML", "IBM AIX",],
            },
            {
                title: "Demand model refining",
                category: "Development",
                description: `I was a senior developer involved in developing and installing the AMP suite of
    products. This included demand model refining - I was responsible for designing and
    developing a web module for AMP which allowed sales data to be verified for inclusion in
    forecast demand models. This application provided configurable business rules allowing
    thresholds to be applied to historical sales data. The module then dealt with importing and
    processing sales figures for major retailers on a nightly schedule with reports sent to
    business managers each morning. The architecture was grid-computer based; allowing
    horizontal scaling in order to provide sufficient processing power to complete the job each
    night.`,
                highlights: [],
                technologies: ["Java", "XML", "WebServices", "WebLogic", "WebSphere", "Map/Reduce", "Statistical regression", "Jenkins",],
            },
            {
                title: "Competitor price checks",
                category: "Architecture",
                description: `Competitor price checks - I was responsible for a multi-vendor team which created
an application to allow retailers to collect competitor prices. The users collected prices on
a Windows CE based computer that connected to a remote web service to download their
assignments, either at home or at the office. The collected prices were then fed into an
auto-pricing engine and then fed-forward into retailers’ till systems and catalog systems
nightly.`,
                highlights: [],
                technologies: ["Windows CE", "Java", "JSP", "Stripes",],
            },
            {
                title: "Adobe PublishNow! integration",
                category: "Development",
                description: `Adobe PublishNow! Integration - I was responsible for an SOA application which
    allowed pricing managers to work with graphic designers in creating flyers, catalogues and
    brochures. This ensured that advertised prices actually matched offers in store.`,
                highlights: [],
                technologies: ["PublishNow!", "Java",],
            },
        ],
    });
};