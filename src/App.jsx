import { Payments } from './Payments';
import './App.css'
import { Dashboard } from './Dashboard';
import Login from './Login';
import Cards from './components/Cards';
import Home from './components/Home'
import Invest from "./components/Invest";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import More from './More';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/cards" element={<Cards />}></Route>
          <Route path="/dashboard/payments" element={<Payments />}></Route>
          <Route path="/dashboard/invest" element={<Invest />}></Route>
          <Route path="/dashboard/more" element={<More />}></Route>
        </Routes>
        {/* <div className="flex pt-11 fixed text-white">
          <div className="pl-[150px]">
            <Link to="/">AvBank</Link>
          </div>
          <div className="flex">
            <div className="pl-[15em]">
              <span className="pr-10">Why Us</span>
              <span className="pr-10">Services</span>
              <span className="pr-10">Our Process</span>
              <span className="pr-10">Payment</span>
              <span className="pr-10">FAQs</span>
              <a className="rounded-full ml-[200px] px-5 py-2 border-2 border-[#2BB32A] w-2 h-2">
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </a>
            </div>
          </div>
        </div> */}
      </Router>
    </>
  );
}

export default App
