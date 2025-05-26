import ExperienceItem from "@/components/ExperienceItem";
import {faRobot} from "@fortawesome/free-solid-svg-icons";

export default function ModelIntegration() {
    return (
        <ExperienceItem
            title={"AI and mathematical model integration"}
            icon={faRobot}
            startYear={2003}
            roles={[
                "UX Architect",
                "Architect",
            ]}
            highlights={[
                "Mail opening and categorisation for UK Government home buying scheme",
                "Covid susceptibility model for the English population",
                "Price optimisation for supermarkets and hardware stores",
            ]}
            technologies={["Azure", "AWS", "WebLogic", "WebSphere", "Typescript"]}/>
    )
}