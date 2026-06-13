"use client";

import Image from "next/image";
import style from "./machine.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import Loading from "./Loading";
import { Html5Qrcode } from "html5-qrcode";

type PredictResponse = {
  code: number;
  url: string;
  result: string;
  desc: string;
  confidence: number;
};

export default function Machine() {
  const [getProductType, setGetProductType] = useState<String | null>("");
  useEffect(() => {
    setGetProductType(localStorage.getItem("productType"));
  });

  const [url, setUrl] = useState<string>("");
  const [dataApi, setDataApi] = useState<any>();

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e?: string) => {
    setHasilErr(false);
    setLoading(true);
    try {
      const res = await fetch(
        "https://daffalde-linkphishing.hf.space/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: e ?? url }),
        },
      );

      const data: PredictResponse = await res.json();
      setDataApi(data);
      setLoading(false);
    } catch (err: unknown) {
      console.error("Error:", err);
      setLoading(false);
    }
  };

  const [hasilErr, setHasilErr] = useState<boolean | undefined>(false);

  function handleQR(e: ChangeEvent<HTMLInputElement>) {
    setHasilErr(false);
    setDataApi(null);
    if (e.target.files) {
      const fungsiScan = new Html5Qrcode("qr-scan");

      fungsiScan
        .scanFile(e.target.files[0], true)
        .then((decodedText) => {
          handleClick(decodedText);
        })
        .catch(() => {
          setHasilErr(true);
        });
    }
  }

  const getColor = (code: number | undefined, alpha = 1) => {
    if (code === 100 || code === 300) return `rgba(0, 184, 18, ${alpha})`;
    if (code === 301) return `rgba(255, 35, 35, ${alpha})`;
    if (code === 201 || code === 200) return `rgba(202, 192, 0, ${alpha})`;
    if (hasilErr) return `rgba(144, 85, 253, ${alpha})`;
  };

  function handleAnalyze() {
    handleClick();
  }

  return (
    <>
      <div className={style.machine}>
        <div className={`${style.class} `}>
          <span
            className={`${style.class_wrap} ${
              getProductType === "url" || !getProductType
                ? style.class_url
                : getProductType === "email"
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
              className={`${style.text_input} ${getProductType === "sms" || getProductType === "email" ? style.text_input_change : null}`}
              name=""
              id=""
              placeholder="Enter your URL/Text...."
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (getProductType === "url" || !getProductType) {
                    e.preventDefault();
                    handleClick();
                  } else {
                    null;
                  }
                }
              }}
            ></textarea>
            {getProductType === "sms" || getProductType === "email" ? null : (
              <button className={style.input_scan}>
                <Image
                  src={"/qr-scan.webp"}
                  alt="ico qr scanner"
                  width={25}
                  height={25}
                />
                <p>QR Scan</p>
                <input type="file" onChange={handleQR} id="qr-scan" />
              </button>
            )}
            <button onClick={handleAnalyze} className={style.input_analyze}>
              {loading ? (
                <Loading />
              ) : (
                <Image
                  src={"/analyze.webp"}
                  alt="ico analyze"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
          <div
            className={`${style.result} ${dataApi || hasilErr ? style.result_show : ""}`}
          >
            <div
              style={{ backgroundColor: getColor(dataApi?.code, 0.1) }}
              className={style.result_title}
            >
              <p style={{ color: getColor(dataApi?.code, 1) }}>
                {hasilErr ? "No QR Detected" : dataApi?.result}
              </p>
            </div>

            <div className={style.result_bar}>
              <div
                style={{
                  width: `${dataApi?.code === 200 || dataApi?.code === 201 || hasilErr ? "100" : dataApi?.confidence}%`,
                  backgroundColor: getColor(dataApi?.code, 0.4),
                  transition: "2s",
                  transitionDelay: "0.5s",
                }}
                className={style.result_bar_in}
              ></div>
            </div>
            <div className={style.result_conf}>
              <p style={{ color: getColor(dataApi?.code, 1) }}>
                {dataApi?.code === 200 || dataApi?.code === 201 || hasilErr
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
