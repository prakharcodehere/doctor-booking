
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <div className="App">
   
<BrowserRouter>
<Routes>
  <Route  exact path="/" element={<LandingPage/>}/>
  <Route   path="/search/:state/:city" element={<SearchPage/>}/>
</Routes>

</BrowserRouter>

  
    </div>
  );
}

export default App;
