import About from "@components/About";
import AboutUs from "@components/AboutUs";
import ClientsSlides from "@components/ClientsSlides";
import CompanyAndVentures from "@components/CompanyAndVentures";
import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";
import OurBlogs from "@components/OurBlogs";
import ServicePageTestimonials from "@components/ServicePageTestimonials";
import Slider from "@components/Slider";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <AboutUs />
      <Slider />
      <ClientsSlides />
      <ServicePageTestimonials />
      <ContactForm />
      <CompanyAndVentures />
      <OurBlogs />
    </div>
  )
}
