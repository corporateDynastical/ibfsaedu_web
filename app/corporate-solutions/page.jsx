import CorpServices from '@components/CorpServices'
import PageTitle from '@components/PageTitle'
import ServicePageHero from '@components/ServicePageHero'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle />
        <ServicePageHero />
        <CorpServices />
    </div>
  )
}

export default page