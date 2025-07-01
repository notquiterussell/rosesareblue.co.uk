import {FC,} from "react";
import {IconDefinition,} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon,} from "@fortawesome/react-fontawesome";

interface ExperienceItemProps {
    title: string;
    icon: IconDefinition;
    startYear: number;
    endYear?: number | null;
    roles: string[];
    highlights: string[];
    technologies: string[];
}

const ExperienceItem: FC<ExperienceItemProps> = ({
                                                     title,
                                                     icon,
                                                     startYear,
                                                     endYear,
                                                     roles,
                                                     highlights,
                                                     technologies,
                                                 },) => {
    return (
        <>
            <h3>
                <FontAwesomeIcon icon={icon} style={{opacity: 0.6,}}/> {title}
            </h3>
            <p><strong>Roles:</strong> {roles.sort().join(", ",)}</p>
            <p><strong>Years active:</strong> {startYear} &ndash; {endYear || "present"}</p>
            <div>
                <strong>Highlights:</strong>
                <ul className="list-disc list-inside mt-1">
                    {highlights.map((item, idx,) => (
                        <li key={idx}>{item}</li>
                    ),)}
                </ul>
            </div>
            <p>
                <strong>Technologies: </strong>
                {technologies.sort().join(", ",)}
            </p>
        </>
    );
};

export default ExperienceItem;