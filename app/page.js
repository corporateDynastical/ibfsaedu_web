import AboutUs from "@components/AboutUs";
import ClientsSlides from "@components/ClientsSlides";
import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";
import OurBlogs from "@components/OurBlogs";
import ScrollComponent from "@components/ScrollComponent";
import ServiceSections from "@components/ServiceSections";
import TestimonialsHero from "@components/TestimonialsHero";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ServiceSections />
      <ClientsSlides />
      <TestimonialsHero />
      <ContactForm />
      <OurBlogs />
      <ScrollComponent />
    </div>
  )
}
