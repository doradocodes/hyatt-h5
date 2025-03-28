import styles from './BackButton.module.css';
import {Link} from "react-router-dom";

export default function BackButton({ url, isWhite = false }) {
    return <Link to={url}>
        <button className={styles.Button}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L5 12M5 12L12 19M5 12L12 5" stroke={isWhite? 'white':"#161F6E"} stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        </button>
    </Link>;
}
