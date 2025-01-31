import styles from './Carousel.module.css';
import {useRef, useState} from "react";
import {useDrag} from "@use-gesture/react";

export default function Carousel({ slides }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const slidesRef = useRef(null);

    const onSwipe = (e) => {
        let active;
        console.log(e.direction)
        if (e.direction[0] === 1) {
            active = activeSlide - 1;
        } else {
            active = activeSlide + 1;
        }
        setActiveSlide((active) % slides.length);
        slidesRef.current.scroll({
            left: slidesRef.current.clientWidth * active,
            behavior: 'smooth'
        });
    }

    const bind = useDrag((e) => onSwipe(e))

    return <div className={styles.Carousel}>
        <div className={styles.indicator}>
            {slides.map((_, i) =>
                <div
                    key={i}
                    className={styles.dot}
                    data-active={activeSlide === i}
                    onClick={() => onSwipe(i)}
                />)}
        </div>
        <div className={styles.SlidesWrapper} ref={slidesRef} {...bind()}>
            {slides.map(slide => <div className={styles.Slide}>{slide}</div>)}
        </div>
    </div>
}
