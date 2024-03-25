import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
