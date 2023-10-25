import "./Analysis.css";
import targetIcon from "./Assets/target-icon.jpg";
import { Chart } from "react-google-charts";

function Analysis(){
        const data = [
                ["Q", "M"],
                ["Correct", 7],
                ["Incorrect", 8] 
              ];

        const options = {
                pieHole: 0.62,
                legend: "none",
                is3D: false,
                pieSliceText: "none",
                slices: {
                        0: { color: "dodgerblue" },
                        1: { color: "aliceblue" },
                }
              };

        return (<>
        <div className="analysis-container">
            <div className="analysis-div">
                <div style={{marginBottom:'20px',fontWeight:'bold',fontSize:'14px'}}>Syllabus wise Analysis</div>
                <div>
                    <div className="analysis-elements">HTML Tools, Forms, History
                        <div style={{color:'dodgerblue'}}>
                                <div style={{backgroundColor:'aliceblue'}}>
                                        <div style={{width:'80%',backgroundColor:'dodgerblue'}}></div>
                                </div>
                                80%
                        </div>
                        
                    </div>
                    <div className="analysis-elements">Tags & References in HTML
                        <div style={{color:'orange'}}>
                                <div style={{backgroundColor:'antiquewhite'}}>
                                        <div style={{width:'60%',backgroundColor:'orange'}}></div>
                                </div>
                                60%
                        </div>
                        
                    </div>
                    <div className="analysis-elements">Tables & CSS Basics
                        <div style={{color:'red'}}>
                                <div style={{backgroundColor:'rgb(255 228 232)'}}>
                                        <div style={{width:'24%',backgroundColor:'red'}}></div>
                                </div>
                                24%
                        </div>
                        
                    </div>
                    <div className="analysis-elements">Tables & CSS Basics
                        <div style={{color:'limegreen'}}>
                                <div style={{backgroundColor:'#d5fed7'}}>
                                        <div style={{width:'96%',backgroundColor:'limegreen'}}></div>
                                </div>
                                96%
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="analysis-div" style={{height:'300px'}}>
                <div className="heading">
                        Question Analysis
                        <div style={{color:'dodgerblue'}}> 07 / 15 </div>
                </div>
                <div style={{fontSize:'13px'}}>
                         <p><strong>You scored 7 question correct out of 15.</strong> However it still needs some improvements.</p> 
                    <div className="pieChart">
                    <img className="centerImage" src={targetIcon}></img>
                    <Chart
                        chartType="PieChart"
                        width="250px"
                        height="250px"
                        data={data}
                        options={options}
                        >       
                        </Chart>
                    </div>
                </div>
            </div>
        </div> 
        </>);
}

export default Analysis;