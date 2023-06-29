import Link from "next/link";
import style from "@styles/AboutUs.module.scss";
import Image from "next/image";

const AboutUs = () => {

  const dynastical = "Corporate Solutions"
  const dynasticalArr = Array.from(dynastical)
  const political = "Political Analysis"
  const politicalArr = Array.from(political)
  const evnets = "Events Events"
  const evnetsArr = Array.from(evnets)

  return (
    <div className={style.container}>
      <div className={style.circle}></div>
      <div className={style.circle2}></div>
      <div className={style.circle3}></div>
      <div className={style.left}>
        <p className={style.headingOne}>We're Offering</p>
        <h1>Awesome Customer Services</h1>
        <p className={style.tagline}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={style.info}>
          Dynastical Communication is a full-service digital marketing and
          advertising agency in Pune that helps businesses increase their online
          visibility and reach their target audience. With a team of experienced
          professionals, Dynastical Communication provides a range of services
          including SEO, PPC advertising, social media marketing, email
          marketing, content marketing, and website design and development. At
          Dynastical Communication, we believe that your digital dreams can
          become a reality with the right strategy and execution. So, join us
          and reign your digital kingdom with confidence!
        </p>
      </div>
      <div className={style.right}>
        <div className={style.blockDiv}>
          <div className={style.block}>
            <h1 className={style.title}>
              {dynasticalArr.map((item, index) => {
                return (
                  <span
                    style={{
                      transform: `rotate(${(index * 18)}deg)`,
                      color: "rgba(255,255,0)"
                    }}>
                    {item}
                  </span>
                )
              })}
            </h1>
            <div className={style.icon}>
              <Image src={'/assets/images/about.jpg'} alt="dynastical services" fill />
              <Link href={'corporate-solutions'} >
              <div className={style.overlay}>
                View More
              </div>
              </Link>
            </div>
          </div>
          <div className={style.block}>
            <h1 className={style.title}>
              {politicalArr.map((item, index) => {
                return (
                  <span className={style.poli}
                    style={{
                      transform: `rotate(${(index * 18)}deg)`,
                      color: "rgba(255,125,0)"
                    }}>
                    {item}
                  </span>
                )
              })}
            </h1>
            <div className={style.icon}>
              <Image src={'/assets/images/about.jpg'} alt="dynastical services" fill />
              <Link href={'political-analysis'} >
              <div className={style.overlay}>
                View More
              </div>
              </Link>
            </div>
          </div>
          <div className={style.block}>
            <h1 className={style.title}>
              {evnetsArr.map((item, index) => {
                return (
                  <span className={style.eve}
                    style={{
                      transform: `rotate(${(index * 18)}deg)`,
                      color: "#f86c6c"
                    }}>
                    {item}
                  </span>
                )
              })}
            </h1>
            <div className={style.icon}>
              <Image src={'/assets/images/about.jpg'} alt="dynastical services" fill />
              <Link href={'events'} >
              <div className={style.overlay}>
                View More
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
