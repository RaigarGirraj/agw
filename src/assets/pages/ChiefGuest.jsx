import cg from "../images/Chief-Guest.jpg"
import frame from "../images/frame.png"
import as from "../images/Anupam Shukla.jpg"
import cg1 from "../images/Cg1.jpg"

function ChiefGuest() {
  return (
    <div className="px-2 lg:px-8 py-16">

        {/* <div className="px-28 absolute">
                <div className="mx-28 my-28">
                    <img src={cg1} alt="" />
                </div>
        </div>
        <div className="px-28 ">
              
        <img src={frame} alt="" />
       </div> */}
      <div id="chief-guest">
        <img src={cg} alt="" />
      </div>
       
    </div>
  )
};

export default ChiefGuest;
