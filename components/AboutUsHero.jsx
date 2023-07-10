"use client";
import { Didact_Gothic } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import style from "@styles/AboutUsHero.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const AboutUsHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className={style.container1}>
        <h1 className={didact.className}>
          Welcome to <span> Dynastical</span>
        </h1>
        <p className={style.tagline}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, esse!
          Veniam
        </p>
        <div className={style.info}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi
            omnis natus quo! Qui, quod voluptate. Aut qui accusamus voluptas
            quo, ea perferendis sapiente fugiat iste repudiandae perspiciatis
            nesciunt temporibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat id provident harum laboriosam tempore
            officia quisquam doloremque molestias et? Quaerat voluptas dolorem
            officiis necessitatibus quae. Animi temporibus perferendis ab
            accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Temporibus nostrum ab ipsa, debitis adipisci maxime? Aperiam
            ipsum, molestiae ea, a optio neque maiores earum iusto ex odit,
            aspernatur laborum? Id? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Illo veniam est sint. Ipsa recusandae tenetur
            enim, ad laudantium illum. Sapiente reiciendis eius beatae libero
            et, ea quaerat. Blanditiis, ut iure!
          </p>
        </div>
      </div>
      <div className={style.founder}>
        <h1 className={`${didact.className}`}>
          Meet Our <span> Founder</span>
        </h1>
        <div style={{display: "flex", alignContent: "center", justifyContent: "center", padding: "7vh 0"}}>
            <div className={style.left}>
            <div className={style.picture}>
                <Image src={"/assets/images/about.jpg"} alt="Shubham Joshi" fill />
            </div>
            </div>
            <div className={style.right}>
            <p
                style={{
                color: "#191919",
                fontSize: "2rem",
                margin: "10px 0",
                fontWeight: "500",
                }}
            >
                Mr. Shubham Joshi
            </p>
            <p
                style={{
                color: "#595959",
                fontSize: "1.3rem",
                margin: "10px 0",
                fontWeight: "500",
                }}
            >
                Founder & Managing Director
            </p>
            <hr
                style={{
                width: "30%",
                height: "5px",
                margin: "10px 0",
                background: "#bbb",
                }}
            />
            <p className={style.info}>
                the Director of Dynastical Communication Private Limited, the
                leading digital marketing and advertising company in Pune, is a
                seasoned professional with many years of expertise in developing and
                implementing effective digital marketing strategies. He has in-depth
                knowledge of social media, email marketing, paid advertising, and
                content marketing, along with other digital marketing platforms. He
                has a proven history of utilising these channels to increase
                customer conversion rates, generate leads, and drive traffic. He is
                able to continually analyse and optimise campaigns to achieve the
                highest ROI thanks to his sharp eye for data and analytics. He works
                in close collaboration with his team and clients to create amazing
                outcomes and surpass expectations since he is an excellent
                communicator and collaborator.
            </p>
            </div>
        </div>
      </div>
      <div className={style.container2}>
        <h1 className={didact.className}>Why <span> Choose Us </span></h1>
        <div className={style.info}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi
            omnis natus quo! Qui, quod voluptate. Aut qui accusamus voluptas
            quo, ea perferendis sapiente fugiat iste repudiandae perspiciatis
            nesciunt temporibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat id provident harum laboriosam tempore
            officia quisquam doloremque molestias et? Quaerat voluptas dolorem
            officiis necessitatibus quae. Animi temporibus perferendis ab
            accusantium.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nostrum ab ipsa, debitis adipisci maxime? Aperiam ipsum, molestiae
            ea, a optio neque maiores earum iusto ex odit, aspernatur laborum?
            Id?
          </p>
        </div>
      </div>
      <div className={style.countDiv}>
        <div ref={ref} className={style.point}>
          <div className={style.number}>
            {isInView && (
              <CountUp start={0} end={5000} duration={3} delay={0} />
            )}{" "}
            +
          </div>
          <p>Leads Converted</p>
        </div>
        <div ref={ref} className={style.point}>
          <div className={style.number}>
            {isInView && (
              <CountUp start={0} end={2000} duration={3} delay={0} />
            )}{" "}
            +
          </div>
          <p>Successful Campaigns</p>
        </div>
        <div ref={ref} className={style.point}>
          <div className={style.number}>
            {isInView && <CountUp start={0} end={100} duration={3} delay={0} />}{" "}
            +
          </div>
          <p>Satisfied Clients</p>
        </div>
        <div ref={ref} className={style.point}>
          <div className={style.number}>
            {isInView && <CountUp start={0} end={10} duration={3} delay={0} />}{" "}
            +
          </div>
          <p>Years of Industrial Experience</p>
        </div>
      </div>
    </>
  );
};

export default AboutUsHero;
