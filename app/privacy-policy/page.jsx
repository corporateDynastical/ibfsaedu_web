import PageTitle from '@components/PageTitle'
import PrivacyPolicy from '@components/PrivacyPolicy'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageTitle subHeading={"our"} title1={'privacy'} title2={'policy'} />
        <PrivacyPolicy />
    </div>
  )
}

export default page