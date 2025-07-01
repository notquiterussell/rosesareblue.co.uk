import ExperienceItem from "@/components/ExperienceItem";
import {faComment,} from "@fortawesome/free-solid-svg-icons";
import {JSX,} from "react";

export default function Consultancy(): JSX.Element {
    return (
        <ExperienceItem
            title={"Consultancy"}
            icon={faComment}
            startYear={2000}
            roles={[]}
            highlights={[
                "Transport options for local people making use of under-used council resources",
                "Recommendations to improve satisfaction with NHS IT resources in clinical settings",
                "Management and rollout of complex software for a UK optician",
                "Improvements to the NHS' e-RS platform",
            ]}
            technologies={[]}/>
    );
}
