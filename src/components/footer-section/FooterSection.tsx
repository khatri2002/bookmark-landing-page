import { IconFacebook, IconTwitter, LogoBookMark } from "../../asstes/images";
import styles from "./FooterSection.module.scss";

const FooterSection = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navContainer}>
        <li className={styles.item}>
          <img src={LogoBookMark} alt="logo-bookmark" />
        </li>
        <li className={styles.item}>
          <span>Features</span>
        </li>
        <li className={styles.item}>
          <span>Pricing</span>
        </li>
        <li className={styles.item}>
          <span>Contact</span>
        </li>
      </ul>
      <ul className={styles.socialsContainer}>
        <li className={styles.item}>
          <img src={IconFacebook} alt="icon-facebook" />
        </li>
        <li className={styles.item}>
          <img src={IconTwitter} alt="icon-twitter" />
        </li>
      </ul>
    </div>
  );
};

export default FooterSection;
