import {Role,} from "@/model/Role";
import Davy from '@/me/roles/Davy';
import ModularAutomation from "@/me/roles/ModularAutomation";
import Siemens from "@/me/roles/Siemens";
import PremierFarnell from "@/me/roles/PremierFarnell";
import RetailExpress from "@/me/roles/RetailExpress";
import BJSS from "@/me/roles/BJSS";

export default (): Role[] => (
    [Davy(), ModularAutomation(), Siemens(), PremierFarnell(), RetailExpress(), BJSS(),]
);