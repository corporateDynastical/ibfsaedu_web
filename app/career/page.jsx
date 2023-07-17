import CareerContactForm from '@components/CareerContactForm'
import PageTitle from '@components/PageTitle'
import React from 'react'

const page = () => {
    return (
        <div>
            <PageTitle subHeading={'Career'} title={'Join Our Winning Team!'} />
            <CareerContactForm />
        </div>
    )
}

export default page