"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCall } from "react-icons/io";
import { motion } from "framer-motion";
import { Lilita_One } from "next/font/google";
import style from "@styles/Navbar.module.scss";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const data = [
    { item: "about", link: "/about-us" },
    { item: "contact", link: "/contact-us" },
    { item: "digital marketing", link: "/digital-marketing" },
    { item: "corporate  solutions", link: "/corporate-solutions" },
    { item: "political  analysis", link: "/political-analysis" },
    { item: "events", link: "/events" },
    { item: "corporate clients", link: "/corporate-clients" },
    { item: "political clients", link: "/political-clients" },
    { item: "blogs", link: "/blogs" },
  ];

  const [show, setShow] = useState(false);

  return (
    <>
      <div className={style.container}>
        <nav className={style.navbar}>
          <div className={style.logo}>
            <Link href={"/"}>
              <div className={style.picture}>
                <Image
                  src={"/assets/images/main_logo.svg"}
                  alt="dynastical communication logo"
                  fill
                />
              </div>
            </Link>
          </div>
          <div className={style.navButton}>
            <button onClick={() => setShow(true)}>
              Menu{" "}
              <span>
                <GiHamburgerMenu />
              </span>
            </button>
          </div>
          {show && 
          <div className={style.navMenu}>
            <div className={style.menuContainer}>
              <div className={style.topDiv}>
                <h1 className={style.menu}>Menu</h1>
                <button onClick={() => setShow(false)}>
                  <AiOutlineClose />
                </button>
              </div>
              <div className={style.menuDiv}>
                <ul>
                  {data.map((item, index) => {
                    return (
                      <li onClick={() => setShow(false)} key={index}>
                        <Link href={item.link}>{item.item}</Link>
                        <hr />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
