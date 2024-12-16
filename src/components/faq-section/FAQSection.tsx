import { useState } from "react";

import classNames from "classnames";

import { faqs } from "./data";
import commonStyles from "../CommonStyles.module.scss";
import styles from "./FAQSecion.module.scss";
import { IconArrow } from "../../asstes/images";

const FAQSecion = () => {
  const [activeIndexes, setActiveIndexes] = useState<Array<number>>([]);

  return (
    <div className={styles.container}>
      <h2 className={commonStyles.title}>Frequently Asked Questions</h2>
      <span className={`${commonStyles.desc} ${styles.desc}`}>
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </span>
      <div className={styles.questionsContainer}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={classNames({
              [styles.item]: true,
              [styles.active]: activeIndexes.includes(index),
            })}
            onClick={() => {
              if (activeIndexes.includes(index)) {
                setActiveIndexes(activeIndexes.filter((i) => i !== index));
                return;
              }
              setActiveIndexes([...activeIndexes, index]);
            }}
          >
            <div className={styles.queContainer}>
              <span className={styles.que}>{faq.que}</span>
              <img src={IconArrow} alt="icon-arrow" />
            </div>
            <span className={styles.ans}>{faq.ans}</span>
          </div>
        ))}
      </div>
      <button className={styles.btn}>More Info</button>
    </div>
  );
};

export default FAQSecion;
