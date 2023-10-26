import Modal from 'react-modal';
import "./modal.css";
import htmlIcon from "../Body/Assets/html-icon.png"
function UpdateScoresModal(){
    // const [modalIsOpen, setIsOpen] = React.useState(false);

    const styling = {
        overlay: {
            padding:'0'
        },
        content: {
            opacity:'1',
            backgroundColor:'white',
            display:'flex',
            flexDirection:'column',
            gridGap:'30px',
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
            onAfterOpen={''}
            onRequestClose={''}
            style={styling}
            contentLabel="Example Modal"
        >

            <div className='modal-header'>
                <div>Update Scores</div>
                <div style={{marginRight:'20px'}}><img style={{width:'40px'}} src={htmlIcon}></img></div>
                
            </div>
            <div style={{width:'100%',borderBottom:'1px solid rgb(210 219 224)'}}></div>
            <div className="modal-content">
                <div className='modal-content_row'>
                    <div><span>1</span> <p>Update your <strong> rank</strong></p></div>
                    <div><input className='modal-input'></input></div>
                </div>
                <div className='modal-content_row'>
                    <div><span>2</span><p> Update your <strong> percentile</strong></p></div>
                    <div><input className='modal-input'></input></div>
                </div>
                <div className='modal-content_row'>
                    <div><span>3</span> <p>Update your <strong> current score (out of 15)</strong></p></div>
                    <div><input className='modal-input'></input></div>
                </div>
            </div>
            <div style={{width:'100%',borderBottom:'1px solid rgb(210 219 224)'}}></div>
            <div className="modal-footer">
                <div>
                    <button style={{backgroundColor:'white',color:'#3030a6'}}>Cancel</button>
                    <button>Save &#x1F822;</button>
                </div>
            </div>
        </Modal>
    </>);
}

export default UpdateScoresModal;