import CareerContactForm from '@components/CareerContactForm'
import PageTitle from '@components/PageTitle'
import React from 'react'

const page = () => {
    return (
        <div>
            <PageTitle subHeading={'Career'} title1={'Join Our'} title2={'Winning Team!'} src={'/cartoons/career.png'} />
            <CareerContactForm />
        </div>
    )
}

export default page