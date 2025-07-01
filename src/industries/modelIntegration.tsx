import ExperienceItem from "@/components/ExperienceItem";
import {faRobot,} from "@fortawesome/free-solid-svg-icons";

export default function ModelIntegration() {
    return (
        <ExperienceItem
            title={"AI & Modelling"}
            icon={faRobot}
            startYear={1995}
            roles={[
                "UX Architect",
                "Architect",
                "Student", "Carbon trading", "Java engineer",
            ]}
            highlights={[
                "Mail opening and categorisation for UK Government",
                "Covid susceptibility model for the English population",
                "Price optimisation for supermarkets and hardware stores",
                "Demand modelling of staff in a consultancy",
                "Emissions calculator using directed graphs",
                "Modelling of multivariable pressure and flow control",
            ]}
            technologies={["Azure", "AWS", "WebLogic", "WebSphere", "Typescript","Databricks", "Matlab", "Simulink", "Java", "PHP",]}/>
    );
}