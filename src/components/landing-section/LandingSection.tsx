import styles from "./LandingSection.module.scss";

import { IllustrationHero } from "../../asstes/images";

const LandingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>A Simple Bookmark Manager</h1>
        <span className={styles.desc}>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </span>
        <div className={styles.btnContainer}>
          <button className={`${styles.btn} ${styles.chrome}`}>
            Get it on Chrome
          </button>
          <button className={`${styles.btn} ${styles.firefox}`}>
            Get it on Firefox
          </button>
        </div>
      </div>
      <img src={IllustrationHero} alt="illustration-hero" />
    </div>
  );
};

export default LandingSection;
