import Head from "next/head"
import Image from "next/image"

export default function Home() {
    return (
        <>
            <Head>
                <title>Russell Geraghty - Curriculum Vitae</title>
                <meta name="viewport" content="width=device-width"/>
                <meta name="author" content="Russell Geraghty"/>
                <meta name="description"
                      content="Homepage of Russell Geraghty, a professional software engineer based in Yorkshire, England."/>
                <meta name="keywords"
                      content="technical architect software engineer development Harrogate Yorkshire Russell Geraghty"/>
                <meta charSet="UTF-8"/>
                <link rel="shortcut icon" href="/favicon.png"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                        defer></script>
            </Head>

            <main id="top">
                <div className="container" id="cv">
                    {/* HEADER SECTION */}
                    <div className="container-fluid bg-1 text-center" itemScope itemType={"https://schema.org/Person"}>
                        <h1 className="margin" itemProp="name">Russell Geraghty</h1>
                        <div className="rounded-circle mx-auto margin">
                            <Image
                                src="/assets/images/4BD3CB84-F9AB-4AB2-B5F9-BCB9E9FA89EE_1_105_c.jpeg"
                                alt="Russell Geraghty Tour of Pendle 2014"
                                className="img-responsive profile-pic"
                                width={500}
                                height={500}
                            />
                        </div>
                        <h2 className="margin" itemProp="jobTitle">Technical architect</h2>

                        <div className="row">
                            <div className="col-sm-2 offset-sm-3">
                                <a itemProp="url" target="_blank" rel="noopener noreferrer"
                                   href="https://github.com/notquiterussell" title="GitHub">
                                    <span className="fa-brands fa-3x fa-github"><span className="sr-only">GitHub</span></span>
                                </a>
                            </div>
                            <div className="col-sm-2">
                                <a itemProp="email" title="Email me" href="mailto:russell@rosesareblue.co.uk">
                                    <span className="fa-solid fa-3x fa-envelope"><span className="sr-only">Email</span></span>
                                </a>
                            </div>
                            <div className="col-sm-2">
                                <a itemProp="url" title="Stack Overflow" target="_blank" rel="noopener noreferrer"
                                   href="https://stackoverflow.com/users/12142198/notquiterussell">
                                    <span className="fa-brands fa-3x fa-stack-overflow"><span className="sr-only">Stack Overflow</span></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid bg-2 px-4 text-center">
                        <h2 className="margin">Personal profile</h2>
                        <p>
                            I&apos;m a technical architect with over 25 years&apos; experience in delivering
                            projects.
                        </p>
                        <p>
                            My background includes retail, finance, heavy engineering and
                            manufacturing. Key project roles include leading teams to deliver
                            software and hardware solutions for clients in utility companies,
                            nuclear industry, financial services and broadcast.
                        </p>
                    </div>

                    <div className="container-fluid bg-3 px-4">
                        <h2 className="margin text-center">Primary expertise</h2>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <h3><i className="fa fa-sitemap"></i> Architecture and design</h3>
                                <p>
                                    I have designed a number of systems, from software systems through
                                    to electrical, piping and instrumentation design. Whilst the end
                                    deliverables may be different in each case I have learned that the
                                    principles of clear design communicated well along with a clear
                                    focus on the desired outcome will ensure smooth delivery.
                                </p>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <h3><i className="fa fa-users"></i> Team leading</h3>
                                <p>
                                    I am an experienced team leader, having led teams of developers,
                                    engineers, testers, and business analysts over the past ten years.
                                    I have a hands-on approach, acting as a technical contributor,
                                    tester, prioritising team activities, taking responsibility for
                                    delivery and reporting on progress.
                                </p>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <h3><i className="fa fa-code"></i> Software Engineering</h3>
                                <p>
                                    I have designed and delivered software for nuclear safety systems,
                                    UK Government, retail, finance, heavy engineering and
                                    manufacturing. Key project roles include leading delivery teams,
                                    designing systems, taking systems through complex governance
                                    processes and delivering software for the pandemic response.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid bg-4 px-4">
                        <div className="sectionTitle">
                            <h2 className="margin text-center">Work experience</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div itemScope itemType={"https://schema.org/Organization"}>
                                    <h3>
                                        <span itemProp="jobTitle">Technical Architect</span> -
                                        <span itemProp="name">BJSS</span>
                                    </h3>
                                    <p className="subDetails">May 2010 &ndash; Present</p>
                                    <p itemProp="description">
                                        At present I am a technical architect for BJSS. This involves
                                        project work for clients, either entirely outsourced to our
                                        Leeds offices or providing expertise on site to augment client
                                        teams.
                                    </p>
                                    <p itemProp="description">
                                        Clients have included UK public bodies, retail banks and major
                                        broadcasters.
                                    </p>
                                    <p itemProp="description">
                                        Projects have included low latency
                                        <abbr title="Foreign Exchange">FX</abbr> trading, health service
                                        appointment booking and sport data feed systems
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div itemScope itemType={"https://schema.org/Organization"}>
                                    <h3>
                                        <span itemProp="jobTitle">Java Engineer</span> -
                                        <span itemProp="name">Manheim Auctions</span>
                                    </h3>
                                    <p className="subDetails">August 2009 &ndash; May 2010</p>
                                    <p itemProp="description">
                                        I managed a small team to support and enhance Manheim&apos;s
                                        Simulcast product. This was a low latency auction application
                                        written in Java. Simulcast allowed internet users to bid live on
                                        physical auctions against the audience in the auction hall.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div itemScope itemType={"https://schema.org/Organization"}>
                                    <h3>
                                        <span itemProp="jobTitle">JEE Developer</span> -
                                        <span itemProp="name">Retail Express</span>
                                    </h3>
                                    <p className="subDetails">October 2006 &ndash; August 2009</p>
                                    <p itemProp="description">
                                        At Retail Express I worked on a number of projects to extend
                                        their enterprise suite of applications aimed at the retail
                                        sector.
                                    </p>
                                    <p itemProp="description">
                                        Projects included big-data projects to mine retail purchase
                                        history and predict what special offers should be made,
                                        integration with print media to prevent discrepancies between
                                        point-of-sale systems and leaflets and data collection
                                        applications allowing stores to obtain intelligence about their
                                        competitor&apos;s prices.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div itemScope itemType={"https://schema.org/Organization"}>
                                    <h3>
                                        <span itemProp="jobTitle">JEE Web Developer</span> -
                                        <span itemProp="name">Premier Farnell</span>
                                    </h3>
                                    <p className="subDetails">November 2005 &ndash; September 2006</p>
                                    <p itemProp="description">
                                        I was part of the team which ported their website from version
                                        5.6 to version 7.1 of ATG Dynamo.
                                    </p>
                                    <p itemProp="description">
                                        Projects included the detailed product pages, cross page product
                                        comparison and PCI compliance&mdash;secure messaging of credit
                                        card payments from the website to their AS400 mainframe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div itemScope itemType={"https://schema.org/Organization"}>
                                    <h2>
                                        <span itemProp="jobTitle">Systems Engineer</span> -
                                        <span itemProp="name">Siemens Power Generation</span>
                                    </h2>
                                    <p className="subDetails">April 1996 &ndash; November 2005</p>
                                    <p itemProp="description">
                                        At Siemens I worked on a number of projects in the power
                                        industry.
                                    </p>
                                    <p itemProp="description">
                                        These included designing the first
                                        <abbr title="Safety Integrity Level">SIL</abbr>1 software safety
                                        system in the UK, emissions modelling and calculation to allow
                                        emitters to meet their obligations under the Kyoto agreement and
                                        development of an online purchasing system allowing engineers on
                                        site to request and authorise kit online.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid bg-1">
                        <h2 className="margin text-center" itemProp="name">
                            Key skills and education
                        </h2>
                        <div className="row" itemScope itemType={"https://schema.org/ItemList"}>
                            <div className="col-lg-3 col-sm-6">
                                <ul className="keySkills">
                                    <li itemProp="itemListElement">Typescript</li>
                                    <li itemProp="itemListElement">JavaScript</li>
                                    <li itemProp="itemListElement">NodeJS</li>
                                    <li itemProp="itemListElement">Python</li>
                                    <li itemProp="itemListElement">Java</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <ul>
                                    <li itemProp="itemListElement">
                                        <abbr title="Structured Query Language">SQL</abbr>
                                    </li>
                                    <li itemProp="itemListElement">
                                        <abbr title="Cascading Style Sheets">CSS</abbr>/<abbr
                                        title="Syntactically Awesome Style Sheets"
                                    >SASS</abbr
                                    >
                                    </li>
                                    <li itemProp="itemListElement">
                                        Rabbit <abbr title="Message Queue">MQ</abbr>
                                    </li>
                                    <li itemProp="itemListElement">
                                        <abbr title="Amazon Web Services">AWS</abbr>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div
                                    itemScope
                                    itemType={"https://schema.org/EducationalOrganization"}
                                >
                                    <h3 itemProp="name">University of Teesside</h3>
                                    <p itemProp="name">
                                        Instrumentation and Control Engineering (1st Class)
                                    </p>
                                </div>
                                <div
                                    itemScope
                                    itemType={"https://schema.org/EducationalOrganization"}
                                >
                                    <h3 itemProp="name">National Vocational Qualification</h3>
                                    <p itemProp="name">
                                        Purchasing and Supply Chain Management (Level 4)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="container-fluid bg-4 text-center">
                        <p>&copy; 2023 Russell Geraghty</p>
                    </footer>
                </div>
            </main>
        </>
    )
}