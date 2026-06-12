import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className={styles.navbar}>
        <img className={styles.navbar_logo} src="logo.webp" alt="Logo" />
        <div className={styles.navbar_menu}>
          <ul>
            <li>
              <Link href={"/s"}>Home</Link>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
        <button className="documentation-button">
          Documentation
          <img src="arrow-documentation.webp" alt="Documentation" />
        </button>
      </div>
    </div>
  );
}
