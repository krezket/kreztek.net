import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from './pages/Homepage';
import './App.css'; 

function App() { 

    return (
        <Router>
            <Routes>

                <Route path='/' element={ <Homepage /> } />

            </Routes>
        </Router>
    )
};

export default App
