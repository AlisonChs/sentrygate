import "./style.css";
import { Link } from "react-router-dom";

export default function BottomBar () {  

  return (
      <div className="bottomBar">
        <div className="logo">
          <Link to="/">
            <h1>
            </h1>
          </Link>
        </div>
    
      </div>
  );
}
