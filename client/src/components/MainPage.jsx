import React from "react"
import { InnerContainer } from "./InnerContainer"
import styles from "./styles.module.css"

export const MainPage = () => {
    return <div className={styles.main_container}>
        <InnerContainer/>
    </div>
}