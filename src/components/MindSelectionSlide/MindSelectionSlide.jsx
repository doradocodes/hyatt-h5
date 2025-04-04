import styles from './MindSelectionSlide.module.css';
import {Link} from "react-router-dom";
import classNames from "classnames";

export const MindSelectionSlide = ({data, isRecommended = false}) => {
    return <div className={styles.Slide}>
        {isRecommended && <span className={styles.Tag}>Recommended</span>}

        <div className={styles.SlideContentWrapper}>
            <Link to={`/meditation-session/${data.id}`}>
                <div className={styles.SlideImageContainer}>
                    <div className={classNames(styles.SlideImage)} data-type={data.id}></div>
                </div>
                <div className={styles.SlideContent}>
                    <h3>Brainwave | {data.type}</h3>
                    <h2>{data.title}</h2>
                    {/*<p>{data.body}</p>*/}
                    {data.link && <Link className={styles.SlideCTA} to={`/meditation-session/${data.id}`}>
                        <img src="/icons/chevron-right.svg" alt="Next"/>
                    </Link>}
                </div>
            </Link>
        </div>
    </div>
}
