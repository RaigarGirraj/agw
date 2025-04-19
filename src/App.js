import Home from './assets/pages/Home';
import Layout from './assets/pages/Layout';
import About from './assets/pages/About';
import Registration from './assets/pages/Registration';
import NoPage from './assets/pages/NoPage';
import ComingSoon from './assets/pages/ComingSoon';
import SpeakersList from './assets/pages/SpeakersList';
import Committee from './assets/components/Committee';
import EventDetails from './assets/pages/EventDetails';


// import speaker from './assets/js/speaker.js';
import { createBrowserRouter,Routes, Route, createRoutesFromElements, RouterProvider, BrowserRouter} from "react-router-dom";
import Contact from './assets/pages/Contact';
import SBC from './assets/pages/SBC';
import StudentTravelSupport from './assets/pages/StudentTravelSupport';
import Accomodation from './assets/pages/Accomodation';
import Poster from './assets/pages/Poster';
import ChiefGuest from './assets/pages/ChiefGuest';




// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//   )
// )

function App() {

  return (
    <>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/committee" element={<Committee />} />
      <Route path="/sbcMembers" element={<SBC />} />
      <Route path="/chiefGuest" element={<ChiefGuest />} />
      <Route path="/speakers" element={<SpeakersList />} />
      <Route path="/eventDetails" element={<EventDetails />} />
      <Route path ="/posterComp" element={<Poster />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/studentSupport" element={<StudentTravelSupport/>} />
      <Route path="/accomodation" element={<Accomodation/>} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NoPage />} /> 
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
