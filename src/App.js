import logo from './logo.svg';
import './App.css';
import Home from './home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Room from './room';

function App() {
  return (
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/room" element={<Room/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
