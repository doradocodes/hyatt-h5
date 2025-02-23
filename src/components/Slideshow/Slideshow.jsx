import styles from './Slideshow.module.css';
import {useSpringCarousel} from "react-spring-carousel";
import {useState} from "react";
import classNames from "classnames";

export default function Slideshow({ items = [], slideComponent, isTopIndicator = false }) {
    const ComponentRender = slideComponent;
    const [activeSlide, setActiveSlide] = useState(0);
    const {
        carouselFragment,
        getCurrentActiveItem,
        useListenToCustomEvent,
        slideToNextItem,
        slideToPrevItem,
    } = useSpringCarousel({
        gutter: 15,
        items: items.map(item => ({
            id: item.id,
            renderItem: <ComponentRender
                data={item}
                slideToNextItem={() => slideToNextItem()}
                slideToPrevItem={() => slideToPrevItem()}
            />
        }))
    });

    useListenToCustomEvent((event) => {
        if (event.eventName === "onSlideStartChange") {
            setActiveSlide(getCurrentActiveItem()?.index);
        }
    });

    return (
        <div className={styles.Slideshow}>
            {carouselFragment}
            <div className={classNames(styles.indicator, { [styles.indicatorTopAligned]: isTopIndicator })}>
                {items.map((_, i) =>
                    <div
                        key={i}
                        className={styles.dot}
                        data-active={activeSlide === i}
                    />)}
            </div>
        </div>
    );
}

