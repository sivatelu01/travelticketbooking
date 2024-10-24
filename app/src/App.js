import './App.css';
import Homepage from './components/homepage';
import "bootstrap/dist/css/bootstrap.min.css";
import Places from './components/places';
import Bookingform from './components/bookingform';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/places" element={<Places/>}/>
      <Route path="/bookingform" element={<Bookingform/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
