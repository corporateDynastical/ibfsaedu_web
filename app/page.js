import About from "@components/About";
import AboutUs from "@components/AboutUs";
import ClientsSlides from "@components/ClientsSlides";
import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";
import OurBlogs from "@components/OurBlogs";
import ServiceHero2 from "@components/ServiceHero2";
import TestimonialHero from "@components/TestimonialHero";
import TestimonialsHero from "@components/TestimonialsHero";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <AboutUs />
      {/* <ServiceHero2 /> */}
      <ClientsSlides />
      <TestimonialHero />
      <ContactForm />
      <OurBlogs />
    </div>
  )
}
