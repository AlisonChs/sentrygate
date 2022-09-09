import "./style.css";
import { Link } from "react-router-dom";
import { Avatar, Skeleton } from "@mui/material";
import { useNavigate } from "react-router";

export default function TopBar (props) {  

  const navigate = useNavigate()

  function goProfile() {
    navigate('/profile')
  }

  return (
      <div className="topBar">
        <div className="logo">
          <Link to="/">
            <h1><Skeleton width={300} height={70}/>
              {/* props.PageTitle} <span>{props.PageSpan </span>*/}
            </h1>
          </Link>
        </div>
        <div className="topics">
            { /* <Avatar alt='Victor' onClick={goProfile} src="https://github.com/Victor-HM.png" sx={{ width: 30, height: 30 }} /> */}
            <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />

       
        </div>
      </div>
  );
}
