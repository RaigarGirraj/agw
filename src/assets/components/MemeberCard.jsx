
import "../stylesheets/memberCard.css";
function MemberCard({name, designation, mailId, img, linkedIn}) {
    return (
        <div className="member-card flex flex-col w-4/5 lg:h-48 items-center justify-between rounded-xl  lg:flex-row shadow-xl p-3 m-8 ">
            <div className="line flex member-card__image h-44 lg:w-44 lg:mr-6 rounded-full border-8 overflow-hidden" >
                <img src={img} alt={name+" image"}/>
            </div>
            <div className="member-card__info text-center">
                <h3>{name} <a href = {linkedIn} target="_blank"><i style={{fontSize : '24px', color :'#0a66c2', cursor: 'pointer'
                }} class="fa fa-linkedin-square" ></i></a></h3>
                <div className="designation font-bold text-xl cyan-400">
                    {designation}
                </div>
                <p className="mailId">
                    <a href = {"mailto:" + mailId}>{mailId}</a>
                </p>
            </div>

        </div>
    )
}

export default MemberCard;