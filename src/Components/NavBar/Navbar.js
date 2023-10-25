import logo from "./Assets/cuvette-logo.svg";
import bellIcon from "./Assets/bell-icon.svg";
import logoutIcon from "./Assets/logout-icon.svg";
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
                            <div onClick={()=>setShowDropdown(!showDropdown)} className="navbar-dropdown">
                                <img style={{width:'20px',borderRadius:'50%'}} src={logo}></img>
                                <div style={{fontWeight:'1000', fontSize:'0.9rem',letterSpacing:'0.6px'}}>Abhishek Verma</div>
                                <svg className="icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    {!showDropdown && <polyline points="6 9 12 15 18 9"></polyline>}
                                    {showDropdown && <polyline points="18 15 12 9 6 15"></polyline>}
                                </svg>
                                {showDropdown &&
                                    <div className="dropdown-list">
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'start',color:'#566474'}}>
                                            <a>
                                            <svg style={{width:'17px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                                LogOut</a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </>);
}

export default Navbar