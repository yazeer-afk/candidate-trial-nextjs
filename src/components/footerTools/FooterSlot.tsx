import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useFooterStore from "@/store/FooterNavStore";

export interface FooterSlotProps {
    label: string;
}

const FooterSlot = ({ label }: FooterSlotProps): React.ReactElement => {
    const { selectedItem, setSelectedItem } = useFooterStore((state) => state);
    const isSelected = selectedItem === label;

    return (
        <div className="slot-header">
            <h4>{label}</h4>
            <FontAwesomeIcon
                icon={isSelected ? faMinus : faPlus}
                size="xl"
                className="nav-icon"
                onClick={() => setSelectedItem(label)}
            />
        </div>
    );
};

export default FooterSlot;
