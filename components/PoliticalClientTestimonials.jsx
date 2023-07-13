"use client";
import Image from "next/image";
import { Didact_Gothic } from "next/font/google";
import style from "@styles/PoliticalClientTestimonials.module.scss";
import { useState } from "react";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const PoliticalClientTestimonials = () => {
  const [index, setIndex] = useState(0);

  const data = [
    {
      name1: "रविंद्र धंगेकर",
      post1: "आमदार - कसबा विधानसभा मतदार संघ",
      src1: "/assets/political/ravindra.png",
      comment1:
        "नेतृत्व जन्माला येत असतांना त्यांची घडणावळ मोलाची ठरते. २०१७ आणि २०२३ या दोन्ही निवडणुकी दरम्यान या वाक्याचा नेमका प्रयत्य मला आला. निवणुकीदरम्यान विजयश्री खेचून आणण्याच्या माझ्या प्रवासातले मोलाचे साथीदार म्हणजे डायनॅस्टीकल कम्युनिकेशनची कुशल टीम.अतिशय सुनियोजित आणि आधुनिक कार्यप्रणाली राबवत त्यांनी पूर्व निवडणूक व निवडणुकीदरम्यान मला सहकार्य केले. जनमत चाचणी, प्रचार व प्रसारासाठी सोशल मीडियाचा वापर, जनतेचा कौल, कार्याचा अहवाल अशा विविध अभिनव उपक्रमांचा प्रभावी वापर त्यांनी या दरम्यान केला. माझे विचार व कार्य जनमानसात नेण्यासाठीचे डायनॅस्टीकल कम्युनिकेशन हे योग्य माध्यम ठरले.",
      name2: "राघवेंद्र बापू मानकर",
      post2: "अध्यक्ष, भाजप युवा मोर्चा, पुणे शहर",
      src2: "/assets/political/bapu_mankar.png",
      comment2:
        "डायनॅस्टीकल कम्युनिकेशन टीम अतिशय उत्तम काम करते. जनतेचा अनेक विषयांवरचा कल लक्षात घेऊन, प्रत्येक विभागातील जनतेकडून पक्षाविषयी व लोक प्रतीनिधीविषयी मत जाणून घेऊन प्रचाराची रणनीती ठरवते. त्यानंतर कार्यकर्त्यांचे प्रशिक्षण, बूथ कमिटीचे नियोजन, डिजिटल रणनीती, सोशल मीडियाद्वारे विकासकार्यांचा सादरीकरण हे सगळे घटक ते सखोल अभ्यास करून पूर्णत्वास नेतात. त्यांनी नेहमीच राजकीय आणि सामाजिक स्तरावरचे माझे कार्य अतिशय समर्थपणे जनतेसमोर मांडले आहे.",
      name3: "रविंद्र भेगडे",
      post3:
        "निवडणूक प्रमुख,भाजपा मावळ विधानसभा. अध्यक्ष, भारतीय जनता पक्ष, मावळ तालुका",
      src3: "/assets/political/ravindra_bhegade.png",
      comment3:
        "डायनॅस्टीकल कम्युनिकेशन संपूर्ण टीमने राजकारणातल्या बारकाव्यांचा सखोल अभ्यास केलाय. त्यामुळे चालू घडामोडींचा आढावा घेत कुठल्या रणनीती योग्य ठरतील याचे त्यांनी उत्तम मार्गदर्शन केले. प्रभागातल्या अनेक कामांचा अहवाल तयार करणं , जनमत चाचणीद्वारे जनसंख्यांच्या समस्या समजून घेणं, सोशल मीडियाचा प्रभावी वापर करणं असे अनेक घटक त्यांनी सक्षमतेने सांभाळली. डायनॅस्टीकल कम्युनिकेशन संपूर्ण टीम कुठलेही काम अत्यंत प्रामाणिकपणे करते. त्यांच्या पुढील वाटचालीस माझ्या अनेक शुभेच्छा !",
    },
    {
      name1: "लहु गजानन बालवडकर",
      post1: "संस्थापक / अध्यक्ष – लहु बालवडकर सोशल वेलफेअर",
      src1: "/assets/political/lahu.png",
      comment1:
        "राजकीय क्षेत्र अतिशय परिवर्तनशील आहे, दिवस सरत नाही तो नवीन बदलाला आम्हाला सामोरे जावे लागते. हा रोजचा होणार बदल अगदी सुनियोजित पद्धतीने हाताळायचे काम डायनॅस्टीकल कम्युनिकेशन करते. चैतन्यस्पर्श पादुका दर्शन सोहळा, सुरसंध्या, आठवडी बाजार अशा अनेक समाजभिमुख कार्य यशस्वी करण्यामागे संपूर्ण टीमचे अथक परिश्रम होते. मतदार संघाचे सर्वेक्षण, बूथ कमिटीचे नियोजन, सोशल मिडियाद्वारे कार्याचा प्रचार अशा अनेक स्तरावरचे कार्य अतिशय काळजीपूर्वक हाताळले गेले. डायनॅस्टीकल कम्युनिकेशनच्या संपूर्ण टीमचे अतिशय मोलाचे मार्गदर्शन मला लाभले आहे.",
      name2: "उमेश ज्ञानेश्वर गायकवाड",
      post2: "नगरसेवक, प्रभाग क्र. २१ कोरेगाव पार्क-घोरपडी-मुंढवा",
      src2: "/assets/political/umesh.png",
      comment2:
        "काळानुसार राजकारणाने सुद्धा अनेक बदल अनुभवले त्यातलाच एक म्हणजे सोशल मीडियाचा प्रभावी वापर. आपलं कार्य समाजाच्या सगळ्या स्तरात पोहचण्यासाठी, जनतेच्या मनात आपल्या विषयी आपलेपणाची भावना निर्माण व्हावी या सगळ्यांसाठीच हे माध्यम उपयुक्त ठरत. या सगळ्याच विषयी मला योग्य मार्गदर्शन देण्याचं काम डायनॅस्टीकल कम्युनिकेशन केलं. संपूर्ण निवणूकीचे नियोजनबद्ध आराखडा तयार करणं, प्रभागातल्या कार्याचा योग्य आढावा घेणं त्याचा प्रचार, प्रसार करणं अशा अनेक अभिनव उपक्रमांनी त्यांनी राबवले. माझी व माझ्या कार्याची ओळख जनसामान्यापर्यंत घेऊन जाण्यासाठीचे खरे चेहरे म्हणजे डायनॅस्टीकल कम्युनिकेशन संपूर्ण टीम.",
      name3: "हरीदास चरवड",
      post3:
        "नगरसेवक, मा. स्थायी समिति सदस्य, सदस्य पी.एम.आर.डी.ए., सदस्य नाव समिति, पुणे",
      src3: "/assets/political/haribhau.png",
      comment3:
        "बदलत्या जगाच्या वेगासोबत चालायचे असेल तर सोशल मिडिया आजच्या समाज मनाचा आरसा आहे. सोशल मिडियाचा प्रभावी वापर करुण माझे  विचार आणि धोरण जनसामान्यापर्यंत पोहोचवण्याच काम डायनॅस्टीकल कम्युनिकेशन चोख करते. निवडणुकी दरम्यान वोर रूम प्लॅनिंगच्या सहाय्याने कार्यकर्त्यांना सक्रीय करून त्यांना आवश्यक असलेली सर्व यंत्रणा पुरवणं, तसेच मॅन टू मॅन मार्किंग्च्या सहाय्याने अधिकाधिक मतदारापर्यंत पोहोचवणं हा अतिशय अवघड भाग पण संपूर्ण टीमने उत्तम पद्धतीने सांभाळला. माझ्या आता पर्यंतच्या सर्व विजयात त्यांचा नेहमीच सिंहाचा वाटा होता.",
    },
    {
      name1: "रघुविर उद्धवराव शेलार",
      post1: "माजी उपाध्यक्ष : देहुरोड कॅन्टोन्मेंट बोर्ड, अध्यक्ष",
      src1: "/assets/political/shelar.png",
      comment1:
        "शिस्तबद्ध नियोजन, धोरणात्मक रणनीती, सामाजिक माध्यमांचा प्रभावशील वापर या त्रिसूत्रीचा योग्य वापर डायनॅस्टीकल कम्युनिकेशनद्वारे केला जातो. माझ्या संपूर्ण राजकीय प्रवासात त्यांची मला मोलाची साथ लाभलीय. सोशल मीडिया हे सर्वार्थाने प्रभावी माध्यम आहे, त्यांचा योग्य उपयोग करत डायनॅस्टीकल कम्युनिकेशन संपूर्ण टीमने माझं कार्य जनतेपर्यंत पोहचवलं. त्यांच्या पुढील वाटचालीस अनेक शुभेच्छा !",
      name2: "गणेश तुकाराम भोंडवे",
      post2: "माजी नगरसेवक, पिंपरी- चिंचवड महानगरपालिका",
      src2: "/assets/political/ganesh.png",
      comment2:
        "पूर्वी मोठमोठाल्या सभा, मंडपांमधली गर्दी, कार्यक्रम, सोशल गॅदरिंग, बैठका अशा ठिकाणी ही मतदार मंडळी सापडायची. पण आता हीच मंडळी सापडतात सोशल मीडियावर. त्यामुळेच आजकाल सोशल मीडियावरचा प्रचार ‘सोशल’ मतदारांच्या भाषेत ‘क्रुशल ठरतो. हेच क्रुशल काम माझ्यासाठी सोपं केलं डायनॅस्टीकल कम्युनिकेशन उत्कृष्ट टीमने. निवडणुकीचे नियोजन, सोशल मीडियाद्वारे कार्याचा प्रचार प्रसार, मतदार संघाचे सर्वेक्षण हे सगळे महत्वपूर्ण घटक त्यांनी समर्थपणे सांभाळले. राजकारण आणि समाजकारण या दोन्ही पातळीवर कार्य करतांना डायनॅस्टीकलच्या संपूर्ण टीमचे मला खूप मदत झाली. आज जनमानसात माझ्या कार्याची दखल घेतली जातेय, यामागे त्यांचे मोलाचे मार्गदर्शन मला लाभले.",
      name3: "दिनेश ज्ञानेश्वर गायकवाड",
      post3: "सामाजिक कार्यकर्ता",
      src3: "/assets/political/dinesh.png",
      comment3:
        "राजकीय आणि सामाजिक क्षेत्रातले कार्य ही नेहमी सांघिक प्रयत्नातून साध्य होतात. एका कृतीमागे अनेक विचारांची जोड असते. डायनॅस्टीकल कम्युनिकेशन अनेक वर्ष माझ्यासाठी ही विचारांची कार्यप्रणाली राबवतेय. संपूर्ण टीमने अतिशय सुनियोजित अशा निवडपूर्व आधुनिक कार्यप्रणालीव्दारे डिजिटल रणनीती, वॉर रूम प्लॅनिंग, मतदार संघाचे सर्वेक्षण असे अनेक उपक्रम यशस्वीरित्या पूर्णत्वास  नेले. सोशल मिडीयाचा प्रभावी वापर करत त्यांनी माझे विकासकार्य जनतेपर्यंत पोहचवले. सामाजिक उपक्रमांचे नियोजन, प्रसिद्धी, प्रचार,प्रसार अशा सगळ्यात स्तरावर संपूर्ण टीम बारकाईने लक्ष देते.",
    },
    {
      name1: "आदित्यराजे हनुमंत घुंडरे (पाटील)",
      post1: "माजी उपनगराध्यक्ष, आळंदी नगरपरिषद, आळंदी",
      src1: "/assets/political/aditya.png",
      comment1:
        "राजकीय क्षेत्राचे पहिले धडे गिरवतांना मला हक्काची साथ मिळाली ती डायनॅस्टीकल कम्युनिकेशनची.  आळंदील्या घराघरात माझे विचार, धोरण  पोहचले ते त्यांच्या अथक परिश्रमाने. जनमत चाचणी द्वारे जनसंखेच्या मुलभूत समस्यांची माहिती जमा करणं, विकासकार्याचे कल्पकतेने सोशल मीडियावर मांडण, प्रसंगी स्थानिक उपक्रमांचे चित्रीकरण, त्यांची प्रसिद्धी. डायनॅस्टीकल कम्युनिकेशन संपूर्ण टीम अगदी सुनियोजित आणि चोख काम करते. माझ्या संपूर्ण राजकीय आणि सामाजिक कार्यात त्यांचे स्थान नक्कीच महत्वपूर्ण आहे.",
      name2: "राजश्री पाटील",
      // post2: "अध्यक्ष, भाजप युवा मोर्चा, पुणे शहर",
      src2: "/assets/political/rajashree.png",
      comment2:
        "सुनियोजित विचारांची कार्यप्रणाली राजकारण आणि समाजकारण दोन्ही स्तरावर महत्वपूर्ण ठरते. हीच कार्यप्रणाली राबवण्यात मला डायनॅस्टीकल कम्युनिकेशनचे उत्तम सहकार्य लाभले. कार्यकर्त्यांचे प्रशिक्षण, बूथ कमिटीचे नियोजन, डिजिटल रणनीती, सोशल मीडियाद्वारे विकासकार्यांचा सादरीकरण या सगळ्या घटकांवर त्यांनी सखोलपूर्वक मार्गदर्शन केले.माझ्या अनेक विजयात त्यांचा नेहमीच मोलाचा सहभाग राहिला आहे. जनतेसोबतचे माझे नाते दृढ करण्यामागे सुद्धा त्यांचे अथक परिश्रम आहेत. त्यांच्या पुढील वाटचालीसाठी अनेक शुभेच्छा !.",
      name3: "हिमाली कांबळे",
      // post3:
      //   "निवडणूक प्रमुख,भाजपा मावळ विधानसभा. अध्यक्ष, भारतीय जनता पक्ष, मावळ तालुका",
      src3: "/assets/political/himali.png",
      comment3:
        "असं म्हणतात की कुठलेही युद्ध हे पहिले विचारात जिंकले जाते. राजकारणात सुद्धा हेच सूत्र लागू होते. अनेक विचारांची माळ एकत्र येत ही रणनीती तयार होत असते. माझ्या कारकिर्दीत मदत करणारी ही विचारांची माळ म्हणजे डायनॅस्टीकल कम्युनिकेशन. माझ्या प्रत्येक कार्याचा प्रचार आणि प्रसार त्यांनी उत्तमरित्या केला. कार्य अहवाल, विकासकार्यांचे सोशल मिडियावर सादरीकरण, निवडणुकी दरम्यान डिजिटल रणनीती हे सगळे घटक पण संपूर्ण टीमने अतिशय प्रभावीपणे जनतेच्या समोर आणले. कमी वेळेत प्रभावी सादरीकरण ही तर त्यांची सगळ्यात मोठी खासियत आहे. त्यांचा पुढच्या यशस्वी प्रवासासाठी अनेक शुभेच्छा !",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1 className={didact.className}>
          What <span>people</span> say <span>About</span> us
        </h1>
      </div>
      <div
        className={style.testimonials}
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {data.map((item, index) => {
          return (
            <div key={index} className={style.slideDiv}>
              <div className={style.testimony}>
                <div className={style.comment}>
                  <div className={style.quoteDiv}>
                    <div className={style.quote}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                  <p className={style.text}>{item.comment1}</p>
                  <div className={style.quoteDivEnd}>
                    <div className={style.quoteEnd}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                </div>
                <div className={style.author}>
                  <div className={style.picture}>
                    <Image src={item.src1} alt={item.name1} fill />
                  </div>
                  <p className={style.name}>{item.name1}</p>
                  <p className={style.post}>{item.post1}</p>
                </div>
              </div>
              <div className={`${style.testimony} ${style.reverse}`}>
                <div className={style.comment}>
                  <div className={style.quoteDiv}>
                    <div className={style.quote}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                  <p className={style.text}>{item.comment2}</p>
                  <div className={style.quoteDivEnd}>
                    <div className={style.quoteEnd}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                </div>
                <div className={style.author}>
                  <div className={style.picture}>
                    <Image src={item.src2} alt={item.name2} fill />
                  </div>
                  <p className={style.name}>{item.name2}</p>
                  <p className={style.post}>{item.post2}</p>
                </div>
              </div>
              <div className={style.testimony}>
                <div className={style.comment}>
                  <div className={style.quoteDiv}>
                    <div className={style.quote}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                  <p className={style.text}>{item.comment3}</p>
                  <div className={style.quoteDivEnd}>
                    <div className={style.quoteEnd}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                </div>
                <div className={style.author}>
                  <div className={style.picture}>
                    <Image src={item.src3} alt={item.name3} fill />
                  </div>
                  <p className={style.name}>{item.name3}</p>
                  <p className={style.post}>{item.post3}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.buttons}>
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={`${style.button} ${index === 0 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={`${style.button} ${index === 1 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(2);
          }}
          className={`${style.button} ${index === 2 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(3);
          }}
          className={`${style.button} ${index === 3 ? style.active : ""}`}
        ></div>
      </div>
      <div className={style.buttonsBottoms}>
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={`${style.button} ${index === 0 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={`${style.button} ${index === 1 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(2);
          }}
          className={`${style.button} ${index === 2 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(3);
          }}
          className={`${style.button} ${index === 3 ? style.active : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default PoliticalClientTestimonials;
