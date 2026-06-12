"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Machine from "./components/Machine";

export default function Home() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");

  const [ProductHover, setProductHover] = useState<boolean>(false);

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
              <Link
                onMouseEnter={() => {
                  setProductHover(true);
                }}
                onMouseLeave={() => {
                  setProductHover(false);
                }}
                href="/"
              >
                Product{" "}
                <img
                  className={`${styles.navbar_menu_product} ${ProductHover ? styles.navbar_menu_product_true : null}`}
                  src="./drop-down.webp"
                  alt="dropdown icon"
                />
              </Link>
              <div
                onMouseEnter={() => {
                  setProductHover(true);
                }}
                onMouseLeave={() => {
                  setProductHover(false);
                }}
                className={`${styles.desktop_navbar_hover} ${ProductHover ? styles.desktop_navbar_hover_show : styles.desktop_navbar_hover_notshow}`}
              >
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
                        product === "email"
                          ? styles.desktop_navbar_hover_on
                          : ""
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
      <Machine />
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

      {/* responsive */}
      <div className={styles.bottom_nav_bar}>
        <ul>
          <li>
            <Link
              className={product === "url" || !product ? styles.bnb_on : ""}
              href={"/?product=url"}
            >
              <Image
                src={"/product-url.webp"}
                alt="product url icon"
                width={30}
                height={30}
              />
              URL
            </Link>
          </li>
          <li>
            <Link
              className={product === "email" ? styles.bnb_on : ""}
              href={"/?product=email"}
            >
              <Image
                src={"/product-mail.webp"}
                alt="product mail icon"
                width={30}
                height={30}
              />
              Email
            </Link>
          </li>
          <li>
            <Link
              className={product === "sms" ? styles.bnb_on : ""}
              href={"/?product=sms"}
            >
              <Image
                src={"/product-sms.webp"}
                alt="product sms icon"
                width={30}
                height={30}
              />
              SMS
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/daffalde/komokuv2"}>
              <Image
                src={"/product-docs.webp"}
                alt="product sms icon"
                width={30}
                height={30}
              />
              Docs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
