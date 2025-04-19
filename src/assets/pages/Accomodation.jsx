import vhp1 from "../images/VH-2_i3.jpeg"
import vhp2 from "../images/VH1.jpg"
import hx from "../images/hall12.avif"
import h9 from "../images/Hall9.jpg"
import rat from "../images/RA_tower.jpg"
import gh1 from "../images/GH1.jpg"

const Accomodation = () => {
    return(
        <>
        <ul className="list-disc">
            <li>
            <p> <span className="text-xl underline decoration-double font-bold">For Faculties/Industry Officials</span> : Accomodation is arranged at the RA Tower, Visitor's Hostel I and II.
                <div className="flex flex-col flex-wrap justify-center lg:flex-row h-fit w-full ">
                    <div className="img1 p-2 m-2"><img src= {vhp1} className="h-64 w-fit"/></div>
                    <div className="img1 p-2 m-2"><img src= {rat} className="h-64 w-fit"/></div><br/>
                    <div className="img2 p-2 m-2    "><img src= {vhp2} className="h-64 "/></div>
                </div>
            </p>
            </li>
            <li>
            <p> <span className="text-xl underline decoration-double font-bold">For Student Participants</span> : Accomodation is arranged at the Hall of Residences at IIT Kanpur<br/> <span className="text-red-700 font-bold  text-xl">*</span><span className="italic font-bold">
            Participants who registered with accommodation will be provided housing at IIT Kanpur from 12:00 PM on 28th November to 9:00 AM on 2nd December. Please plan your travel accordingly to ensure timely arrival for the workshop.
            </span></p>
            <div className="flex flex-col lg:flex-row w-full justify-evenly">
                    <div className="img1 p-2 m-2"><img src= {hx} className="h-64 w-fit"/></div>
                    <div className="img2 p-2 m-2    "><img src= {h9} className="h-64 "/></div>
                    <div className="img3 p-2 m-2"><img src= {gh1} className="h-64 "/></div>
                </div>
            </li>
        </ul>
        
        {/* images */}
        {/* images */}
        </>
        )
}

export default Accomodation;