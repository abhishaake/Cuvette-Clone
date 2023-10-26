import Modal from 'react-modal';
import "./modal.css";
import { useState } from 'react';
import htmlIcon from "../Body/Assets/html-icon.png"
import { useSelector, useDispatch } from 'react-redux'
import {
    getStudentData,
    update
  } from '../../Reducers/StudentReducer';
import {updateModal} from '../../Reducers/ModalReducer';

function UpdateScoresModal(){

    const data = useSelector(getStudentData);
    const [studentData,setStudentData] = useState(data);
    
    const rankChange = (e) =>{
        let val = e.target.value;
        if(val>0 && val<100000){
            setStudentData({...studentData,rank:val});
        }
    }
    const percentileChange = (e) =>{
        let val = e.target.value;
        if(val>=0 && val<=100){
            setStudentData({...studentData,percentile:val});
        }
    }
    const scoreChange = (e) => {
        let val = e.target.value;
        if(val>=0 && val<=15){
            setStudentData({...studentData,score:val});
        }
    }

    const dispatch = useDispatch();

    const styling = {
        overlay: {
            backgroundColor:'rgba(0, 0, 0, 0.75)',
            padding:'0'
        },
        content: {
            opacity:'1',
            backgroundColor:'white',
            margin: '5% auto',
            minWidth:'480px',
            minHeight:'500px',
            width:'55vw',
            height:'60vh',
            padding:'20px',
            borderRadius:'12px',
            overflow:'hidden'
        }
    };

    return (<>
        <Modal
            isOpen={true}
            style={styling}
            contentLabel="Example Modal"
        >
            <div className='modal-container'>
                <div className='modal-header'>
                    <div>Update Scores</div>
                    <div style={{marginRight:'20px'}}><img style={{width:'40px'}} src={htmlIcon}></img></div>
                    
                </div>
                <div style={{width:'100%',borderBottom:'1px solid rgb(210 219 224)'}}></div>
                <div className="modal-content">
                    <div className='modal-content_row'>
                        <div><span>1</span> <p>Update your <strong> rank</strong></p></div>
                        <div><input className='modal-input' value={studentData.rank} onChange={(e)=>rankChange(e)}></input></div>
                    </div>
                    <div className='modal-content_row'>
                        <div><span>2</span><p> Update your <strong> percentile</strong></p></div>
                        <div><input className='modal-input' value={studentData.percentile} onChange={(e)=>percentileChange(e)}></input></div>
                    </div>
                    <div className='modal-content_row'>
                        <div><span>3</span> <p>Update your <strong> current score (out of 15)</strong></p></div>
                        <div><input className='modal-input' value={studentData.score} onChange={(e)=>scoreChange(e)}></input></div>
                    </div>
                </div>
                <div style={{width:'100%',borderBottom:'1px solid rgb(210 219 224)'}}></div>
                <div className="modal-footer">
                    <div>
                        <button style={{backgroundColor:'white',color:'#3030a6'}} onClick={()=>dispatch(updateModal())}>Cancel</button>
                        <button onClick={()=>{dispatch(update(studentData));dispatch(updateModal());}}>Save &#x1F822;</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>);
}

export default UpdateScoresModal;