import ExperienceItem from "@/components/ExperienceItem";
import {faSitemap,} from "@fortawesome/free-solid-svg-icons";

export default function Architecture() {
    return (
        <ExperienceItem
            title="Architecture"
            icon={faSitemap}
            startYear={2012}
            endYear={null}
            roles={["FX trading", "Financial exchanges", "Sports news sites", "Software medical devices", "Gambling cessation", "Sports broadcasting", "Sports news",]}
            highlights={[
                "Optimisation of low latency gambling cessation tool",
                "Ground-up design and implementation of an AWS native sports news website, with live data feeds",
                "Microservice architecture of sports data feeds for a major UK sports broadcaster",
                "Loan mobile application to legacy back-office processing",
                "Integration of Tuum (Modularbank) into modern AWS native banking application",
                "Salv fraud detection integration with an AWS native banking application",
                "Amalgamation and replacement of 15 different admin systems for an FX trading estate",
                "Design of a common price collar, credit limit, desk, and organisation tool for 15 different trading platforms",
                "Design of a low-latency web-based foreign exchange and money market trading platform for a major UK bank",

                "Design of National System to provide population level Covid risk scores for the vaccine programme",
                "Re-architecture of a desktop client for a major UK optician",

                "Design of disaster recovery solution, including development, for a UK sports broadcaster",
            ]}
            technologies={[
                "Python",
                "Java",
                "Typescript",
                "AWS Aurora",
                "AWS SQS",
                "Pancredit",
                "Salv",
                "Tuum",
                "Modularbank",
                "RET",
                "Reuters matching host",
                "Glassfish",
                "AWS Lambda",
                "Spring data",
            ]}/>
    );
} 