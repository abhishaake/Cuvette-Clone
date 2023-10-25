import "./Dashboard.css";


function Dashboard(){

    return (<>
        <div className="dashboard-container">
            <div className="dashboard-div">
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        Dashboard
                </div>
                <div className="dashboard-activeTab">
                <svg style={{width:'18px',height:'22px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="6" height="6" fill="none"/><circle cx="128" cy="96" r="80" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"/><polyline points="176 160 176 240 128 216 80 240 80 160" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"/></svg>
                    Skill Test</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16"> <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/> </svg>
                    Internships</div>
            </div>
        </div>
    </>);
}

export default Dashboard;