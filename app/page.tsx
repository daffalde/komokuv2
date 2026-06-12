import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className={styles.navbar}>
        <img className={styles.navbar_logo} src="./logo.webp" alt="Logo" />
        <div className={styles.navbar_menu}>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href="/">
                Product <img src="./drop-down.webp" alt="dropdown icon" />
              </Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <button className={styles.documentation_button}>
          Documentation
          <img src="arrow-documentation.webp" alt="Documentation" />
        </button>
      </div>
      <div className={styles.footer}>
        <ul>
          <li>
            <Link href={"/terms"}>Terms</Link>
          </li>
          <li>|</li>
          <li>
            <Link href={"/privacy"}>Privacy</Link>
          </li>
          <li>|</li>
          <li>
            <Link href={"/contact"}>Contact Developer ↗</Link>
          </li>
        </ul>
        <p>© 2026 Komoku. Built for advanced phishing detection.</p>
      </div>
    </div>
  );
}
