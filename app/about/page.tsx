import AboutPoints from "@/components/about-points"
import Director from "@/components/director"
import ContactSection from "@/components/contact-section"
import MissionVission from "@/components/mission-vision"
import Leadteam from "@/components/leadteam"
import Advisoryteam from "@/components/advisory"
import Trainingteam from "@/components/trainingteam"

const AboutPage = () => {
    return (
        <div>
            <AboutPoints />
           
            <MissionVission />
        
           <Leadteam/>
            
            <br></br>
            <br></br>
            <br>
            </br>
            <div className="container mx-auto">
    <div className="flex w-full items-center justify-center">
        <div className="flex-[1.5] space-y-6">
            <h1 className="font-bold text-5xl text-green-600 justify-center" style={{ marginLeft: '500px' }}>
                <strong style={{ color: 'green' }}>
                    Advisory Board
                </strong>
            </h1>
        </div>
    </div>
</div>

<br></br>
            <Advisoryteam />


            <br>
</br><br>
</br>
<div className="container mx-auto">
    <div className="flex w-full items-center justify-center">
        <div className="flex-[1.5] space-y-6">
            <h1 className="font-bold text-5xl text-green-600 justify-center" style={{ marginLeft: '500px' }}>
                <strong style={{ color: 'green' }}>
                    Trainning Team
                </strong>
            </h1>
        </div>
    </div>
</div>


<br>
</br>
    
    
    <Trainingteam />
               

            <ContactSection />

            
         
        </div>
    )
}

export default AboutPage