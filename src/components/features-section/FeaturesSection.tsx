import { useState } from "react";

import classNames from "classnames";

import { features } from "./data";
import CommonStyles from "../CommonStyles.module.scss";
import styles from "./FeatiresSection.module.scss";

const FeaturesSection = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div className={styles.container}>
      <h2 className={`${CommonStyles.title} ${styles.heroTitle}`}>Features</h2>
      <span className={`${CommonStyles.desc} ${styles.heroDesc}`}>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </span>
      <div className={styles.navContainer}>
        <ul className={styles.navItems}>
          {features.map((feature, index) => (
            <li
              key={index}
              className={classNames({
                [styles.item]: true,
                [styles.active]: index === activeItem,
              })}
              onClick={() => setActiveItem(index)}
            >
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <img
            src={features[activeItem].content.img.src}
            alt={features[activeItem].content.img.alt}
          />
        </div>
        <div className={styles.text}>
          <h2 className={`${CommonStyles.title} ${styles.title}`}>
            {features[activeItem].content.title}
          </h2>
          <span className={`${CommonStyles.desc} ${styles.desc}`}>
            {features[activeItem].content.desc}
          </span>
          <button className={styles.btn}>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
