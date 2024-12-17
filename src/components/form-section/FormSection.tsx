import { useForm, SubmitHandler } from "react-hook-form";

import classNames from "classnames";
import * as EmailValidator from "email-validator";

import { Input } from "./type";
import { IconError } from "../../asstes/images";
import styles from "./FormSection.module.scss";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => reset();

  return (
    <div className={styles.container}>
      <span className={styles.desc}>35,000+ already joined</span>
      <h2 className={styles.title}>Stay up-to-date with what we're doing</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={classNames({
            [styles.inputWrapper]: true,
            [styles.error]: errors.email,
          })}
        >
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Enter your email address"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                validate: (value) =>
                  EmailValidator.validate(value) ||
                  "Whoops! make sure it's an email",
              })}
            />
            <img src={IconError} alt="icon-error" />
          </div>
          <span className={styles.errorText}>{errors.email?.message}</span>
        </div>
        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
};

export default FormSection;
