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
      <div className={`${style.left}`}>
        <div className={style.circle}>
          <div className={style.outerBorder}>
            <div className={style.innerBorder}></div>
          </div>
        </div>
        <p className={`${style.headingOne}`}>{subHeading}</p>
        <h1 className={didact.className}>
          <span> {title1} </span>
          <br /> {title2}
        </h1>
      </div>
      <div className={style.right}>
        <div className={style.outerCircle}>
          <div className={style.innerCircle}>
            <div className={style.picture}>
              <Image src={src} alt="about dynastical" fill />
            </div>
          </div>
        </div>
        <hr className={style.line} />
      </div>
    </div>
  );
};
export default PageTitle;
