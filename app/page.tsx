"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");

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
        <button
          onClick={() => {
            window.open("https://github.com/daffalde/komokuv2");
          }}
          className={styles.documentation_button}
        >
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

      {/* floating element */}
      <div className={styles.desktop_navbar_hover}>
        <ul>
          <li>
            <Link
              className={
                product === "url" || !product
                  ? styles.desktop_navbar_hover_on
                  : ""
              }
              href={"/?product=url"}
            >
              <Image
                src={"/product-url.webp"}
                alt="product url icon"
                width={20}
                height={20}
              />
              URL Scanner
            </Link>
          </li>
          <li>
            <Link
              className={
                product === "email" ? styles.desktop_navbar_hover_on : ""
              }
              href={"/?product=email"}
            >
              <Image
                src={"/product-mail.webp"}
                alt="product mail icon"
                width={20}
                height={20}
              />
              Email Filter
            </Link>
          </li>
          <li>
            <Link
              className={
                product === "sms" ? styles.desktop_navbar_hover_on : ""
              }
              href={"/?product=sms"}
            >
              <Image
                src={"/product-sms.webp"}
                alt="product sms icon"
                width={20}
                height={20}
              />
              SMS Guard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
