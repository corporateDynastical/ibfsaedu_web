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
      <ClientsSlides />
      <ServicePageTestimonials title={'Hear what  our esteemed clients have to say about us.'} tagline={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} testimonialData={[
        {
          id: 0, author: "John Doe", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus", img: "/assets/images/about.jpg", commenter: "Right Foundation"
        },
        {
          id: 1, author: "John Doe", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus", img: "/assets/images/about.jpg", commenter: "Royal Runbhumi"
        },
        {
          id: 2, author: "John Doe", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus", img: "/assets/images/about.jpg", commenter: "Right Foundation"
        },
        {
          id: 3, author: "Saumitra Vilankar", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima",
          img: "/assets/images/about.jpg", commenter: "Right Foundation"
        },
        {
          id: 4, author: "John Doe", comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam omnis autem dicta laborum delectus porro nesciunt vel aspernatur corporis ea? Dolorum numquam culpa voluptatibus minima temporibus", img: "/assets/images/about.jpg", commenter: "Right Foundation"
        },
      ]} />
      <ContactForm />
      <CompanyAndVentures />
      <OurBlogs />
      <Slider />
    </div>
  )
}
