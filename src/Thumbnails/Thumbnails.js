import React from "react";
import * as styles from "./Thumbnails.module.scss";
import {ImageUrls} from "./imageGenerator";

export const Thumbnails = () => {
    const images = ImageUrls.map(url => 
        <li className={styles.thumbnail}>
            <img className={styles.thumbnailImage} src={url} alt="Thumbnail"/>
        </li>
    );
    
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Images</h2>
            <ul className={styles.thumbnails}>
                {images}
            </ul>
        </section>
    );
};