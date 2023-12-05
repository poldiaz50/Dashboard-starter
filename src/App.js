import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import MainDash from './components/maindash/MainDash';
import RightSide from './components/rightside/RightSide';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <RightSide />
          
        </div>
    </div>
  );
}

export default App;
