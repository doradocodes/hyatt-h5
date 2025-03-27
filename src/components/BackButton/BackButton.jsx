import styles from './BackButton.module.css';
import {Link} from "react-router-dom";

export default function BackButton({ url }) {
    return <Link to={url}>
        <button className={styles.Button}>
            <img src={'/icons/arrow-left.svg'} alt={'Back'}/>
        </button>
    </Link>;
}
