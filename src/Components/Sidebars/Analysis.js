import "./Analysis.css";
import tempImg from "../NavBar/Assets/bell-icon.svg";

function Analysis(){

        return (<>
        <div className="analysis-container">
            <div className="analysis-div">
                <div style={{marginBottom:'20px',fontWeight:'bold',fontSize:'14px'}}>Syllabus wise Analysis</div>
                <div>
                    <div className="analysis-elements">HTML Tools, Forms, History
                        <div style={{backgroundColor:'aliceblue'}}>
                            <div style={{width:'80%',backgroundColor:'dodgerblue'}}></div>
                        </div>
                    </div>
                    <div className="analysis-elements">Tags & References in HTML
                        <div style={{backgroundColor:'antiquewhite'}}>
                            <div style={{width:'80%',backgroundColor:'orange'}}></div>
                        </div>
                    </div>
                    <div className="analysis-elements">Tables & CSS Basics
                        <div style={{backgroundColor:'rgb(255 228 232)'}}>
                            <div style={{width:'24%',backgroundColor:'red'}}></div>
                        </div>
                    </div>
                    <div className="analysis-elements">Tables & CSS Basics
                        <div style={{backgroundColor:'#d5fed7'}}>
                            <div style={{width:'96%',backgroundColor:'limegreen'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="analysis-div">
                <div style={{marginBottom:'20px',fontWeight:'bold'}}>Question Analysis</div>
                <div style={{fontSize:'13px'}}>
                         You scored 7 question correct out of 15. However it still needs some improvements.
                    <div>
                        
                        <img style={{width:'140px',margin:'10px'}} src={tempImg}></img>
                    </div>
                </div>
            </div>
        </div> 
        </>);
}

export default Analysis;