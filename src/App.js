import './App.css';
import Login from './components/Login/Login'
import New_Company_Registration from './components/New_Company_Registration/New_Company_Registration'
import IndividualRegistration from './components/IndividualRegistration/IndividualRegistration'
import Home from './components/Home'
import{Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Sign in</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="/New_Company_Registration">Register Company</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" to="/IndividualRegistration">Register Individual</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Home">Home</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/New_Company_Registration" element={<New_Company_Registration/>} />
          <Route path="/IndividualRegistration" element={<IndividualRegistration/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
