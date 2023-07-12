"use client";

import { Didact_Gothic, Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import style from "@styles/PageTitle.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const PageTitle = ({ subHeading, title1, title2, src }) => {
  return (
    <div className={style.container}>
      <div className={style.circle2}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={style.left}>
        <p className={didact.className}>{subHeading}</p>
        <h1 className={didact.className}>{title1}</h1>
        <h1 className={didact.className}>{title2}</h1>
      </div>
      <div className={style.right}>
        <div className={style.picture}>
          <Image src={src} alt="about dynastical" fill />
        </div>
      </div>
    </div>
  );
};
export default PageTitle;
