import ContactPageHero from '@components/ContactPageHero'
import ContactPageTitle from '@components/ContactPageTitle'
import MapAddress from '@components/MapAddress'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContactPageTitle />
        <ContactPageHero />
        <MapAddress />
    </div>
  )
}

export default page