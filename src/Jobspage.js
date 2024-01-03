const Jobspage=()=>{
    return(
        <>
         <div className="bg-body-tertiary">
    <div className="container-fluid">
    <div className="row p-3">
      <div className="col-12">
        <div className="d-flex justify-content-center">
        <input type="text" className="form-control" style={{width:"800px",height:"40px"}} placeholder="Search for the Jobs.."/>
      <button className="btn btn-warning fw-bold ms-2">Search</button>
      </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-2">
        <select className="form-control">
          <option>Job Type</option>
          <option>Teacher/Trainer</option>
          <option>Skilled Trainers</option>
          <option>Religious Trainers</option>
        </select>
      </div>
      <div className="col-2">
        <select className="form-control">
          <option>Institution Type</option>
          <option>Coaching/Institute</option>
          <option>School</option>
          <option>University</option>
        </select>
      </div>
      <div className="col-2">
        <select className="form-control">
          <option>SubCategory<i class="fa-solid fa-arrow-down"></i></option>
          <option>Primary Education</option>
          <option>Secondary Education</option>
          <option>IIT</option>
        </select>
      </div>
      <div className="col-2">
        <select className="form-control">
          <option>Work Mode</option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Hybrid</option>
        </select>
      </div>
      <div className="col-1">
        <select className="form-control">
          <option>Role</option>
          <option>Teacher/Trainer</option>
          <option>Skilled Trainer</option>
          <option>Religious Trainer</option>
        </select>
      </div>
      <div className="col-1">
        <select className="form-control">
          <option>Subject</option>
          <option>Mathematics</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Social</option>
          <option>Physics</option>
          <option>Chemistry</option>
          <option>Other</option>
        </select>
      </div>
      <div className="col-1">
        <button className="btn btn-success">Apply</button>
      </div>
      <div className="col-1">
        <button className="btn btn-danger">reset</button>
      </div>
    </div>
    {/* Cards and searched profiles appear here as cards*/}
    <div className="row mt-5 pb-3">  
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div class="card bg-body-secondary">
    <div class="card-body">
      <div className="d-flex justify-content-between">
        <div>
    <h5 class="card-title"><i class="fa-solid fa-building-columns"></i>  Institute Name</h5>
    </div>
    <div>
    <button className="btn btn-warning fw-bold"><i class="fa-solid fa-circle-check"></i> Apply</button>
    <button className="btn btn-secondary ms-2"><i class="fa-solid fa-bookmark"></i>  Save</button>
    </div>
    </div>
    <h5 class="card-title">Job Title</h5>
    <div className="p-2">
    <span className="ms-2"><i class="fa-solid fa-location-dot text-warning"></i>  Location</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-clock text-warning"></i>  Experience</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-indian-rupee-sign text-warning"></i>  Salary</span>
    </div>
    <div className="p-2">
      <span className="ms-2"><i class="fa-solid fa-graduation-cap text-warning"></i>  Education</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-calendar-check text-warning"></i>  Notice Period</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-suitcase text-warning"></i>  WorkType</span>
    </div>
    <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div class="card bg-body-secondary">
    <div class="card-body">
      <div className="d-flex justify-content-between">
        <div>
    <h5 class="card-title"><i class="fa-solid fa-building-columns"></i>  Institute Name</h5>
    </div>
    <div>
    <button className="btn btn-warning fw-bold"><i class="fa-solid fa-circle-check"></i> Apply</button>
    <button className="btn btn-secondary ms-2"><i class="fa-solid fa-bookmark"></i>  Save</button>
    </div>
    </div>
    <h5 class="card-title">Job Title</h5>
    <div className="p-2">
    <span className="ms-2"><i class="fa-solid fa-location-dot text-warning"></i>  Location</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-clock text-warning"></i>  Experience</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-indian-rupee-sign text-warning"></i>  Salary</span>
    </div>
    <div className="p-2">
      <span className="ms-2"><i class="fa-solid fa-graduation-cap text-warning"></i>  Education</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-calendar-check text-warning"></i>  Notice Period</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-suitcase text-warning"></i>  WorkType</span>
    </div>
    <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div class="card bg-body-secondary">
    <div class="card-body">
      <div className="d-flex justify-content-between">
        <div>
    <h5 class="card-title"><i class="fa-solid fa-building-columns"></i>  Institute Name</h5>
    </div>
    <div>
    <button className="btn btn-warning fw-bold"><i class="fa-solid fa-circle-check"></i> Apply</button>
    <button className="btn btn-secondary ms-2"><i class="fa-solid fa-bookmark"></i>  Save</button>
    </div>
    </div>
    <h5 class="card-title">Job Title</h5>
    <div className="p-2">
    <span className="ms-2"><i class="fa-solid fa-location-dot text-warning"></i>  Location</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-clock text-warning"></i>  Experience</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-indian-rupee-sign text-warning"></i>  Salary</span>
    </div>
    <div className="p-2">
      <span className="ms-2"><i class="fa-solid fa-graduation-cap text-warning"></i>  Education</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-calendar-check text-warning"></i>  Notice Period</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-suitcase text-warning"></i>  WorkType</span>
    </div>
    <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
    </div>
    <div className="row mt-5 pb-3">  
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div class="card bg-body-secondary">
    <div class="card-body">
      <div className="d-flex justify-content-between">
        <div>
    <h5 class="card-title"><i class="fa-solid fa-building-columns"></i>  Institute Name</h5>
    </div>
    <div>
    <button className="btn btn-warning fw-bold"><i class="fa-solid fa-circle-check"></i> Apply</button>
    <button className="btn btn-secondary ms-2"><i class="fa-solid fa-bookmark"></i>  Save</button>
    </div>
    </div>
    <h5 class="card-title">Job Title</h5>
    <div className="p-2">
    <span className="ms-2"><i class="fa-solid fa-location-dot text-warning"></i>  Location</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-clock text-warning"></i>  Experience</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-indian-rupee-sign text-warning"></i>  Salary</span>
    </div>
    <div className="p-2">
      <span className="ms-2"><i class="fa-solid fa-graduation-cap text-warning"></i>  Education</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-calendar-check text-warning"></i>  Notice Period</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-suitcase text-warning"></i>  WorkType</span>
    </div>
    <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div class="card bg-body-secondary">
    <div class="card-body">
      <div className="d-flex justify-content-between">
        <div>
    <h5 class="card-title"><i class="fa-solid fa-building-columns"></i>  Institute Name</h5>
    </div>
    <div>
    <button className="btn btn-warning fw-bold"><i class="fa-solid fa-circle-check"></i> Apply</button>
    <button className="btn btn-secondary ms-2"><i class="fa-solid fa-bookmark"></i>  Save</button>
    </div>
    </div>
    <h5 class="card-title">Job Title</h5>
    <div className="p-2">
    <span className="ms-2"><i class="fa-solid fa-location-dot text-warning"></i>  Location</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-clock text-warning"></i>  Experience</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-indian-rupee-sign text-warning"></i>  Salary</span>
    </div>
    <div className="p-2">
      <span className="ms-2"><i class="fa-solid fa-graduation-cap text-warning"></i>  Education</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-calendar-check text-warning"></i>  Notice Period</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-suitcase text-warning"></i>  WorkType</span>
    </div>
    <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div class="card bg-body-secondary">
    <div class="card-body">
      <div className="d-flex justify-content-between">
        <div>
    <h5 class="card-title"><i class="fa-solid fa-building-columns"></i>  Institute Name</h5>
    </div>
    <div>
    <button className="btn btn-warning fw-bold"><i class="fa-solid fa-circle-check"></i> Apply</button>
    <button className="btn btn-secondary ms-2"><i class="fa-solid fa-bookmark"></i>  Save</button>
    </div>
    </div>
    <h5 class="card-title">Job Title</h5>
    <div className="p-2">
    <span className="ms-2"><i class="fa-solid fa-location-dot text-warning"></i>  Location</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-clock text-warning"></i>  Experience</span>
    <span className="ms-2 ps-2"><i class="fa-solid fa-indian-rupee-sign text-warning"></i>  Salary</span>
    </div>
    <div className="p-2">
      <span className="ms-2"><i class="fa-solid fa-graduation-cap text-warning"></i>  Education</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-calendar-check text-warning"></i>  Notice Period</span>
      <span className="ms-2 ps-2"><i class="fa-solid fa-suitcase text-warning"></i>  WorkType</span>
    </div>
    <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
    </div>
    </div>
    </div>
        </>
    )
}
export default Jobspage;