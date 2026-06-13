import styles from "./about.module.css";
import { motion, Variant, Variants } from "framer-motion";

export default function About() {
  const aboutFeature = [
    {
      title: "+86%",
      desc: "Detection accurate with multi-tier stage.",
    },
    {
      title: "<1s",
      desc: "Avarage analysis response time.",
    },
    {
      title: "40+",
      desc: "URL features extraction per analysis.",
    },
    {
      title: "3x",
      desc: "input vector: URL, email, SMS.",
    },
  ];

  const aboutImage = [
    "about-tech1.webp",
    "about-tech2.webp",
    "about-tech3.webp",
    "about-tech4.webp",
    "about-tech5.webp",
    "about-tech6.webp",
  ];

  const fadeUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <motion.div className={styles.about}>
        <motion.h4
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          ABOUT KOMOKU{" "}
        </motion.h4>
        <motion.h1
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Build to detect{" "}
          <span style={{ textDecoration: "underline" }}>threats</span> before{" "}
          <br />
          they reach you.
        </motion.h1>
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Komoku uses multi-layered machine learning to identify phishing URLs,
          malicious Email, and suspicious SMS in real time keeping your data
          where it belongs.
        </motion.p>
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.about_button}
        >
          <button
            onClick={() => {
              localStorage.setItem("productType", "url");
              window.location.reload();
            }}
            className="main-button"
          >
            Try Komoku
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/daffalde/komokuv2");
            }}
            className="secondary_button"
          >
            Learn More
          </button>
        </motion.div>
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.about_feature}
        >
          {aboutFeature.map((e, i) => (
            <div className={styles.a_f_item} key={i}>
              <h1>{e.title}</h1>
              <p>{e.desc}</p>
            </div>
          ))}
        </motion.div>
        <motion.img
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.about_heroImage}
          src="./about-hero.webp"
          alt="komoku ui image"
        />
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          transition={{ duration: 0.6 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={styles.about_tech}
        >
          <h4>OUR TECH STACK</h4>
          <span>
            {aboutImage.map((e, i) => (
              <img
                key={i}
                src={e}
                alt="tech stack icon"
                style={{ height: "20px" }}
              />
            ))}
          </span>
        </motion.div>
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.about_tech}
        >
          <h4>OUR MISSION</h4>
          <h3 className={styles.about_mission}>
            We believe that digital security should be accessible to everyone,
            not just those who are tech-savvy.
          </h3>
        </motion.div>
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.about_action}
        >
          <div className={styles.a_a_left}>
            <h2>Ready to check something?</h2>
            <p>Paset or even scan QR and get verdict in under a second.</p>
          </div>
          <div className={styles.a_a_right}>
            <button
              onClick={() => {
                window.open("https://github.com/daffalde/komokuv2");
              }}
              className="secondary_button"
            >
              View Docs ↗
            </button>
            <button
              onClick={() => {
                localStorage.setItem("productType", "url");
                window.location.reload();
              }}
              className="secondary_button"
            >
              Try Komoku ↗
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
