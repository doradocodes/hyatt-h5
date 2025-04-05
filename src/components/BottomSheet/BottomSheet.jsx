import React, { useEffect, useRef, useState } from "react";
import styles from './BottomSheet.module.css';
import gsap from "gsap";

export default function BottomSheet({ children, isClosed, showHandle = false, onClose }) {
    const [isSheetClosed, setIsSheetClosed] = useState(isClosed);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        setIsSheetClosed(isClosed);
    }, [isClosed]);

    const closeSheet = () => {
        setIsSheetClosed(true);
        onClose && onClose();
    }

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientY);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchEnd - touchStart;
        const isDownSwipe = distance > 50;

        if (isDownSwipe) {
            closeSheet();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return <div className={styles.BottomSheet} data-state={isSheetClosed ? 'closed' : ''}>
        {showHandle && (
            <div
                className={styles.Handle}
                // onClick={closeSheet}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            ></div>
        )}
        {children}
    </div>
}
