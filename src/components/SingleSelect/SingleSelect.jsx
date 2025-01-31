import React, {useState} from "react";
import styles from "./SingleSelect.module.css";

export default function SingleSelect({ options, onChange }) {
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const onClick = (e) => {
        setSelectedOption(e.target.value);
        onChange(e.target.value);
    }

    return <form className={styles.selectChoice} onChange={onClick}>
        {options.map(option => (
            <div key={option.value} className={styles.option} data-selected={selectedOption === option.value}>
                <input type="radio" id={option.value} name="choice" value={option.value} checked={selectedOption === option.value}/>
                <label htmlFor={option.value}>{option.label}</label>
            </div>
        ))}
    </form>
}
