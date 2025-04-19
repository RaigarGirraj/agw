import "../stylesheets/registration.css";

const Registration = () => {
    return (
        <div className="containAll flex flex-col">
            <div className="heading">
                <h1> Registration Fee Details </h1>
            </div>
            <div className="ratesTable">
                <table className="fixed_headers">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>With Accomodation</th>
                            <th>Without Accomodation </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IEEE Student Members</td>
                            <td>&#8377; 2500</td>
                            <td>&#8377; 1500</td>
                        </tr>
                        <tr>
                            <td>Non-Student members</td>
                            <td>&#8377; 3000</td>
                            <td>&#8377; 2000</td>
                        </tr>
                        <tr>
                            <td>Faculty/Industry</td>
                            <td>&#8377; 10000 <br /><span class="text-sm font-light">(Only 10 Seats Available)</span></td>
                            <td>&#8377; 5000</td>
                        </tr>
                        <tr>
                            <td>Special Category<br />(Female IEEE Student)</td>
                            <td>&#8377; 1000 <br/> <span class="text-base font-semibold text-red-500 font-light">Limit Reached !!</span></td>
                            <td>&#8377; 500</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="guidelines flex justify-around">
                <div >
                    <ul >
                        <li>
                            <span className="text-red-600 text-xl">*</span>Partial travel support is available for the first 50 outstation student registrations.
                        </li>
                        <li>
                        <span className="text-red-600  text-xl">*</span>Limited seats are available in each category
                        </li>
                        <li>
                        <span className="text-red-600  text-xl">*</span>IITK students and faculty are exempt from the registration fee.
                        </li>
                    </ul></div>
            </div>


            <div className="form">
                <a href="https://forms.gle/Eqoe7Ua85c44UW4e7" target="_blank"> Click Here For Registration</a>
            </div>

            {/* <div className="heading">
        <h1> Registration Instructions </h1>
    </div> */}
            <script src="Registration.js"></script>
        </div>
    )
}

export default Registration;