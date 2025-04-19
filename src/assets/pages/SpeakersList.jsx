import Speakers from '../components/Speakers.jsx';
import HoverCard from '../components/HoverCard.jsx';
import makps from "../images/speakers/MAKP_singh.jpg"
import Panelist from '../components/Panelist.jsx';

import speaker from '../js/speaker.js';
import "../stylesheets/speaker.css"
const SpeakersList = () => {
let bio = "Dr. M.A.K.P.Singh, Member (Hydro), CEA and Chief Information Security Officer, Ministry of Power, is an Electrical Engineering Graduate from IIT Kanpur and have a MBA degree from IIT Delhi. Prior to joining Power Sector, he had worked for Schlumberger, Geo Services in Oil Industry and in Automobile leader Maruti Udyog Ltd. He joined Central Electricity Authority in 1992.  While in CEA he has worked for 12 years in Regional Power Committee RPC (Northern and Western Grid) earlier known as Regional Electricity Board.  He has 3 years’ experience of managing Northern Regional load dispatch center as Member Secretary, NRPC, New Delhi & WRPC Mumbai. In CEA, he had worked in other divisions like Fuel Management, System Planning & Project Appraisal, APDRP Cell before proceeding for deputation in NTPC in 2003. He has worked for 3 years in operation of Combined Cycle Gas Power Plant Kawas of NTPC.  He has worked for 5 years as Electrical Inspector in North Eastern Region (all seven sister states).  As Electrical Inspector he had the inspected all electrical installations of Government utilities like NHPC, NEEPCO, POWERGRID besides other industries. As Chief Engineer (IT & CS) he looked after the National Power Portal, Cyber Security and worked upon various Committee and Groups constituted for ensuring cyber security in Power Sector. He has also worked for 5 years in Hydro Sector for 5 years as Member (Power), Narmada Control Authority overseeing the O&M of 1450 MW Sardar Sarovar Hydro Plant and Dam.  He is very6 well versed with the crisis that may arise in the hydro as well as thermal plants and have a very good knowledge of the critical information infrastructure in power sector."
    return (<>
        <div className="keySpeaker flex justify-center ">

            <div className="member-card text-white  w-4/5 flex flex-col lg:flex-row bg-gradient-to-br from-purple-400 to-blue-100  lg:w-3/5 items-center justify-evenly rounded-xl  lg:flex-col  shadow-xl m-8 ">
                
                <div className="title text-pink-500 font-bold text-center py-3 w-full text-4xl mb-4 rounded">
                    Keynote Speaker
                </div>
                
                <div className="content flex p-2 flex-col lg:flex-row w-full justify-around items-center">
                    <div className="line flex  member-card__image h- w-56 lg:mr-6 mb-3 "  >
                        <img src={makps} alt="Dr. M.A.K.P. Singh" className='rounded'/>

                    </div>
                    <div className="member-card__info text-center align-middle">
                        <h2>Shri M.A.K.P. Singh </h2>
                        <div className="designation  text-xl  align-middle">
                            <h3 className=' text-lg leading-6'>Chief Engineer, Central Electricity. Authority (CEA) <br/>Visiting Prof IIT Kanpur</h3>
                            {/* <p>Department of Electrical Engineering <br/>Indian Institute of Technology Kanpur</p> */}


                        </div>
                        <button className='hoverBlack m-1 px-3 py-1 rounded border-2 border-purple-500 text-red w-fit text-purple-500' onClick ={() => {
            document.querySelector('.infoBox').style.display = 'block';
            document.querySelector('.layer').classList.toggle('activeL');
            // document.querySelector('.infoBox').setAttribute('id', `${id}`);
            document.querySelector('.popupContent').innerHTML = `
            <h2>About Speaker</h2>
            <p>${bio}</p>`;

          }} > About</button>
                    </div>
                </div>

            </div>
        </div>
        <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full">Technical Speakers</h2>
            </div>
        <div className="speakers">

            {Speakers.map((speaker, index) => { return (<HoverCard Data={speaker} />); })}
        </div>
        <div className="infoBox w-52 h-fit fixed text-lg">
            <div className="popupContent">
                <h2>About Speaker</h2>
            </div>
            <button className='popupClose' onClick={() => {
                document.querySelector('.layer').classList.remove('activeL');
                document.querySelector('.infoBox').removeAttribute('id');
                document.querySelector('.popupContent').innerHTML = '';
                document.querySelector('.infoBox').style.display = 'none';
            }}>&#10006;</button>

        </div>
        <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full">Panel Discussion </h2>


            </div>
            <div className="speakers">
                {
                Panelist.panelist.map((speaker, index) => { 
                    return (<HoverCard Data={speaker} />);})}
                {
                    
                }
                
                </div>

                {/* <div className="mb-8 mt-5 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-l from-blue-500 to-red-100 p-2 w-full">Industry Super Session </h2>


            </div>
            <div className="speakers">
                {
                Panelist.superSession.map((speaker, index) => { 
                    return (<HoverCard Data={speaker} display = 'none' />);})}
                {
                    
                }
                
                </div> */}
        <div className="layer">

        </div>
    </>)
}

export default SpeakersList;