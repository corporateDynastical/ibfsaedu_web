import About from "@components/About";
import AboutUs from "@components/AboutUs";
import ClientsSlides from "@components/ClientsSlides";
import CompanyAndVentures from "@components/CompanyAndVentures";
import ContactForm from "@components/ContactForm";
import HeroFinal from "@components/HeroFinal";
import HeroNew from "@components/HeroNew";
import OurBlogs from "@components/OurBlogs";
import Slider from "@components/Slider";
import Testimonial from "@components/Testimonial";


export default function Home() {
  return (
    <div>
      <HeroFinal />
      <About />
      <AboutUs />
      <Slider />
      <ClientsSlides />
      <Testimonial />
      <ContactForm />
      <CompanyAndVentures />
      <OurBlogs />
      <Slider />
    </div>
  )
}
