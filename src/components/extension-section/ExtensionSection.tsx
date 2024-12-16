import { LogoChrome, LogoFirefox, LogoOpera } from "../../asstes/images";
import commonStyles from "../CommonStyles.module.scss";
import styles from "./ExtenstionSection.module.scss";

const ExtenstionSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${commonStyles.title} ${styles.heroTitle}`}>
        Download the extension
      </h2>
      <span className={`${commonStyles.desc} ${styles.heroDesc}`}>
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </span>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <img src={LogoChrome} alt="logo-chrome" />
          <span className={styles.title}>Add to Chrome</span>
          <span className={styles.desc}>Minimum version 62</span>
          <div className={styles.border_}></div>
          <button className={styles.btn}>Add & Install Extension</button>
        </div>
        <div className={styles.box}>
          <img src={LogoFirefox} alt="logo-firefox" />
          <span className={styles.title}>Add to Firefox</span>
          <span className={styles.desc}>Minimum version 55</span>
          <div className={styles.border_}></div>
          <button className={styles.btn}>Add & Install Extension</button>
        </div>
        <div className={styles.box}>
          <img src={LogoOpera} alt="logo-opera" />
          <span className={styles.title}>Add to Opera</span>
          <span className={styles.desc}>Minimum version 46</span>
          <div className={styles.border_}></div>
          <button className={styles.btn}>Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default ExtenstionSection;
