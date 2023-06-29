import EventsPageHero from '@components/EventsPageHero'
import PageTitle from '@components/PageTitle'
import PoliticalPageHero from '@components/PoliticalPageHero'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle title1={'Events'} />
        <EventsPageHero />
    </div>
  )
}

export default page