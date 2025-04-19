import img from "../images/slide2.jpg";
import "../stylesheets/About.css";
import sbc from "../images/SBC.jpg";
import ScrollReveal from "scrollreveal";
const About = () => {
    return (
        <>
            <div className="heading purple">
                <h1>About Us</h1>
            </div>
            <div className="about">
                <div className="about-IITK">
                    <div className="img">
                        <img src={img} alt="IITK" />
                    </div>
                    <div className="aboutt">
                        <h1 className="text-center">Indian Institute of Technology Kanpur</h1>
                        <p className="text-justify">IIT Kanpur is a premier government-funded institution for higher technical education in India. Consistently ranked amongst the top 5 engineering institutes in India over past several decades. IIT Kanpur offers courses in sciences, engineering, humanities and management. At IIT Kanpur, there is a strong emphasis on research in all our academic programs and we also have several specialized centers for research into various focus areas. Many of our alumni are leaders in academia and industry around the globe. The sprawling IIT Kanpur campus is located in the industrial city of Kanpur, only a few hours away from New Delhi, the Capital of India.</p>
                    </div>

                </div>

                <div className="about-EE">
                    <div className="aboutt">
                        <h1 className="text-center">Department of Electrical Engineering</h1>
                        <p className="text-center"></p>
                    </div>
                    <div className="img">
                        <img src={img} alt="IITK" />
                    </div>
                </div>
                <div className="about-IITK SBC">
                    <div className="img w-full lg:h-1/2 w-3/5">
                        <img src={sbc} alt="PES SBC" />
                    </div>
                    <div className="aboutt">
                        <h1 className="text-center">PES Student Branch Chapter @IITK</h1>
                        <p className="text-center"></p>
                        <p></p>
                    </div>

                </div>

                <div className="reach-IITK">
                    <div className="aboutt">
                        <h1 className="text-center text-blue-400">How to Reach IITK</h1>
                        
                        <h3>Domestic Train Travel</h3>
					<p>Train service in India is provided by the Indian Railways and is the most popular form of public transportation. Passenger service in the Indian Railways is divided into several classes, namely, Air Conditioned I (First) class, Air Conditioned II (Two Tier) class, Air Conditioned III (3-tier) class, Air Conditioned Chair Car and Sleeper Class. The Rajdhani and the Shatabdi family of trains are widely regarded as the best trains in India. Train reservations can be made at one of the many Railway reservation counters all over India or over the internet using the Indian Railways e-ticket facility. See the Indian Railways website for further details. For those inexperienced in travelling by the Indian Railways, it is recommended that they travel by one of Air Conditioned I, Air Conditioned II or the Air Condit ioned Chair Car (for Shatabdi trains) classes.</p>
                    <h3>How to Reach IIT Kanpur from railway station: </h3>
					<p>IIT Kanpur is located at a distance of about 15 kilometers from the Kanpur Central Railway Station. Please hire Autorickshaw or taxi. Autorickshaw and taxi will be available in Kanpur Railway Station at Exit side of Plateform No. 1. Autorickshaws fare is about Rs. 250-300/- and taxi fare is between Rs 350 to Rs 500 from Central Station to IIT Kanpur Campus. It takes about 40 minutes to drive.</p>
                    </div>
                </div>
            </div>

            

        </>

    )
}

export default About;