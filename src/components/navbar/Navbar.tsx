import { useEffect, useState } from "react";

import classNames from "classnames";

import styles from "./Navbar.module.scss";
import {
  IconFacebook,
  IconHamburger,
  IconTwitter,
  LogoBookMark,
  IconClose,
} from "../../asstes/images";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    // make navbar appears after certain scroll

    const handleScroll = () => {
      if (window.scrollY > 600 && !appear) setAppear(true);
      if (window.scrollY < 10 && appear) setAppear(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [appear]);

  useEffect(() => {
    // prevent scroll on mobile when navbar is active

    if (showMobileNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileNav]);

  return (
    <>
      <nav
        className={classNames({
          [styles.container]: true,
          [styles.hide]: showMobileNav,
          [styles.appear]: appear,
        })}
      >
        <img src={LogoBookMark} alt="logo-bookmark" />
        <ul className={styles.itemsContainer}>
          <li className={styles.item}>
            <span>Features</span>
          </li>
          <li className={styles.item}>
            <span>Pricing</span>
          </li>
          <li className={styles.item}>
            <span>Contact</span>
          </li>
          <li className={styles.item}>
            <button className={styles.loginBtn}>Login</button>
          </li>
        </ul>
        <button
          className={styles.hamBtn}
          onClick={() => setShowMobileNav(true)}
        >
          <img src={IconHamburger} alt="icon-hamburger" />
        </button>
      </nav>
      <div
        className={classNames({
          [styles.mobileNavContainer]: true,
          [styles.show]: showMobileNav,
        })}
      >
        <div className={styles.upper}>
          <div className={styles.header}>
            <img
              className={styles.logo}
              src={LogoBookMark}
              alt="logo-bookmark"
            />
            <button onClick={() => setShowMobileNav(false)}>
              <img src={IconClose} alt="icon-close" />
            </button>
          </div>
          <ul className={styles.itemsContainer}>
            <li className={styles.item}>
              <span>Features</span>
            </li>
            <li className={styles.item}>
              <span>Pricing</span>
            </li>
            <li className={styles.item}>
              <span>Contact</span>
            </li>
            <li className={styles.item}>
              <button className={styles.btn}>Login</button>
            </li>
          </ul>
        </div>
        <div className={styles.lower}>
          <img src={IconFacebook} alt="icon-facebook" />
          <img src={IconTwitter} alt="icon-twitter" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
