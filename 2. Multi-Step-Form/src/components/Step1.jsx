import React, { useState } from "react";
import styles from "./step1.module.css";

const Step1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "This field is required";
    if (!formData.email.includes("@") && !formData.email.includes("."))
      newErrors.email = "Please enter a valid email address";
    if (!formData.phone) newErrors.phone = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted ✅", formData);
      // go to next step
    }
  };

  return (
    <div className={styles.containerParent}>
      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.step}>
            <span className={styles.activeCircle}>1</span>
            <p>
              STEP 1 <br /> <strong>YOUR INFO</strong>
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.circle}>2</span>
            <p>
              STEP 2 <br /> <strong>SELECT PLAN</strong>
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.circle}>3</span>
            <p>
              STEP 3 <br /> <strong>ADD-ONS</strong>
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.circle}>4</span>
            <p>
              STEP 4 <br /> <strong>SUMMARY</strong>
            </p>
          </div>
        </aside>

        {/* Form Section */}
        <main className={styles.formSection}>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>

          <form onSubmit={handleNext}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Stephen King"
                className={errors.name ? styles.errorInput : ""}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. stephenking@lorem.com"
                className={errors.email ? styles.errorInput : ""}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
                className={errors.phone ? styles.errorInput : ""}
              />
              {errors.phone && (
                <span className={styles.error}>{errors.phone}</span>
              )}
            </label>

            <button type="submit" className={styles.nextBtn}>
              Next Step
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Step1;
