import { Routes, Route, Link } from "react-router-dom";
import Certificate from "./Certificate";
import Grade from "./Grade";
import Hostel from "./Hostel";
import Transport from "./Transport";
import Fee from "./Fee";
import Notfound from "./Notfound";
import Attendence from "./Attendence";
import Tutorial from "./Tutorial";
import Internals from "./Internals";
import Home from "./Home";
import "./nav.css"
import Profile from "./Profile";
import Courses from "./Courses";
import Timetable1 from "./Timetable1";
import Attendence2 from "./Attendence2";
export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <button><Link to="/nav"><h3>Home</h3></Link></button>
        <button><Link to="/nav/abt"><h3>Profile</h3></Link></button>
        <button><Link to="/nav/grd"><h3>CGPA</h3></Link></button>
        <button><Link to="/nav/host"><h3>Hostel</h3></Link></button>
        <button><Link to="/nav/cer"><h3>Certificate</h3></Link></button>
        <button><Link to="/nav/tran"><h3>Transport</h3></Link></button>
        <button><Link to="/nav/fac"><h3>Courses</h3></Link></button>
        <button><Link to="/nav/fee"><h3>Fee</h3></Link></button>
        <button><Link to="/nav/tut"><h3>Tutorials</h3></Link></button>
        <button><Link to="/nav/att"><h3>Attendence</h3></Link></button>
        <button><Link to="/nav/int"><h3>Internals</h3></Link></button>
        <button><Link to="/nav/timt"><h3>Timetable</h3></Link></button>
      </nav>
      <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="abt" element={<Profile />} />
          <Route path="grd" element={<Grade />} />
          <Route path="host" element={<Hostel />} />
          <Route path="cer" element={<Certificate />} />
          <Route path="tran" element={<Transport />} />
          <Route path="fac" element={<Courses />} />
          <Route path="fee" element={<Fee />} />
          <Route path="tut" element={<Tutorial />} />
          <Route path="att" element={<Attendence2 />} />
          <Route path="int" element={<Internals />} />
           <Route path="timt" element={<Timetable1 />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  )
}