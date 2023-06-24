import { Outfit } from 'next/font/google'
import style from '@styles/PageTitle.module.scss'

const lilita = Outfit({
  weight: "600",
  subsets: ['latin']
})

const PageTitle = () => {
  return (
    <div className={style.container}>
        <h1 className={`${style.title} ${lilita.className}`}>Coporate Solutions</h1>
        <hr className={style.line} />
    </div>
  )
}

export default PageTitle