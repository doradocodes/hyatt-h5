import styles from './MindSelectionSlide.module.css';
import {Link} from "react-router-dom";

export const MindSelectionSlide = ({data}) => {
    return <div className={styles.Slide}>
        {data.isRecommended && <span className={styles.Tag}>Recommended</span>}
        <div className={styles.SlideContentWrapper}>
            <img className={styles.SlideImage} src={data.image} alt={data.title}/>
            <div className={styles.SlideContent}>
                <h3>Brainwave | {data.type}</h3>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
                {data.link && <Link to={data.link}>{data.cta}</Link>}
            </div>
        </div>
    </div>
}
