import d1 from "../images/day1.jpg"
import d2 from "../images/day2.jpg"
import d3 from "../images/day3.jpg"
import fv1 from "../images/FV1.png"
import fv2 from "../images/FV2.png"
import fv3 from "../images/FV3.png"
import fv4 from "../images/FV4.png"
import fv5 from "../images/FV5.png"
import fv6 from "../images/FV6.png"

const EventDetails = () => {
    return (
        <div className="Schedule  align-center">
            <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full"> Day 1 </h2>
            </div>
            <div className="flex justify-center">
                <img src= {d1}  className = "h-4/5 w-11/12 md:2/5 lg:w-2/5"alt ='DAY 1'/>
            </div>
            <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full"> Day 2 </h2>
            </div>
            <div className="flex justify-center ">
                <img src= {d2} className = "h-4/5 w-11/12 md:2/5 lg:w-2/5"alt ='DAY 2'/>
            </div>
            <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full"> Day 3 </h2>
            </div>
            <div className="flex justify-center">
                <img src= {d3} className="h-4/5 w-11/12 md:2/5 lg:w-2/5" alt ='DAY 3'/>
            </div>

            <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full"> Field Visit </h2>
            </div>
            <div className="flex flex-wrap justify-center  gap-16 ">
                    <img className="w-2/5 " src={fv5} alt="" />
                
                
                    <img className="w-2/5 " src={fv1} alt="" />
            
                
                    <img className="w-2/5" src={fv2} alt="" />
                
                
                    <img className="w-2/5" src={fv3} alt="" />
                
                    <img className="w-2/5" src={fv4} alt="" />
                
                    <img className="w-2/5" src={fv6} alt="" />
                
                
            </div>

        </div>
    );
}
export default EventDetails;