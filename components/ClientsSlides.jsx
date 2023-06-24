import style from '@styles/ClientsSlides.module.scss'

const ClientsSlides = () => {
  return (
    <div className={style.container}>
        <div className={`${style.slide} ${style.one}`}>
            <h1 className={style.clientName}>Royal Runbhumi</h1>
            <h2 className={style.tagline}>Lorem ipsum dolor sit amet</h2>
        </div>
        <div className={`${style.slide} ${style.two}`}>
            <h1 className={style.clientName}>Client name</h1>
            <h2 className={style.tagline}>Lorem ipsum dolor sit amet</h2>
        </div>
        <div className={`${style.slide} ${style.three}`}>
            <h1 className={style.clientName}>Client name</h1>
            <h2 className={style.tagline}>Lorem ipsum dolor sit amet</h2>
        </div>
        <div className={`${style.slide} ${style.four}`}>
            <h1 className={style.clientName}>Client name</h1>
            <h2 className={style.tagline}>Lorem ipsum dolor sit amet</h2>
        </div>
    </div>
  )
}

export default ClientsSlides  