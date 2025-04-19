import Accordion from 'react-bootstrap/Accordion';
import '../stylesheets/sbc.css';
import MemberCard from '../components/MemeberCard';
import Members from '../components/Members';
import gmv from "../images/Members/gmv_sir.webp"

function SBC() {
    return (
        <>
        <div className="currentMemberBox flex flex-col items-center">
            <h1 className='text-center'>Current Members</h1>
            <div className="member-card w-4/5 flex flex-col lg:w-2/5 items-center justify-center rounded-xl  lg:flex-row  shadow-xl p-2 m-8 ">
            <div className="line flex member-card__image h-56 w-56 lg:mr-6 rounded-full border-8" >
                <img src={gmv} alt="Prof"/>
            </div>
            <div className="member-card__info text-center">
                <h2>Dr. Gururaj M. V. <a href='https://www.linkedin.com/in/dr-guru-raj-14430723/?originalSubdomain=in' target='_blank'><i style={{fontSize : '24px', color :'#0a66c2', cursor:'pointer'
                }} class="fa fa-linkedin-square"></i></a></h2>
                <div className="designation font-bold text-xl cyan-400">
                    <h3 className='text-black text-lg leading-4'> Assistant Professor, IIT Kanpur</h3>
                    <span>Branch Chapter Advisor</span>

                    
                </div>
                <p className="mailId m-0">
                <a href="mailto:gururajmv@iitk.ac.in">gururajmv@iitk.ac.in</a>
                </p>
                <button className='hoverBlack m-1 p-1 rounded border-2 border-red-400 text-red w-fit ' > <a href="https://home.iitk.ac.in/~gururajmv/" target='_blank' rel="noreferrer" style={{textDecoration:"None", color:"#ff1981"}}>Homepage</a></button>
            </div>

        </div>
            {/* <MemberCard name = "Dr. Guru Raj" designation = "Assistant Professor, IIT Kanpur" mailId = "gururajmv@iitk.ac.in" img={gmv}/> */}
            <div className="flex flex-col itemscenter lg:grid md:grid w-fit grid-cols-2 justify-items-center">
            {Members.map((member) => <MemberCard name = {member.name} designation={member.designation} mailId = {member.mailId} img={member.img} linkedIn={member.linkedIn}/>)}
            </div>
        </div>

        {/* // <Accordion defaultActiveKey={['0']} > */}
        <Accordion  >
            <Accordion.Item eventKey="1">
                <Accordion.Header>Executive Committee 2023 Members</Accordion.Header>
                <Accordion.Body>


                    <table>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Member</th>
                            <th>Committee/Post</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dr. Alok Ranjan Verma<br />(Assistant Professor, IIT Kanpur)</td>
                            <td>Faculty Advisor</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Atul Kumar Soni</td>
                            <td>Immediate Past<br />Chairperson</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sunil Kumar Maurya</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Shubham Verma</td>
                            <td>Vice-Chairperson</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Diksha Singh</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Jitender Kumar Mahawar</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Swastik Sharma</td>
                            <td>Webmaster</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Mukesh Maurya</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Girraj Raigar</td>
                            <td>Social Media Convenor</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Sayantan Chatterjee</td>
                            <td>Newsletter</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Nivedita Singh</td>
                            <td>Woman in Power</td>
                        </tr>
                    </table>


                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Executive Committee 2022 Members</Accordion.Header>
                <Accordion.Body>

                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Member</th>
                            <th>Committee/Post</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dr. Alok Ranjan Verma<br />(Assistant Professor, IIT Kanpur)</td>
                            <td>Branch Chapter Advisor</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Akhilesh Prakash Gupta</td>
                            <td>Immediate Past Chair</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Atul Kumar Soni</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Viresh Patel</td>
                            <td>Vice Chair</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Kingshuk Chatterjee</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Himanshu Gupta</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Sunil Kumar Maurya</td>
                            <td>Webmaster</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Darshan Prakash Borthakur</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Jitendar Kumar Mahawar</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Aastha Kapoor</td>
                            <td>Social Media</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Ashok Narayan Tripathi</td>
                            <td>Newsletter</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Pratyasha Das</td>
                            <td>Women in Power</td>
                        </tr>
                    </table>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Executive Committee 2021 Members</Accordion.Header>
                <Accordion.Body>
                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Member</th>
                            <th>Committee/Post Name</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dr. Ankush Sharma<br />(Associate Professor, IIT Kanpur)</td>
                            <td>Branch Chapter Advisor</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Akhilesh Prakash Gupta</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ankit Yadav</td>
                            <td>Immediate Past Chair</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Avinash Kumar</td>
                            <td>Vice-chair</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Atul Kumar Soni</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Viresh Patel</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Himanshu Gupta</td>
                            <td>Web Master</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Amrendra Kumar</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Chaman Lal Dewangan</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Arindam Mitra</td>
                            <td>Social Media and Newsletter</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Kingshuk Chatterjee</td>
                            <td>Social Media and Newsletter</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Anamika Tiwari</td>
                            <td>Women in Power</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Aastha Kapoor</td>
                            <td>Women in Power</td>
                        </tr>
                    </table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Executive Committee 2020 Members</Accordion.Header>
                <Accordion.Body>
                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Member</th>
                            <th>Committee/Post Name</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Dr. Ankush Sharma<br />(Associate Professor, IIT Kanpur)</td>
                            <td>Branch Chapter Advisor</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Ankit Yadav</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>J. G. Sreenath</td>
                            <td>Immediate Past Chair</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Akhilesh Prakash Gupta</td>
                            <td>Vice-chair</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Avinash Kumar</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Rajarshi Dutta</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Atul Kumar Soni</td>
                            <td>Web Master</td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>Chaman Lal Dewangan</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>Viresh Patel</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>10.</td>
                            <td>Arindam Mitra</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>11.</td>
                            <td>Aastha Kapoor</td>
                            <td>Social Media Convenor</td>
                        </tr>
                        <tr>
                            <td>12.</td>
                            <td>Asha Sharma</td>
                            <td>WiP Convenor</td>
                        </tr>
                        <tr>
                            <td>13.</td>
                            <td>Gaurav Khare</td>
                            <td>Membership Convenor</td>
                        </tr>
                        <tr>
                            <td>14.</td>
                            <td>Bandi Ravi Kumar</td>
                            <td>Newsletter Convenor</td>
                        </tr>
                    </table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Executive Committee 2019 Members</Accordion.Header>
                <Accordion.Body>
                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Member</th>
                            <th>Committee/Post Name</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Dr. Sandeep Anand<br/>(Assistant Professor, IIT Kanpur)</td>
                            <td>Branch Chapter Advisor</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>J G Sreenath</td>
                            <td>Chairperson</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Vineeth V</td>
                            <td>Immediate Past Chair</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Ankit Yadav</td>
                            <td>Vice-chair</td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Saurabh Kesharwani</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Akhilesh Prakash Gupta</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Priyanka Gangwar</td>
                            <td>Web Master</td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>Bandopant Pawar</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>9.</td>
                            <td>Rajarshi Dutta</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>10.</td>
                            <td>Avinash Kumar</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>11.</td>
                            <td>Aastha Kapoor</td>
                            <td>Program Committee</td>
                        </tr>
                        <tr>
                            <td>12.</td>
                            <td>Asha Sharma</td>
                            <td>WiP Volunteer</td>
                        </tr>
                        <tr>
                            <td>13.</td>
                            <td>P Naga Yasasvi</td>
                            <td>Membership Committee</td>
                        </tr>
                        <tr>
                            <td>14.</td>
                            <td>Arindam Mitra</td>
                            <td>Membership Committee</td>
                        </tr>
                    </table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
        
    );
}

export default SBC;