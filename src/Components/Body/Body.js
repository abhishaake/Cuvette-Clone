import {
    LineChart,
    Line,
    LinePointItem,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';
import htmlIcon from "./Assets/html-icon.png";
import trophyIcon from "./Assets/trophy-icon.png";
import checkIcon from "./Assets/check-icon.png";
import npIcon from "./Assets/np-icon.png";
import "./Body.css";
import graphData from "./graphData";
import { useState } from 'react';
import UpdateScoresModal from '../Modals/UpdateScoresModal';
import { useSelector, useDispatch } from 'react-redux'
import {
    getStudentData  } from '../../Reducers/StudentReducer';
import { getModalData, updateModal } from '../../Reducers/ModalReducer';


function Body(){
    const dispatch = useDispatch();
    const data = graphData();
    const studentData = useSelector(getStudentData);
    const modalOpen = useSelector(getModalData);
    console.log("checkkkkk " + modalOpen);

    const text = ()=>{
        if(studentData.percentile<72) return (<><strong>You scored {studentData.percentile}% percentile</strong> which is lower than</>);
        else if(studentData.percentile===72) return (<><strong>You scored {studentData.percentile}% percentile</strong> which is equal to</>);
        else return (<><strong>You scored {studentData.percentile}% percentile</strong> which is higher than</>);
    }
    const CustomizedDot = (props) => {
        const { cx, cy, stroke, payload, value } = props;
      
        // console.log(cx,cy,stroke,payload,value);
        let xvalue = parseInt(payload.name.slice(0,-1));

        if(xvalue===studentData.percentile){
          return (
            <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="white">
              <g transform="translate(4 4)">
                <circle r="4" fill="dodgerblue" />
              </g>
            </svg>
          );
        }
        else if(xvalue>=studentData.percentile-7 && xvalue<=studentData.percentile+7){
            return (
                <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="white">
                  <g transform="translate(4 4)">
                    <circle r="0.8" fill="dodgerblue" />
                  </g>
                </svg>
              );
        }
      
        return null;
      };

    return (<>
        <div className='body-container'>
            {modalOpen && <UpdateScoresModal/> } 

            <div className='body-div'>
                <div className='body-div_div'>
                    <div className='body-logo_div'>
                        <img style={{width:'40px'}} src={htmlIcon}></img>
                        <div style={{}}>
                            <strong>Hypertext Markup Language</strong>
                            <p style={{fontSize:'13px',color:'gray',margin:'4px 0'}}>
                                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021

                            </p>
                        </div>

                    </div>
                   
                    <div>
                        <button className="body-submit_button" onClick={()=>dispatch(updateModal())}>Update</button>
                    </div>
                </div>
            </div>
            <div className='body-div'>
                <div className='body-header' style={{width:'100%',flexDirection:'column',alignItems:'start'}}>
                    <div>
                        <div><strong>Quick Statistics</strong></div>
                    </div>
                    <div className="body-stats_div">
                        <div >
                            <div className='body-icons'><img style={{width:'45%',margin:'auto'}} src={trophyIcon}></img></div>
                            <div style={{margin:'3px 0 3px 20px'}}>
                                <p style={{fontWeight:"1000",fontSize:'20px',margin:'2px 2px 4px'}}><strong>{studentData.rank}</strong></p>
                                <p style={{color:'gray',fontSize:'12px'}}>YOUR RANK</p>    
                            </div>
                            
                        </div>
                        <div >
                            <div className='body-icons'><img style={{width:'55%',margin:'auto'}} src={npIcon}></img></div>
                            <div style={{margin:'3px 0 3px 20px'}}>
                                <p style={{fontWeight:"1000",fontSize:'20px',margin:'2px 2px 4px'}}><strong>{studentData.percentile}%</strong></p>
                                <p style={{color:'gray',fontSize:'12px'}}>PERCENTILE</p>    
                            </div>
                        </div>
                        <div style={{border:0,width:'90%'}}>
                            <div className='body-icons'><img style={{width:'38%',borderRadius:'4px',margin:'auto'}} src={checkIcon}></img></div>
                            <div style={{margin:'3px 0 3px 20px'}}>
                                <p style={{fontWeight:"1000",fontSize:'20px',margin:'2px 2px 4px'}}><strong>{studentData.score>9?studentData.score:'0'+studentData.score} / 15</strong></p>
                                <p style={{color:'gray',fontSize:'12px'}}>CORRECT ANSWERS</p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='body-div'>
                <div className='body-header'>
                    <div style={{width:'70%'}}>
                        <div><strong>Comparison Graph</strong></div>
                        <div style={{margin:'15px 0 0',color:'#5c5c5c'}}> {text()} the average Percentile 72% of all engineers who took the assessment</div>
                    </div>
                    <div style={{margin:'auto 5% auto auto'}}>
                    <div className='body-icons'><svg style={{margin:'auto',backgroundColor:'rgb(210 219 224)'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/> </svg></div>
                    
                    </div>
                </div>
                <div style={{width:'100%'}}>
                    <div className="body-graph">
                        <ResponsiveContainer width="100%" >
                            <LineChart
                            width={700}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 50,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                                <XAxis dataKey="name" interval={19}/>
                                <Tooltip position="top"/>
                                <ReferenceLine x={studentData.percentile+'%'} stroke="aliceblue" strokeWidth={100} />

                                <ReferenceLine x={studentData.percentile+'%'} strokeDasharray="5 5" stroke="dodgerblue" position="start" label={studentData.percentile+'% Percentile'} />
                                <ReferenceLine x="72%" strokeDasharray="5 5" stroke="red" position="start"/>
                                <Line dot={<CustomizedDot />} type="monotone" dataKey="value" stroke="lightgray" strokeWidth={2}/>
                                <Line dot={false} type="monotone" dataKey="value2" stroke="white" strokeWidth={1}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                
            </div>
            

        </div>


    </>);
}

export default Body;