import React from "react";
import styles from "./Screen.module.css";
import classNames from "classnames";

export function Screen({ children }) {
    return <div className={classNames(styles.Screen)}>
        {children}
    </div>
}
