import Image from "next/image";
import "./teamMember.component.scss";
import { ITeamStructure } from "@/data/getData";

export interface TeamMember extends ITeamStructure {}

const TeamMember = ({name, img, title}: TeamMember): React.ReactElement => {
    return (
        <div className="member-card">
            <Image
                src={img}
                alt="profile picture"
                width={500}
                height={500}
            />
            <div className="info">
                <h5>{title}</h5>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default TeamMember;
