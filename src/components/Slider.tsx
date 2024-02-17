import { useEffect, useRef } from 'react';

export interface SliderProps {
    children: React.ReactNode
}

const Slider = (props: SliderProps): React.ReactElement => {
    useEffect(() => {
        initFlickity();
      }, []);
    
      const carousel = useRef(null);
    
      async function initFlickity() {
        if (typeof window !== 'undefined' && carousel.current) {
          const Flickity = (await import('flickity')).default;
          new Flickity(carousel.current, {
            lazyLoad: true,
            wrapAround: true,
            autoPlay: true,
          });
        }
      }
    return <div>{props.children}</div>;
};

export default Slider;
