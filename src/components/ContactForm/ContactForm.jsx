import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "İsim zorunludur";
      } else if (values.name.length < 3) {
        errors.name = "En az 3 karakter olmalı";
      }

      if (!values.number) {
        errors.number = "Numara zorunludur";
      } else if (values.number.length < 3) {
        errors.number = "Geçerli bir numara girin";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>Name</label>
        <input
          id="name"
          name="name"
          type="text"
          {...formik.getFieldProps("name")}
          className={styles.formInput}
          placeholder="İsim girin"
        />
        {formik.touched.name && formik.errors.name && (
          <div className={styles.formError}>{formik.errors.name}</div>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="number" className={styles.formLabel}>Number</label>
        <input
          id="number"
          name="number"
          type="tel"
          {...formik.getFieldProps("number")}
          className={styles.formInput}
          placeholder="Telefon numarası girin"
        />
        {formik.touched.number && formik.errors.number && (
          <div className={styles.formError}>{formik.errors.number}</div>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
        Add contact
      </button>
    </form>
  );
}
