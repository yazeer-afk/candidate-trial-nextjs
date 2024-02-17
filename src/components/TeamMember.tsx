import Image from "next/image";
import "./teamMember.component.scss";

export interface TeamMember {}

const TeamMember = (props: TeamMember): React.ReactElement => {
    return (
        <div className="member-card">
            <Image
                src="/images/column-img-small.png"
                alt="profile picture"
                width={500}
                height={500}
            />
            <div className="info">
                <h5>Associate</h5>
                <h4>Kym Williams</h4>
            </div>
        </div>
    );
};

export default TeamMember;
