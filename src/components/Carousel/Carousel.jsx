import styles from './Carousel.module.css';
import {useRef, useState} from "react";
import {useDrag} from "@use-gesture/react";
import classNames from "classnames";
import {Link} from "react-router-dom";

export default function Carousel({ slides = [] }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const slidesRef = useRef(null);

    const onSwipe = (slideIndex) => {
        slidesRef.current.scroll({
            left: (slidesRef.current.clientWidth + 10) * (slideIndex % slides.length),
            behavior: 'smooth'
        });
        setActiveSlide(slideIndex % slides.length);
    }

    const bind = useDrag((e) => {
        // const direction = e.direction[0];
        // console.log('direction', direction);
        // const slideIndex = direction === -1 ? activeSlide + 1 : activeSlide - 1;
        // onSwipe(slideIndex);
    })

    return <div className={styles.Carousel}>
        <div className={styles.indicator}>
            {slides.map((_, i) =>
                <div
                    key={i}
                    className={styles.dot}
                    data-active={activeSlide === i}
                />)}
        </div>
        <div className={styles.SlidesWrapper} ref={slidesRef} {...bind()}>
            {slides.map(slide => <div className={styles.Slide}>
                <div className={styles.SlideContent}>
                    {slide.image && <img className={styles.SlideImage} src={slide.image} alt={slide.title}/>}
                    <h2>{slide.title}</h2>
                    <p>{slide.body}</p>
                    {slide.link ?
                        <Link to={slide.link}>
                            <button
                                onClick={() => onSwipe(activeSlide + 1)}
                                className={classNames({[styles.CTA__active]: activeSlide === slides.length - 1})}
                            >{slide.cta}</button>
                        </Link>
                        :
                        <button
                            onClick={() => onSwipe(activeSlide + 1)}
                            className={classNames({[styles.CTA__active]: activeSlide === slides.length - 1})}
                        >{slide.cta}</button>
                    }
                </div>
            </div>)}
        </div>
    </div>
}
