import logo from "./Assets/cuvette-logo.svg";
import bellIcon from "./Assets/bell-icon.svg";
import "./Navbar.css";
import { useState } from "react";

function Navbar(){

    const [showDropdown, setShowDropdown] = useState(false);

    return (<>
        <div className="navbar-container"> 
            <div className="navbar-div">
                <div className="navbar-logo_div">
                    <img className="navbar-logo" src={logo}></img>
                </div>

                <div className="navbar-info_div">
                    <ul className="navbar-info_ul">
                        <li>
                            <div className="navbar-noti" style={{minWidth:'fit-content'}}>
                                <img style={{width:'20px'}} src={bellIcon}></img>
                            </div>
                           
                        </li>
                        <li>
                            <div className="navbar-dropdown">
                                <img style={{width:'20px',borderRadius:'50%'}} src={logo}></img>
                                <div style={{fontWeight:'1000', fontSize:'0.9rem',letterSpacing:'0.6px'}}>Abhishek Verma</div>
                                <svg className="icon" onClick={()=>setShowDropdown(!showDropdown)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    {!showDropdown && <polyline points="6 9 12 15 18 9"></polyline>}
                                    {showDropdown && <polyline points="18 15 12 9 6 15"></polyline>}
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </>);
}

export default Navbar