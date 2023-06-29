import PageTitle from '@components/PageTitle'
import PoliticalPageHero from '@components/PoliticalPageHero'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle title1={'political'} title2={'analysis'} />
        <PoliticalPageHero />
    </div>
  )
}

export default page