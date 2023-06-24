import { Kalam } from 'next/font/google'
import style from '@styles/CorpServices.module.scss'
import Image from 'next/image'

const ysabeau = Kalam({
  weight: "400",
  subsets: ["latin"]
})

const CorpServices = () => {
  return (
    <div className={style.container}>
        <section id="brandIdentity" className={style.brandIdentity}>
          <h1>Brand Identity</h1>
          <div className={style.data}>
              <div className={`${style.left} ${ysabeau.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed possimus facilis iste culpa cupiditate eaque deleniti, ratione earum? Fuga error molestias, inventore recusandae veritatis iure sit nulla voluptatem quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim explicabo minus cupiditate officia saepe optio obcaecati? Neque eum vitae velit, soluta vero perspiciatis iste architecto dicta aspernatur facere voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quos, rem fugit dicta, aliquid placeat, laudantium alias provident facere necessitatibus sequi fuga molestias inventore laboriosam magni vitae quidem dolores odit? </div>
              <div className={style.right}>
              <div className={style.picture}>
                  <Image src="/assets/images/digiservice.png" alt='Branding Dynastical Communication' fill />
              </div>
              </div>
          </div>
        </section>
        <section id="repositioningOfBrand" className={style.repositioningOfBrand}>
          <h1>Repositioning Of Brand</h1>
          <div className={style.data}>
              <div className={style.right}>
                <div className={style.picture}>
                    <Image src="/assets/images/digiservice.png" alt='Branding Dynastical Communication' fill />
                </div>
              </div>
              <div className={`${style.left} ${ysabeau.className}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed possimus facilis iste culpa cupiditate eaque deleniti, ratione earum? Fuga error molestias, inventore recusandae veritatis iure sit nulla voluptatem quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim explicabo minus cupiditate officia saepe optio obcaecati? Neque eum vitae velit, soluta vero perspiciatis iste architecto dicta aspernatur facere voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quos, rem fugit dicta, aliquid placeat, laudantium alias provident facere necessitatibus sequi fuga molestias inventore laboriosam magni vitae quidem dolores odit?
              </div>
          </div>
        </section>
        <div className={style.countContainer}>
            <div className={style.left}>
              <span>10 +</span>
              <p>Years of Experience</p>
            </div>
            <div className={style.center}>
              <span>10 +</span>
              <p>Years of Experience</p>
            </div>
            <div className={style.right}>
              <span>10 +</span>
              <p>Years of Experience</p>
            </div>
        </div>
    </div>
  )
}

export default CorpServices