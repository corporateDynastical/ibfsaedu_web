import ContactForm from '@components/ContactForm'
import PageTitle from '@components/PageTitle'
import ServicePageHero from '@components/ServicePageHero'
import ServicePageTestimonials from '@components/ServicePageTestimonials'
import Slider from '@components/Slider'
import Testimonial from '@components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageTitle subHeading={'We offer'} title1={'corporate'} title2={'solutions'} src={'/cartoons/cat.gif'} />
      <ServicePageHero />
      <Slider
        title={'Our Coporate Clients'}
        href={'/corporate-clients'}
        onPage={true}
        data={ 
          [
            {
              src: "/corpLogos/c_arnival-01-01.png",
            },
            {
              src: "/corpLogos/d_elilah-01.png",
            },
            {
              src: "/corpLogos/epb.png",
            },
            {
              src: "/corpLogos/promax.png",
            },
            {
              src: "/corpLogos/tapas.png",
            },
            {
              src: "/corpLogos/vedbrahma.png",
            },
            {
              src: "/corpLogos/k_ulfi-01.png",
            },
            {
              src: "/corpLogos/rf_01.png",
            },
            {
              src: "/corpLogos/r_unbhumi-01-01.png",
            },
            {
              src: "/corpLogos/s_adguru-01-01.png",
            },
            {
              src: "/corpLogos/t_ps-01.png",
            },
            {
              src: "/corpLogos/m_sfm-01.png",
            },
            {
              src: "/corpLogos/a_k realty-01.png",
            },
            {
              src: "/corpLogos/k_etkar-01.png",
            },
            {
              src: "/corpLogos/t_rispirit-01-01-01.png",
            },
          ]
        } />
      <Testimonial />
      <ContactForm />
    </div>
  )
}

export default page