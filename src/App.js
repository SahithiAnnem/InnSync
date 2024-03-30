import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Bookingscreen from './screens/Bookingscreen';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path='/book/:roomid' exact component={Bookingscreen}/>
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
