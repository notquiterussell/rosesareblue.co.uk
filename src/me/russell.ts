import {Role,} from "@/model/Role";
import Davy from '@/me/roles/Davy';
import ModularAutomation from "@/me/roles/ModularAutomation";

export default (): Role[] => (
    [Davy(), ModularAutomation(),]
);