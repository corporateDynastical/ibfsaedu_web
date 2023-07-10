"use client";
import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Didact_Gothic } from "next/font/google";
import style from "@styles/Testimonial.module.scss";
import { useState } from "react";
import { Link } from "react-scroll";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index === 3 ? 0 : (prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? 3 : (prev) => prev - 1);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>
        What's Our <span>Client Say</span>
      </h1>
      <div
        className={style.testimonyContainer}
        style={{
          transform: `translateX(-${index * 100}vw)`,
        }}
      >
        <div className={style.testimonySlide}>
          <div className={style.testimony}>
            <div className={style.top}>
              <div className={style.picture}>
                <Image src={"/assets/images/about.jpg"} alt="name" fill />
              </div>
              <div className={style.info}>
                <h1>Right Foundation</h1>
                <h4>Real Estate Agency</h4>
              </div>
            </div>
            <div className={`${style.bottom} ${didact.className}`}>
              We wholeheartedly endorse Dynastical Communication for their
              remarkable contribution to our construction business. Their
              strategic lead generation, brand building, and social media
              campaigns have propelled our online presence, attracting quality ...
              <span style={{cursor: "pointer", color: "red"}}>
                <Link href={'/corporate-clients'}>View All</Link>
              </span>

            </div>
          </div>
          <div className={style.testimony}>
            <div className={style.top}>
              <div className={style.picture}>
                <Image src={"/assets/political/ravindra.png"} alt="name" fill />
              </div>
              <div className={style.info}>
                <h1>Ravindra Dhangekar</h1>
                <h4>आमदार - कसबा विधानसभा मतदार संघ</h4>
              </div>
            </div>
            <div className={`${style.bottom} ${didact.className}`}>
              नेतृत्व जन्माला येत असतांना त्यांची घडणावळ मोलाची ठरते. २०१७ आणि २०२३ या दोन्ही निवडणुकी दरम्यान या वाक्याचा नेमका प्रयत्य मला आला. निवणुकीदरम्यान विजयश्री खेचून आणण्याच्या माझ्या प्रवासातले मोलाचे साथीदार म्हणजे डायनॅस्टीकल कम्युनिकेशनची कुशल टीम.अतिशय सुनियोजित आणि आधुनिक  ...
              <span style={{cursor: "pointer", color: "red"}}>
                <Link href={'/political-clients'}>View All</Link>
              </span>
            </div>
          </div>
        </div>
        <div className={style.testimonySlide}>
          <div className={style.testimony}>
            <div className={style.top}>
              <div className={style.picture}>
                <Image src={"/assets/images/about.jpg"} alt="name" fill />
              </div>
              <div className={style.info}>
                <h1>Right Foundation</h1>
                <h4>Real Estate Agency</h4>
              </div>
            </div>
            <div className={`${style.bottom} ${didact.className}`}>
              We wholeheartedly endorse Dynastical Communication for their
              remarkable contribution to our construction business. Their
              strategic lead generation, brand building, and social media
              campaigns have propelled our online presence, attracting quality ...
              <span style={{cursor: "pointer", color: "red"}}>
                <Link href={'/corporate-clients'}>View All</Link>
              </span>

            </div>
          </div>
          <div className={style.testimony}>
            <div className={style.top}>
              <div className={style.picture}>
                <Image src={"/assets/political/ravindra.png"} alt="name" fill />
              </div>
              <div className={style.info}>
                <h1>Ravindra Dhangekar</h1>
                <h4>आमदार - कसबा विधानसभा मतदार संघ</h4>
              </div>
            </div>
            <div className={`${style.bottom} ${didact.className}`}>
              नेतृत्व जन्माला येत असतांना त्यांची घडणावळ मोलाची ठरते. २०१७ आणि २०२३ या दोन्ही निवडणुकी दरम्यान या वाक्याचा नेमका प्रयत्य मला आला. निवणुकीदरम्यान विजयश्री खेचून आणण्याच्या माझ्या प्रवासातले मोलाचे साथीदार म्हणजे डायनॅस्टीकल कम्युनिकेशनची कुशल टीम.अतिशय सुनियोजित आणि आधुनिक  ...
              <span style={{cursor: "pointer", color: "red"}}>
                <Link href={'/political-clients'}>View All</Link>
              </span>
            </div>
          </div>
        </div>
        <div className={style.testimonySlide}>
          <div className={style.testimony}>
            <div className={style.top}>
              <div className={style.picture}>
                <Image src={"/assets/images/about.jpg"} alt="name" fill />
              </div>
              <div className={style.info}>
                <h1>Right Foundation</h1>
                <h4>Real Estate Agency</h4>
              </div>
            </div>
            <div className={`${style.bottom} ${didact.className}`}>
              We wholeheartedly endorse Dynastical Communication for their
              remarkable contribution to our construction business. Their
              strategic lead generation, brand building, and social media
              campaigns have propelled our online presence, attracting quality ...
              <span style={{cursor: "pointer", color: "red"}}>
                <Link href={'/corporate-clients'}>View All</Link>
              </span>

            </div>
          </div>
          <div className={style.testimony}>
            <div className={style.top}>
              <div className={style.picture}>
                <Image src={"/assets/political/ravindra.png"} alt="name" fill />
              </div>
              <div className={style.info}>
                <h1>Ravindra Dhangekar</h1>
                <h4>आमदार - कसबा विधानसभा मतदार संघ</h4>
              </div>
            </div>
            <div className={`${style.bottom} ${didact.className}`}>
              नेतृत्व जन्माला येत असतांना त्यांची घडणावळ मोलाची ठरते. २०१७ आणि २०२३ या दोन्ही निवडणुकी दरम्यान या वाक्याचा नेमका प्रयत्य मला आला. निवणुकीदरम्यान विजयश्री खेचून आणण्याच्या माझ्या प्रवासातले मोलाचे साथीदार म्हणजे डायनॅस्टीकल कम्युनिकेशनची कुशल टीम.अतिशय सुनियोजित आणि आधुनिक  ...
              <span style={{cursor: "pointer", color: "red"}}>
                <Link href={'/political-clients'}>View All</Link>
              </span>
            </div>
          </div>
        </div>
        <div className={style.testimonySlide}>
          <div className={style.testimony}>
            <div className={style.top}>
              <div className={style.picture}>
                <Image src={"/assets/images/about.jpg"} alt="name" fill />
              </div>
              <div className={style.info}>
                <h1>Right Foundation</h1>
                <h4>Real Estate Agency</h4>
              </div>
            </div>
            <div className={`${style.bottom} ${didact.className}`}>
              We wholeheartedly endorse Dynastical Communication for their
              remarkable contribution to our construction business. Their
              strategic lead generation, brand building, and social media
              campaigns have propelled our online presence, attracting quality ...
              <span style={{cursor: "pointer", color: "red"}}>
                <Link href={'/corporate-clients'}>View All</Link>
              </span>

            </div>
          </div>
          <div className={style.testimony}>
            <div className={style.top}>
              <div className={style.picture}>
                <Image src={"/assets/political/ravindra.png"} alt="name" fill />
              </div>
              <div className={style.info}>
                <h1>Ravindra Dhangekar</h1>
                <h4>आमदार - कसबा विधानसभा मतदार संघ</h4>
              </div>
            </div>
            <div className={`${style.bottom} ${didact.className}`}>
              नेतृत्व जन्माला येत असतांना त्यांची घडणावळ मोलाची ठरते. २०१७ आणि २०२३ या दोन्ही निवडणुकी दरम्यान या वाक्याचा नेमका प्रयत्य मला आला. निवणुकीदरम्यान विजयश्री खेचून आणण्याच्या माझ्या प्रवासातले मोलाचे साथीदार म्हणजे डायनॅस्टीकल कम्युनिकेशनची कुशल टीम.अतिशय सुनियोजित आणि आधुनिक  ...
              <span style={{cursor: "pointer", color: "red"}}>
                <Link href={'/political-clients'}>View All</Link>
              </span>
            </div>
          </div>
        </div>
        
      </div>
      <div className={style.control}>
        <button
          onClick={() => prevSlide()}
          className={`${index === 0 ? style.deactive : ""}`}
        >
          <BsArrowLeft />
        </button>
        <button
          onClick={() => nextSlide()}
          className={`${index === 3 ? style.deactive : ""}`}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
