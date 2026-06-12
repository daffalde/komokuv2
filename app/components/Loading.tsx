import Image from "next/image";
import style from "./loading.module.css";

export default function Loading() {
  return (
    <>
      <div className={style.loading}>
        <img src="./loading.webp" alt="loading icon" />
      </div>
    </>
  );
}
