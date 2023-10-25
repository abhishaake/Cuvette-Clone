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

import "./Body.css";
import graphData from "./graphData"

function Body(){

    const data = graphData();
    const CustomizedDot = (props) => {
        const { cx, cy, stroke, payload, value } = props;
      
        console.log(cx,cy,stroke,payload,value);
        let xvalue = parseInt(payload.name.slice(0,-1));

        if(xvalue===37){
          return (
            <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="white">
              <g transform="translate(4 4)">
                <circle r="4" fill="dodgerblue" />
              </g>
            </svg>
          );
        }
        else if(xvalue>=37-7 && xvalue<=37+7){
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
        <div style={{width:'100%',minHeight:'500px'}}>

            <div style={{height:'200px',background:'aliceblue'}}></div>
            <div className="body-graph">
                <ResponsiveContainer width="100%" >
                    <LineChart
                    width={500}
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
                        <ReferenceLine x="37%" stroke="aliceblue" strokeWidth={100} />

                        <ReferenceLine x="37%" strokeDasharray="5 5" stroke="dodgerblue" position="start" label="37% Percentile" />
                        <ReferenceLine x="72%" strokeDasharray="5 5" stroke="red" position="start" label="72% Percentile" />
                        <Line dot={<CustomizedDot />} type="monotone" dataKey="value" stroke="lightgray" strokeWidth={2}/>
                        <Line dot={false} type="monotone" dataKey="value2" stroke="white" strokeWidth={1}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>


    </>);
}

export default Body;