import { Montserrat } from 'next/font/google'
import style from '@styles/ContactForm.module.scss'
import Link from 'next/link'

const mont = Montserrat({
    weight: "500",
    subsets: ['latin']
})

const ContactForm = () => {
  return (
    <div className={style.container}>
        <div className={style.contactformbox}>
            <h1 className={style.title}>Want to discuss an idea that could change the world ? We’re all ears !</h1>
            <form className={style.form} action="">
                <div className={style.name}>
                    <div className={style.first}>
                        <input type="text" name='first' placeholder='First Name' required/>
                    </div>
                    <div className={style.last}>
                        <input type="text" name='last' placeholder='Last Name' required/>
                    </div>
                </div>
                <div className={style.email}>
                    <input type="email" name='first' placeholder='Email' required/>
                </div>
                <div className={style.company}>
                    <input type="text" name='first' placeholder='Company' required/>
                </div>
                <div className={style.mobile}>
                    <input type="tel" name='first' placeholder='Contact Number' required/>
                </div>
                <div className={style.submit}>
                    <input type="submit" value={'Submit'}/>
                </div>
            </form>
        </div>
        <div className={style.addressContainer}>
            <div className={`${style.data} ${mont.className}`}>
                <h1 className={style.title}>our office !</h1>
                <h2 className={style.address}>Minar Apartment, <br /> Law College Rd, <br /> Pune</h2>
                <h3 className={style.phone}>Phone: 
                <Link className='px-2' href={'tel: +918766962067'}>+91 87669 62067</Link>
                <span>/</span>
                <Link className='px-2' href={'tel: +919175772356'}>+91 91757 72356</Link>
                </h3>
                <h4 className={style.email}>connectdynastical@gmail.com</h4>
            </div>
        </div> 
    </div>
  )
}

export default ContactForm