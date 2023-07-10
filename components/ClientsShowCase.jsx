import Image from 'next/image'
import { Didact_Gothic } from 'next/font/google'
import style from '@styles/ClientsShowCase.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const ClientsShowCase = () => {

    const data = [
        {
            src: "/assets/images/about.jpg",
            name: "रविंद हेमराज धंगेकर",
            post: "आमदार - कसबा विधानसभा मतदार संघ"
        },
        {
            src: "/assets/images/about.jpg",
            name: "राघवेंद्र बापू मानकर",
            post: "अध्यक्ष, भाजप युवा मोर्चा, पुणे"
        },
        {
            src: "/assets/images/about.jpg",
            name: "रविंद्र भेगडे",
            post: "निवडणूक प्रमुख, भाजपा मावळ विधानसभा. अध्यक्ष, भारतीय जनता पक्ष, मावळ तालुका"
        },
        {
            src: "/assets/images/about.jpg",
            name: "लहु गजानन बालवडकर",
            post: "संस्थापक / अध्यक्ष – लहु बालवडकर सोशल वेलफेअर"
        },
        {
            src: "/assets/images/about.jpg",
            name: "उमेश ज्ञानेश्वर गायकवाड",
            post: "नगरसेवक, प्रभाग क्र. २१ कोरेगाव पार्क-घोरपडी-मुंढवा"
        },
        {
            src: "/assets/images/about.jpg",
            name: "हरीदास चरवड",
            post: "नगरसेवक, मा. स्थायी समिति सदस्य, सदस्य पी.एम.आर.डी.ए., सदस्य नाव समिति,  पुणे"
        },
        {
            src: "/assets/images/about.jpg",
            name: "रघुविर उद्धवराव शेलार",
            post: "माजी उपाध्यक्ष : देहुरोड कॅन्टोन्मेंट बोर्ड, अध्यक्ष"
        },
        {
            src: "/assets/images/about.jpg",
            name: "गणेश तुकाराम भोंडवे",
            post: "माजी नगरसेवक, पिंपरी- चिंचवड महानगरपालिका"
        },
        {
            src: "/assets/images/about.jpg",
            name: "आदित्यराजे हनुमंत घुंडरे (पाटील)",
            post: "माजी उपनगराध्यक्ष, आळंदी नगरपरिषद, आळंदी"
        },
        {
            src: "/assets/images/about.jpg",
            name: "प्रियंका धोत्रे",
            post: "अध्यक्षा : युवा स्पंदन संस्था शिरूर"
        },
        {
            src: "/assets/images/about.jpg",
            name: "अनिल दिलीप सातव पाटील",
            post: "अध्यक्ष, भाजप युवा मोर्चा, हवेली तालुका"
        },
        {
            src: "/assets/images/about.jpg",
            name: "रामकृष्ण हेमचंद्र सातव पाटील",
            post: "संचालक : कृषी उत्पन्न बाजार समिती, हवेली, पुणे"
        },
    ]

    return (
        <div className={style.container}>
            <h1 className={didact.className}>Our <span> Political </span>  Clients</h1>
            <div className={style.clients}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={style.client}>
                            <div className={style.picture}>
                                <Image src={item.src} alt={item.name} fill />
                            </div>
                            <div className={style.info}>
                                <p className={style.name}>{item.name}</p>
                                <p className={style.post}>{item.post}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClientsShowCase