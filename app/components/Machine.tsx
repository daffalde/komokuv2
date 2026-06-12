"use client";

import Image from "next/image";
import style from "./machine.module.css";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type PredictResponse = {
  code: number;
  url: string;
  result: string;
  desc: string;
  confidence: number;
};

export default function Machine() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");

  const [url, setUrl] = useState<string>("");
  const [dataApi, setDataApi] = useState<any>();

  const handleClick = async () => {
    try {
      const res = await fetch(
        "https://daffalde-linkphishing.hf.space/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: url }),
        },
      );

      const data: PredictResponse = await res.json();
      console.log("API Result:", data);
      setDataApi(data);
    } catch (err: unknown) {
      console.error("Error:", err);
    }
  };

  const getColor = (code: number | undefined, alpha = 1) => {
    if (code === 100 || code === 300) return `rgba(0, 184, 18, ${alpha})`;
    if (code === 301) return `rgba(255, 35, 35, ${alpha})`;
    if (code === 201 || code === 200) return `rgba(202, 192, 0, ${alpha})`;
    return `rgba(144, 85, 253, ${alpha})`; // Default
  };

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
              onChange={(e) => setUrl(e.target.value)}
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
            <button onClick={handleClick} className={style.input_analyze}>
              <Image
                src={"/analyze.webp"}
                alt="ico analyze"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div
            className={`${style.result} ${dataApi ? style.result_show : ""}`}
          >
            <div
              style={{ backgroundColor: getColor(dataApi?.code, 0.1) }}
              className={style.result_title}
            >
              <p style={{ color: getColor(dataApi?.code, 1) }}>
                {dataApi?.result}
              </p>
            </div>

            <div className={style.result_bar}>
              <div
                style={{
                  width: `${dataApi?.code === 200 || dataApi?.code === 201 ? "100" : dataApi?.confidence}%`,
                  backgroundColor: getColor(dataApi?.code, 0.4),
                  transition: "2s",
                  transitionDelay: "0.5s",
                }}
                className={style.result_bar_in}
              ></div>
            </div>
            <div className={style.result_conf}>
              <p style={{ color: getColor(dataApi?.code, 1) }}>
                {dataApi?.code === 200 || dataApi?.code === 201
                  ? "-"
                  : dataApi?.confidence}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
