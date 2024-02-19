import useNavStore from "@/store/MobileNavStore";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import variables from "../../variables.module.scss";

export interface SubSlotProps {
    title: string;
}

const SubSlot = ({ title }: SubSlotProps): React.ReactElement => {
    const { primaryBackground, secondaryColor } = variables;
    const subItem = useNavStore((state) => state.subItem);
    const setSubItem = useNavStore((state) => state.setSubItem);

    const isSelected = subItem === title;
    const fontWeight = isSelected ? 600 : 500;
    let primaryBg = isSelected ? primaryBackground : secondaryColor;

    return (
        <div className="slot sub-slot" style={{ background: primaryBg }}>
            <h4 style={{ fontWeight }}>{title}</h4>
            <FontAwesomeIcon
                icon={isSelected ? faMinus : faPlus}
                size="xl"
                className="nav-icon"
                onClick={() => setSubItem(title)}
            />
        </div>
    );
};

export default SubSlot;
