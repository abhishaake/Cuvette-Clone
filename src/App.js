import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Body from './Components/Body/Body';
import Analysis from './Components/Sidebars/Analysis';

function App() {
  return (
    <>
      <Navbar/>
      <Dashboard/>
      <Body/>
      <Analysis/>
    
    </>
  );
}

export default App;
