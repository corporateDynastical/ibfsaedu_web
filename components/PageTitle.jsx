import { Outfit } from 'next/font/google'
import style from '@styles/PageTitle.module.scss'

const lilita = Outfit({
  weight: "600",
  subsets: ['latin']
})

const PageTitle = () => {
  return (
    <div className={style.container}>
      <div className={style.circle}></div>
      <div className={style.circle2}></div>
      <div className={style.circle3}></div>
      <div className={style.circle4}></div>
      <h1 className={`${style.title} ${lilita.className}`}>Corporate Solutions</h1>
    </div>
  )
}

export default PageTitle
