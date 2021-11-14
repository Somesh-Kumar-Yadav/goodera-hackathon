import React from "react";
import styles from "./styles.module.css"

export const Card = ({item}) => {
    return <div className={styles.card_container}>
        <div className={styles.card_container_img} >
            <img src={item.image} alt=""/>
        </div>
        <div className={styles.card_container_detail} >
            <div className={styles.card_container_detail_upper}>
                <h3>{item.title}</h3>
                <p>{ item.description}</p>
            </div>
            <div className={styles.card_container_detail_lower}>
                <button>View Details</button>
            </div>
        </div>
    </div>
}