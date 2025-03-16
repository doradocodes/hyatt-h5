import {Link} from "react-router-dom";
import styles from './OnboardingSlide.module.css';

export const OnboardingSlide = ({ data, slideToNextItem, slideToPrevItem }) => {
    return <div className={styles.Slide}>
        <div className={styles.SlideContent}>
            {data.image && <img className={styles.SlideImage} src={data.image} alt={data.title}/>}
            <div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
            {data.link ?
                <Link to={data.link}>
                    <button
                        onClick={slideToNextItem}
                        className={styles.CTA__active}
                    >{data.cta}</button>
                </Link>
                :
                <button
                    onClick={slideToNextItem}
                    className={styles.CTA__active}
                >{data.cta}</button>
            }
        </div>
    </div>
}
