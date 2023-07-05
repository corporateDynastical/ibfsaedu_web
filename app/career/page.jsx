import CareerContactForm from '@components/CareerContactForm'
import PageTitle from '@components/PageTitle'
import React from 'react'

const page = () => {
    return (
        <div>
            <PageTitle subHeading={'Join Our Winning Team!'} title1={'Career'} />
            <CareerContactForm />
        </div>
    )
}

export default page