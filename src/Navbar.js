import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Jobspage from "./Jobspage";
import Contactus from "./Contactus";
import Login from "./Login";
import Registrationform from "./Registrationform";
import Landingpage from "./Landingpage";
const Navbar=()=>{
    return(
        <>
        <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-secondary">
  <div class="container-fluid">
      <div>
    <a class="navbar-brand" href="#"><img src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg" className="img-fluid rounded" style={{width:"100px",height:"100px"}}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <div>
        <li class="nav-item ps-5">
          <Link class="nav-link active fs-5" style={{fontFamily:"verdana"}} aria-current="page" to='/'>Home</Link>
        </li>
        </div>
        <div>
        <li class="nav-item ps-3">
          <Link class="nav-link active fs-5" style={{fontFamily:"verdana"}} to='/contact'>Contact</Link>
        </li>
        </div>
        <div>
        <li class="nav-item ps-3">
          <Link to='/jobs' className='nav-link active fs-5' style={{fontFamily:"verdana"}}>Jobs</Link>
        </li>
        </div>
      </ul>
      <div className="d-flex justify-content-around">
        <Link to='/login' className="btn btn-warning ms-3" style={{fontFamily:"verdana"}}>Login as Trainer</Link>
        <Link to='/institutelogin' className="btn btn-warning ms-3" style={{fontFamily:"verdana"}}>Login as Institute</Link>
        </div>
    </div>
    </div>
</nav>
<Routes>
    <Route path="/" element={<Landingpage/>} />
    <Route path="/contact" element={<Contactus/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Registration" element={<Registrationform/>}/>
    <Route path="/jobs" element={<Jobspage/>}/>
</Routes>
</BrowserRouter>
        </>
    )
}

export default Navbar;