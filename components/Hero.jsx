import style from '@styles/Hero.module.scss'

const Hero = () => {
  return (
    <div className={style.container}>
        <div className={style.left}>left</div>
        <div className={style.right}>right</div>
    </div>
  )
}

export default Hero