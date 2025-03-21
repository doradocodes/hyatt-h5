import ChevronRight from '../../assets/Chevron_Right.svg';
import styles from './BackButton.module.css';
import {Link} from "react-router-dom";

export default function BackButton({ url }) {
    return <Link to={url}>
        <button className={styles.Button}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M18.8485 22.4486C18.3799 22.9172 17.6201 22.9172 17.1515 22.4486L10.5515 15.8486C10.0829 15.3799 10.0829 14.6201 10.5515 14.1515L17.1515 7.55152C17.6201 7.08289 18.3799 7.08289 18.8485 7.55152C19.3172 8.02015 19.3172 8.77995 18.8485 9.24858L13.0971 15L18.8485 20.7515C19.3172 21.2201 19.3172 21.9799 18.8485 22.4486Z"
                      fill="white"/>
            </svg>
        </button>
    </Link>;
}
