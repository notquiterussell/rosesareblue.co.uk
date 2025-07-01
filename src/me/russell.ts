import {Role,} from "@/model/Role";
import Davy from './occupations/Davy';
import ModularAutomation from "@/me/occupations/ModularAutomation";

export default (): Role[] => (
    [Davy(), ModularAutomation(),]
);