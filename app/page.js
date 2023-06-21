import AboutUs from "@components/AboutUs";
import ClientTestimonialsHero from "@components/ClientTestimonialsHero";
import ClientsSlides from "@components/ClientsSlides";
import Hero from "@components/Hero";
import ServiceSections from "@components/ServiceSections";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ServiceSections />
      <ClientsSlides />
      <ClientTestimonialsHero />
    </div>
  )
}
