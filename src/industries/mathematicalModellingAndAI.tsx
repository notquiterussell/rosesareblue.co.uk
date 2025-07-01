import ExperienceItem from "@/components/ExperienceItem";
import { faSuperscript, } from "@fortawesome/free-solid-svg-icons";

export default function MathematicalModellingAndAI() {
    return (
        <ExperienceItem
            title="Mathematical modelling"
            icon={faSuperscript}
            startYear={1995}
            endYear={null}
            roles={["Student", "Carbon trading", "Java engineer",]}
            highlights={[
                "Demand modelling of staff in a consultancy",
                "Emissions calculator using directed graphs",
                "Modelling of multivariable pressure and flow control",
            ]}
            technologies={["Databricks", "Matlab", "Simulink", "Java", "PHP",]}
        />
    );
}