import AboutPageTitle from "@components/AboutPageTitle";
import AboutUsHero from "@components/AboutUsHero";
import ContactForm from "@components/ContactForm";
import PageTitle from "@components/PageTitle";
import ServicePageTestimonials from "@components/ServicePageTestimonials";
import Slider from "@components/Slider";
import Testimonial from "@components/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle
        subHeading={"about"}
        title1={"Dynastical"}
        title2={"Communication"}
        src={'/cartoons/aboutUs2.jpeg'}
      />
      <AboutUsHero />
      <Testimonial />
      <ContactForm />
      <Slider />
    </div>
  );
};

export default page;
