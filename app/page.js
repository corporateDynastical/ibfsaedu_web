import AboutUs from "@components/AboutUs";
import ClientsSlides from "@components/ClientsSlides";
import ContactForm from "@components/ContactForm";
import Hero from "@components/Hero";
import OurBlogs from "@components/OurBlogs";
import ServicesHero from "@components/ServicesHero";
import TestimonialsHero from "@components/TestimonialsHero";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ServicesHero />
      <ClientsSlides />
      <TestimonialsHero />
      <ContactForm />
      <OurBlogs />
    </div>
  )
}
