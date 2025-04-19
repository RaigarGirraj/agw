import { Link } from "react-router-dom";
import Home from "./Home";
const NoPage = () => {
    return (<>    <h1>404 Not Found</h1>
    <p>Go back to <Link to="/" >Home</Link></p>
    </>
  );
  };
  
  export default NoPage;