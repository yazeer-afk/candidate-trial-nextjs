"use client";

// import Flickity, { FlickityOptions } from "react-flickity-component";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "./slider.component.scss";

type screenSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface SliderProps {
    children: React.ReactNode;
    removeArrowOnDeviceType?: screenSize[];
}

const Slider = ({
    removeArrowOnDeviceType = [],
    children,
}: SliderProps): React.ReactElement => {
    const responsive: ResponsiveType = {
        xxl: {
            breakpoint: { max: 1536, min: 1280 },
            items: 1,
        },
        xl: {
            breakpoint: { max: 1280, min: 992 },
            items: 1,
        },
        lg: {
            breakpoint: { max: 992, min: 768 },
            items: 1,
        },
        md: {
            breakpoint: { max: 768, min: 640 },
            items: 1,
        },
        sm: {
            breakpoint: { max: 640, min: 576 },
            items: 1,
        },
        xs: {
            breakpoint: { max: 576, min: 360 },
            items: 1,
        },
        xxs: {
            breakpoint: { max: 360, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel
            autoPlay={false}
            responsive={responsive}
            showDots
            infinite
            removeArrowOnDeviceType={removeArrowOnDeviceType}
            renderDotsOutside
        >
            {children}
        </Carousel>
    );
};

export default Slider;
