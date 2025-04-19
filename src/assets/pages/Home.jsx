import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import Timer from '../components/Timer';
import SponsorsImg from '../components/SponsorsImg';
import poster from "../files/poster2.jpg"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Home = () => {

  const eventDate = new Date('2024-11-29T08:30:00Z');
  return (
    <>

      <div className="announcement">
        <a href="/registration">
          <h1> Registration Ended.</h1>

        </a>
      </div>

      <div className="carouselplay">
        <Carousel>
          <Carousel.Item interval={4000}>
            <img src={slide1} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img src={slide2} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img src={slide3} alt=""/>
          </Carousel.Item>
        </Carousel>
        

        {/*<div class="carousel slide"><div class="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1" aria-current="true" class="active"></button><button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"></button><button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"></button></div><div class="carousel-inner"><div interval="5000" class="active carousel-item"><img src="/pera-react-final/static/media/slide1.762c2c3e5c60cf51cff3.jpg" alt=""></div><div interval="5000" class="carousel-item"><img src="/pera-react-final/static/media/slide2.2faacea92ce0fa7b247c.jpg" alt=""></div><div interval="5000" class="carousel-item"><img src="/pera-react-final/static/media/slide3.9daa59e750abcd0a69f5.jpg" alt=""></div></div><a class="carousel-control-prev" role="button" tabindex="0" href="#" style="
    background: black;
    opacity: 1;
"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a></div> */}
        <div className="cap ">
          <h1 className='text-lg lg:text-4xl'>
            Power Engineering Research and Applications 2024
          </h1>
          <h5 className='text-sm lg:text-xl'>PERA 2024</h5>
          
          <h4 className='text-blue-400 font-bold text-base lg:text-2xl'>"Empowering a Sustainable Future: Resilient
          Renewable Energy and Electric Mobility"</h4>
          <p className='text-sm lg:text-xl'>29 November - 1 December 2024</p>
          <h5 className='text-base lg:text-xl'>Indian Institute of Technology Kanpur, India</h5>         
          <a href={poster} target='_blank' rel='noreferrer' className='text-sm lg:text-base'>Brochure</a>
        </div>
      </div>
      <div className="info w-4/5  lg:w-2/5 h-fit fixed text-lg">
            <div className="popupContent">
                <h2 className='underline purple'>Important Announcement</h2>
                <p>
                Any requests for refund will not be entertained as all the preparations leading to the event are finalised, and all the arrangements have been made. </p>
            </div>
            
            <button className='popupClose' onClick={() => {
                document.querySelector('.layer').classList.remove('activeL');
                document.querySelector('.info').removeAttribute('id');
                document.querySelector('.popupContent').innerHTML = '';
                document.querySelector('.info').style.display = 'none';
            }}>&#10006;</button>

        </div>
        <div className="layer activeL"></div>


      <VerticalTimeline>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="15 Aug 2024"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

>
  <h3 className="vertical-timeline-element-title">Registration Begins</h3>
</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="15-Oct-2024"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' , }}

>
  <h3 className="vertical-timeline-element-title">Registration Closes</h3>

</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="29 Nov 2024"
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

>
  <h3 className="vertical-timeline-element-title">Workshop Begins</h3>
</VerticalTimelineElement>
{/* <VerticalTimelineElement
className="vertical-timeline-element--education"
date="dd/mm/yyyy"
iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
<p>
Strategy, Social Media
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"
date="dd/mm/yyyy"
iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
<h4 className="vertical-timeline-element-subtitle">Certification</h4>
<p>
Creative Direction, User Experience, Visual Design
</p>
</VerticalTimelineElement> */}
{/* <VerticalTimelineElement
className="vertical-timeline-element--education"
date="dd/mm/yyyy"
iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

>
<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
<p>
Creative Direction, Visual Design
</p>
</VerticalTimelineElement> */}

</VerticalTimeline>

      {/* PERA Sponsors */}

      <div className="pera-sponsors">
        <span className="heading purple">
          <h1>PERA 2024 Sponsors</h1>
        </span>
        <div className="skills" id="skills">
          {
            SponsorsImg.map((sponsor) => {
              if(sponsor.id == "10" || sponsor.id == "11"){
                return (
                  <div className="card" key={sponsor.id}>
                    <img src={sponsor.image} className='w-2/5' alt="" />
                  </div>
                )
              } 
              else{
                return(
                <div className="card" key={sponsor.id}>
                  <img src={sponsor.image} alt="" />
                </div>
              )}
            }
            )}


        </div>
      </div>
      <div className="about-pera">
        <span className="heading purple">
          <h1>About PERA</h1>
        </span>
        <span className="sub-heading">
          FLAGSHIP EVENT OF IEEE PES SBC IIT KANPUR.
        </span>
        <p>
          The focus on clean energy has led to a shift towards the need for a sustainable and resilient power system. The
          sustainable power system has its own challenges because of the intermittencies in renewable energy sources. It
          causes various power system dynamics and transients, which affect the system's performance. Such unplanned
          scenarios need to be addressed for a robust power system operation. Further, resilient power<span className=" more hidden lg:inline md:inline"> systems should be
            able to restrict the extent, severity, and duration of system degradation following any extreme events.
            Thus, sustainable and resilient power systems present several opportunities and challenges, such as their design
            and development, control and protection, stability and reliability, operation and planning, from economic, social,
            and environmental perspectives.
            PERA24 {"(offline event)"} covers the state of the art of several present-day and future challenges and prospects related to grid
            resiliency. This workshop includes expert talks, panel discussions, and demonstrations of various simulators and
            tools from multiple reputed institutes and industries. We invite faculty members, practicing engineers, and
            students from across the globe to participate and benefit from this workshop.  </span><span className="see-more text-red-500 text-xl inline lg:hidden md:hidden" onClick={() => {
              if (document.querySelector('.see-more').innerHTML === '...See More') {
                document.querySelector('.more').style.display = 'inline';
                document.querySelector('.see-more').innerHTML = 'See Less'
              } else {
                document.querySelector('.more').style.display = 'none';
                document.querySelector('.see-more').innerHTML = '...See More'
              }

            }} >...See More</span>
        </p>
        {/* <!-- <iframe height="480" width="500" src="https://www.youtube.com/embed/PL3Odw-k8W4 ">
    </iframe> --> */}
      </div>
      <div className="about-pera">
        <span className="heading purple">
          <h1>About IIT Kanpur</h1>
        </span>

        <p>
          <b> Indian Institute of Technology Kanpur </b> is a public institute of technology located in Kanpur, Uttar
          Pradesh, India. It was declared an Institute of National Importance by the Government of India under the
          Institutes of Technology Act. The institute has around 6478 students with 3938 undergraduate students and 2540
          postgraduate students and about 500 research associates.
        </p>
        <p>
          <span className="sub-heading">
            Department of Electrical Engineering
          </span>
          The Electrical Engineering Department was one of the first few departments with which IIT Kanpur started in 1960.
          Electrical Engineering Department is currently the largest
          multidisciplinary department at IIT Kanpur and covers practically all sub-disciplines under Electrical Power,
          Electronics and Communications.

          The vision of the EE department is<span className="more hidden lg:block md:block"> to create talented and socially responsible engineers to make a better India
            and, in turn, a better world. It will strive to become a hub of research excellence in cutting edge, state of the
            art, and contemporary areas of national and international relevance. The department also envisions itself as a
            center of excellence in teaching to create a well-educated, technically competent, and socially responsible
            workforce for meaningful, inclusive, and overall societal development of India and the world.</span><span className="see-more text-red-500 text-xl inline lg:hidden md:hidden" onClick={() => {
              if (document.querySelectorAll('.see-more')[1].innerHTML === '...See More') {
                document.querySelectorAll('.more')[1].style.display = 'inline';
                document.querySelectorAll('.see-more')[1].innerHTML = 'See Less'
              } else {
                document.querySelectorAll('.more')[1].style.display = 'none';
                document.querySelectorAll('.see-more')[1].innerHTML = '...See More'
              }

            }} >...See More</span>
        </p>
      </div>

      
      <div className="countdown">
        <Timer eventDate={eventDate} />
      </div>


    </>
  )
}

export default Home;