import React from "react";
import * as styles from "./PhotoViewer.module.scss";

export const PhotoViewer = ({imageUrl}) => (
    <section className={styles.section}>
        <img className={styles.image} src={imageUrl} alt=""/>
    </section>
);