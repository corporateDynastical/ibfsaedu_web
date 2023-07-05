import ContactForm from '@components/ContactForm'
import PageTitle from '@components/PageTitle'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageTitle subHeading={'Meet Our'} title1={'Corporate'} title2={'Clients'} />
      <ContactForm />
    </div>
  )
}

export default page