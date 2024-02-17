import Image from "next/image";
import Button from "./Button";
import "./carousalItem.component.scss";

export interface CarousalItemProps {}

const CarousalItem = (props: CarousalItemProps): React.ReactElement => {
    return (
        <div className="carousal-item">
            <Image
                src="/images/column-img-small.png"
                alt="carousal image"
                width={500}
                height={400}
            />
            <div className="carousal-info">
                <h3>Slide title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                </p>
                <Button label="Contact us"/>
            </div>
        </div>
    );
};

export default CarousalItem;
