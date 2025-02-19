import styles from './Slideshow.module.css';
import {Link} from "react-router-dom";
import {useSpringCarousel} from "react-spring-carousel";
import {useState} from "react";

export default function Slideshow({ items = [] }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const {
        carouselFragment,
        getCurrentActiveItem,
        useListenToCustomEvent,
    } = useSpringCarousel({
        gutter: 15,
        items: items.map(item => ({
            id: item.id,
            renderItem: <Slide data={item} />
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
            <div className={styles.indicator}>
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

const Slide = ({data}) => {
    return <div className={styles.SlideContentWrapper}>
        <img className={styles.SlideImage} src={data.image} alt={data.title}/>
        <div className={styles.SlideContent}>
            <h3>Brainwave | {data.type}</h3>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            {data.link && <Link to={data.link}>{data.cta}</Link>}
        </div>
    </div>
}
