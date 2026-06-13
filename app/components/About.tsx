import Image from "next/image";
import styles from "./about.module.css";

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
  return (
    <>
      <div className={styles.about}>
        <h4>ABOUT KOMOKU </h4>
        <h1>
          Build to detect{" "}
          <span style={{ textDecoration: "underline" }}>threats</span> before{" "}
          <br />
          they reach you.
        </h1>
        <p>
          Komoku uses multi-layered machine learning to identify phishing URLs,
          malicious Email, and suspicious SMS in real time keeping your data
          where it belongs.
        </p>
        <div className={styles.about_button}>
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
        </div>
        <div className={styles.about_feature}>
          {aboutFeature.map((e, i) => (
            <div className={styles.a_f_item} key={i}>
              <h1>{e.title}</h1>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
        <img
          className={styles.about_heroImage}
          src="./about-hero.webp"
          alt="komoku ui image"
        />
        <div className={styles.about_tech}>
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
        </div>
        <div className={styles.about_tech}>
          <h4>OUR MISSION</h4>
          <h3 className={styles.about_mission}>
            We believe that digital security should be accessible to everyone,
            not just those who are tech-savvy.
          </h3>
        </div>
        <div className={styles.about_action}>
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
        </div>
      </div>
    </>
  );
}
