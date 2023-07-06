import Link from "next/link";
import Image from "next/image";
import { Lilita_One } from "next/font/google";
import style from "@styles/AboutUs.module.scss";

const lilita = Lilita_One({
  weight: "400",
  subsets: ['latin-ext']
})

const AboutUs = () => {

  const dynastical = "Corporate Solutions"
  const dynasticalArr = Array.from(dynastical)
  const political = "Political Analysis"
  const politicalArr = Array.from(political)
  const evnets = "Events"
  const evnetsArr = Array.from(evnets)
  const digital = "Digital Marketing"
  const digitalArr = Array.from(digital)

  return (
    <div className={style.container}>
      <div className={style.circle}></div>
      <div className={style.circle3}></div>
      <div className={style.left}>
        <p className={`${style.headingOne}`}>We're Offering</p>
        <h1 className={lilita.className}>Awesome Customer Services</h1>
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
          <div style={{ display: "flex", alignItems: "center", gap: "4vw" }}>
            <div className={style.block}>
              <h1 className={style.title}>
                {dynasticalArr.map((item, index) => {
                  return (
                    <span
                      className={lilita.className}
                      style={{
                        transform: `rotate(${(index * 18)}deg)`,
                      }}>
                      {item}
                    </span>
                  )
                })}
              </h1>
              <div className={`${style.icon}`}>
                <Image src={'/assets/images/about.jpg'} alt="dynastical services" fill />
                <Link href={'/corporate-solutions'} >
                  <div className={style.overlay}>
                    View More
                  </div>
                </Link>
              </div>
              <button>
                <Link href={'/corporate-solutions'}>
                  Learn More
                </Link>
              </button>
            </div>
            <div className={style.block}>
              <h1 className={style.title}>
                {politicalArr.map((item, index) => {
                  return (
                    <span className={`${style.poli} ${lilita.className}`}
                      style={{
                        transform: `rotate(${(index * 18)}deg)`,
                      }}>
                      {item}
                    </span>
                  )
                })}
              </h1>
              <div className={`${style.icon}`}>
                <Image src={'/assets/images/about.jpg'} alt="dynastical services" fill />
                <Link href={'political-analysis'} >
                  <div className={style.overlay}>
                    View More
                  </div>
                </Link>
              </div>
              <button>
                <Link href={'/political-analysis'}>
                  Learn More
                </Link>
              </button>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4vw" }}>
            <div className={style.block}>
              <h1 className={`${style.title} ${style.title3}`}>
                {evnetsArr.map((item, index) => {
                  return (
                    <span className={`${style.eve} ${lilita.className}`}
                      style={{
                        transform: `rotate(${(index * 18)}deg)`,
                      }}>
                      {item}
                    </span>
                  )
                })}
              </h1>
              <div className={`${style.icon} ${lilita.className}`}>
                <Image src={'/assets/images/about.jpg'} alt="dynastical services" fill />
                <Link href={'events'} >
                  <div className={style.overlay}>
                    View More
                  </div>
                </Link>
              </div>
              <button>
                <Link href={'/events'}>
                  Learn More
                </Link>
              </button>
            </div>
            <div className={style.block}>
              <h1 className={`${style.title} ${style.title3}`}>
                {digitalArr.map((item, index) => {
                  return (
                    <span className={`${style.eve} ${lilita.className}`}
                      style={{
                        transform: `rotate(${(index * 18)}deg)`,
                      }}>
                      {item}
                    </span>
                  )
                })}
              </h1>
              <div className={`${style.icon} ${lilita.className}`}>
                <Image src={'/assets/images/about.jpg'} alt="dynastical services" fill />
                <Link href={'/digital-marketing'} >
                  <div className={style.overlay}>
                    View More
                  </div>
                </Link>
              </div>
              <button>
                <Link href={'/digital-marketing'}>
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
