"use client";

import Flickity, { FlickityOptions } from "react-flickity-component";

export interface SliderProps {
    children: React.ReactNode;
    className?: string;
    options?: FlickityOptions;
}

const Slider = ({
    className,
    options,
    children,
}: SliderProps): React.ReactElement => {
    return (
        <Flickity className={className} options={options} reloadOnUpdate static>
            {children}
        </Flickity>
    );
};

export default Slider;
