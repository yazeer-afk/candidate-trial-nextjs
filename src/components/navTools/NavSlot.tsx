import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import variables from "../../variables.module.scss";

import useNavStore from "@/store/MobileNavStore";

export interface NavSlotProps {
    label: string;
    isSubSlot?: boolean; // Indicates whether it's a sub slot or not
}

const NavSlot = ({ label, isSubSlot = false }: NavSlotProps): React.ReactElement => {
    const { primaryBackground, secondaryColor, primaryColor, textColor, whiteColor } = variables;
    const mainItem = useNavStore((state) => state.mainItem);
    const subItem = useNavStore((state) => state.subItem);
    const setMainItem = useNavStore((state) => state.setMainItem);
    const setSubItem = useNavStore((state) => state.setSubItem);

    const isSelected = isSubSlot ? subItem === label : mainItem === label;
    const toggleItem = isSubSlot ? setSubItem : setMainItem;

    const getBackground = () => {
        if (isSubSlot) {
            if (isSelected) {
                return primaryBackground;
            }

            return secondaryColor;
        }
        
        if (isSelected) {
            return secondaryColor;
        }

        return whiteColor;
    }

    const getFontStyle = () => {
        if (isSubSlot) {
            if (isSelected) {
                return {fontWeight: 600};
            }
            
            return {fontWeight: 500};
        }
        
        if (isSelected) {
            return {color: primaryColor};
        }
        return {color: textColor};
    }

    return (
        <div className={`slot${isSubSlot ? ' sub-slot' : ''}`} style={{ background: getBackground() }}>
            <h4 style={getFontStyle()}>{label}</h4>
            <FontAwesomeIcon
                icon={isSelected ? faMinus : faPlus}
                size="xl"
                className="nav-icon"
                onClick={() => toggleItem(label)}
            />
        </div>
    );
};

export default NavSlot;