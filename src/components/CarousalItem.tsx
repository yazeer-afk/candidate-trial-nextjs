import Image from "next/image";
import Button from "./Button";
import "./carousalItem.component.scss";
import { ICarousalStructure } from "@/data/getData";

export interface CarousalItemProps extends ICarousalStructure {}

const CarousalItem = ({
    title,
    img,
    description,
}: CarousalItemProps): React.ReactElement => {
    return (
        <div className="carousal-item">
            <Image src={img} alt="carousal image" width={500} height={400} />
            <div className="carousal-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <Button label="Contact us" />
            </div>
        </div>
    );
};

export default CarousalItem;
