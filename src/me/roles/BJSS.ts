import {Role,} from "@/model/Role";

export default (): Role => ({
    id: 10,
    start: {month: 6, year: 2010,},
    end: {month: 6, year: 2025,},
    companyName: "BJSS/CGI",
    introduction: `I am currently a Technical Architect for BJSS. I worked in diverse industries including healthcare, 
finance, public administration, sports broadcasting, and gambling.`,
    projects: [
        {
            title: "Global sports broadcaster",
            category: "Architecture",
            description: `I lead a team to replace the legacy sports data feed platform. The legacy system had
grown organically over a period of 15 years and its inconsistencies were beginning to
hamper both on-call support and the speed at which new features could be added. The
new platform is a major change to the operation of the website. The system now uses a
CloudFoundry based micro-application architecture in which each component
communicates with its peers by means of RabbitMQ messaging. Further to this updates are
provided to the various front ends - Android and IOS applications, website and integration
with television - via NodeJS applications.

During my time at the sports broadcaster I also provided consultancy on their
Java based Glassfish REST data gateway and mitigation of the impact of changing data
suppliers by having a consistent internal data model onto which external data is mapped.

I was originally brought in to provide technical consultancy for the migration of parts
of the website and content management system from Vignette to a bespoke in-house
platform. The overall project involved disposal of legacy Sparc hardware, migration of the
Oracle database from version 9 to version 12, virtualization of the entire platform including
test environments. Additionally I led the team to build replacement data management
screens which had remained on Vignette. The data administration piece effectively removed
a tier of the new CMS by using JavaScript and JSON Schema based forms to directly
manage the data formats used by their gateway, removing the need to build PHP screens
for each function.`,
            highlights: [],
            technologies: ["Java", "Python", "NodeJS", "Vignette", "Maven", "CloudFoundry",],
        },
        {
            title: "Healthcare appointment booking",
            category: "Consultancy",
            highlights: ["Consultancy on moving to agile programme and project management",],
            technologies: [],
        },
        {
            title: "Online foreign exchange and money markets trading",
            description: `In November 2009 a leading UK high street bank wished to create a new foreign exchange
(FX) trading platform for retail and business customers. They split the project into two
streams, a tactical delivery to test market readiness for an internet delivered system,
followed by a strategic delivery of a fully engineered solution capable of delivering to the
required number of clients.

I worked in the architecture team on-site at the client gathering business and
technical requirements. He then brought development back to BJSS' Leeds office for
construction. This involved a number of three week iterations of software development
delivered back to the client in London every fourth week and demonstrated to the
business at the same time. The BJSS component of the project was to deliver the
integration layer of the application, bringing in feeds from third parties and providing a
unified application programming interface for the customer developed administration
system and the third-party developed user interface (available both as a Silverlight and
HTML5 application).`,
            category: "Architecture",
            highlights: ["Live FX trading for small businesses", "Message handling middleware over multiple transports",],
            technologies: ["Java", "Diffusion", "JMeter", "RedHat Linux", "Reuters Electronic Trading", "Fatwire CMS",],
        },
        {
            title: "Student teacher university application",
            description: `I was brought into a project to deliver a university student admission application. He
designed and built an automated test suite to ensure that the platform could cope with the
load of students all applying for courses on the same day.`,
            category: "Testing",
            highlights: ["Proving that the application could handle a whole years' student teacher application workload in a lunchtime",],
            technologies: ["JMeter",],
        },
    ],
});
