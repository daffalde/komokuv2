"use client";

import Image from "next/image";
import style from "./machine.module.css";
import { useSearchParams } from "next/navigation";

export default function Machine() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");
  return (
    <>
      <div className={style.machine}>
        <div className={`${style.class} `}>
          <span
            className={`${style.class_wrap} ${
              product === "url" || !product
                ? style.class_url
                : product === "email"
                  ? style.class_email
                  : style.class_sms
            }`}
          >
            <div className={style.class_item}>
              <Image
                src={"/product-url.webp"}
                alt="class icon"
                width={20}
                height={20}
              />
              URL Scanner
            </div>
            <div className={style.class_item}>
              <Image
                src={"/product-mail.webp"}
                alt="class icon"
                width={20}
                height={20}
              />
              Email Filter
            </div>
            <div className={style.class_item}>
              <Image
                src={"/product-sms.webp"}
                alt="class icon"
                width={20}
                height={20}
              />
              SMS Guard
            </div>
          </span>
        </div>
        <div className={style.title}>
          <div className={style.title_left}>
            <h1 style={{ marginBottom: "10px" }}>
              Advanced Machine Learning Detection
            </h1>
            <p>
              analyzes suspicious URLs/Text through multi-layered feature
              extraction to deliver reliable threat detection.
            </p>
          </div>
          <div className={style.title_right}>
            <div className={style.tr_item}>
              <Image
                src={"/algo-hero.webp"}
                alt="feature icon"
                width={35}
                height={35}
              />
              <span>
                <h3>Random Forest Algorithm</h3>
                <p>
                  Powered by Random Forest algorithm for optimized
                  classification results.
                </p>
              </span>
            </div>
            <div className={style.tr_item}>
              <Image
                src={"/qr-hero.webp"}
                alt="feature icon"
                width={35}
                height={35}
              />
              <span>
                <h3>QR Scanner</h3>
                <p>
                  Convenience with just a camera, enhancing security for URL
                  detection.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className={style.input}>
          <span>
            <Image
              src={"/small-logo.webp"}
              alt="input icon"
              width={16}
              height={16}
            />
            <p>Real-time Threat Intelligence</p>
          </span>
          <div className={style.input_enter}>
            <textarea
              className={`${style.text_input} ${product !== "url" ? style.text_input_change : null}`}
              name=""
              id=""
              placeholder="Enter your URL/Text...."
            ></textarea>
            {product !== "url" ? null : (
              <button className={style.input_scan}>
                <Image
                  src={"/qr-scan.webp"}
                  alt="ico qr scanner"
                  width={25}
                  height={25}
                />
                <p>QR Scan</p>
              </button>
            )}
            <button className={style.input_analyze}>
              <Image
                src={"/analyze.webp"}
                alt="ico analyze"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
