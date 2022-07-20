import React from "react";
import  Tab  from "../Tab/Tab";

import styles from "./styles.module.css";

 const Tabs = ({ tabs, selectedId, onTabSelect }) => {
    return(<div className={styles.root}>
        {tabs.map(({ label, id }) => (
            <Tab
                key={id}
                label={label}
                onTabSelect={() => onTabSelect(label)}
                isSelected={label === selectedId}
            />
        ))}
    </div>)
};

export default React.memo(Tabs);