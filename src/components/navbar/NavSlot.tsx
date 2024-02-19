import useNavStore from "@/store/MobileNavStore";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import variables from "../../variables.module.scss";

export interface NavSlotProps {
    label: string;
}

const NavSlot = (props: NavSlotProps): React.ReactElement => {
    const { label } = props;
    const { primaryColor, textColor, secondaryColor, whiteColor } = variables;

    const mainItem = useNavStore((state) => state.mainItem);
    const setMainItem = useNavStore((state) => state.setMainItem);

    const isSelected = mainItem === label;
    const fontColor = isSelected ? primaryColor : textColor;
    const secondaryBg = isSelected ? secondaryColor : whiteColor;

    return (
        <div className="slot" style={{background: secondaryBg}}>
            <h4 style={{color: fontColor}}>{label}</h4>
            <FontAwesomeIcon
                icon={isSelected ? faMinus : faPlus}
                size="xl"
                className="nav-icon"
                onClick={() => setMainItem(label)}
            />
        </div>
    );
};

export default NavSlot;
