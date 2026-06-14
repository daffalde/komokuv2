"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Machine from "./components/Machine";
import About from "./components/About";

export default function Home() {
  const [ProductHover, setProductHover] = useState<boolean>(false);

  const [getProductType, setGetProductType] = useState<String | null>();

  const [closeAnimate, setCloseAnimate] = useState<boolean>(false);

  function handleProduct(e: string) {
    if (getProductType === "about") {
      setCloseAnimate(true);
    }
    setTimeout(
      () => {
        localStorage.setItem("productType", e);
        setGetProductType(e);
        setProductHover(false);
        setCloseAnimate(false);
      },
      getProductType === "about" ? 500 : 0,
    );
  }

  useEffect(() => {
    setGetProductType(localStorage.getItem("productType"));
  });

  return (
    <div className="container">
      <div className={styles.navbar}>
        <img className={styles.navbar_logo} src="./logo.webp" alt="Logo" />
        <div className={styles.navbar_menu}>
          <ul>
            <li>
              <Link onClick={() => handleProduct("url")} href={"/"}>
                Home
              </Link>
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
                Product
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
                      onClick={() => handleProduct("url")}
                      className={
                        getProductType === "url" || !getProductType
                          ? styles.desktop_navbar_hover_on
                          : ""
                      }
                      href={"/"}
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
                      onClick={() => handleProduct("email")}
                      className={`${
                        getProductType === "email"
                          ? styles.desktop_navbar_hover_on
                          : ""
                      } ${styles.coming_soon}`}
                      href={"/"}
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
                      onClick={() => handleProduct("sms")}
                      className={`${
                        getProductType === "sms"
                          ? styles.desktop_navbar_hover_on
                          : ""
                      } ${styles.coming_soon}`}
                      href={"/"}
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
              <Link onClick={() => handleProduct("about")} href="/">
                About Us
              </Link>
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
      <div className={closeAnimate ? "closeAnimate" : ""}>
        {getProductType === "about" ? <About /> : <Machine />}
      </div>
      <div className={styles.footer}>
        <ul>
          <li>
            <Link
              onClick={() =>
                window.open("https://www.linkedin.com/in/daffa-alde/")
              }
              href={"/"}
            >
              Contact Developer ↗
            </Link>
          </li>
        </ul>
        <p>© 2026 Komoku. Built for advanced phishing detection.</p>
      </div>

      {/* responsive */}
      <div className={styles.bottom_nav_bar}>
        <ul>
          <li>
            <Link
              onClick={() => handleProduct("url")}
              className={
                getProductType === "url" || !getProductType ? styles.bnb_on : ""
              }
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
              onClick={() => handleProduct("email")}
              className={getProductType === "email" ? styles.bnb_on : ""}
              href={"/"}
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
              onClick={() => handleProduct("sms")}
              className={getProductType === "sms" ? styles.bnb_on : ""}
              href={"/"}
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
            <Link
              onClick={() => handleProduct("about")}
              href={"/"}
              className={getProductType === "about" ? styles.bnb_on : ""}
            >
              <Image
                src={"/product-docs.webp"}
                alt="product sms icon"
                width={30}
                height={30}
              />
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
