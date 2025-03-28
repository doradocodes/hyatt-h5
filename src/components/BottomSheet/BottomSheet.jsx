import React, {useEffect, useRef, useState} from "react";
import styles from './BottomSheet.module.css';
import gsap from "gsap";

export default function BottomSheet({children, isClosed, showHandle = false, onClose}) {
    const [isSheetClosed, setIsSheetClosed] = useState(isClosed);

    useEffect(() => {
        setIsSheetClosed(isClosed);
    }, [isClosed]);

    // TODO: close on swipe down
    const closeSheet = () => {
        setIsSheetClosed(true);
        onClose && onClose();
    }

    return <div className={styles.BottomSheet} data-state={isSheetClosed ? 'closed': ''}>
        { showHandle && <div className={styles.Handle} onClick={closeSheet}></div> }
        {children}
    </div>
}
