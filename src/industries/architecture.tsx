import ExperienceItem from "@/components/ExperienceItem";
import {faSitemap} from "@fortawesome/free-solid-svg-icons";

export default function Architecture() {
    return (
        <ExperienceItem
            title="Architecture"
            icon={faSitemap}
            startYear={2012}
            endYear={null}
            roles={["FX trading", "Financial exchanges", "Sports news sites", "Software medical devices", "Gambling cessation"]}
            highlights={[
                "Optimisation of low latency gambling cessation tool for the UK market",
                ""
            ]}
            technologies={[
                "Python",
                "Java",
                "Typescript",
                "AWS Aurora",
                "AWS SQS"
            ]}        />
    )
}