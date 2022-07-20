import React, {useContext} from 'react';
import classnames from "classnames";

import styles from './styles.module.css';


 const Tab = ({ label, onTabSelect, isSelected, className }) => {
    return (
        <button
            className={classnames(styles.buttom, className, {
                [styles.selected]: isSelected,})}
            onClick={onTabSelect}
        >
            {label}
        </button>
    )
};

export default React.memo(Tab);
