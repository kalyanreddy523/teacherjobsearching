import { useState } from "react";

const Appliedjobs=()=>{
    const[state,setState]=useState(false);
    return(
        <>
        <div className="container-fluid bg-body-secondary">
            <div className="row">
                <div className="col-12">
                    <p className="fs-3 fw-bold"><u>Job Results</u></p>
                </div>
                <div className="col-4">
                    
                <div class="card">
                <button className="btn" onClick={()=>setState(true)}>
                    <div class="card-body">
                    <h5 class="text-start"> <i class="fa-solid fa-building-columns text-primary"></i>  Institute Name</h5>
                    <h5 className="text-start text-warning">Title/Job post</h5>
                    <div className="d-flex justify-content-around p-1">
                        <span><i class="fa-solid fa-location-dot text-warning"></i>  Location</span>
                        <span><i class="fa-solid fa-clock text-warning"></i>  Experience</span>
                    </div>
                    <div className="d-flex justify-content-around p-1">
                        <span><i class="fa-solid fa-indian-rupee-sign text-warning"></i>  Salary</span>
                        <span><i class="fa-solid fa-graduation-cap text-warning"></i>  Qualification</span>
                    </div>
                    <div className="d-flex justify-content-around p-1 pe-5">
                        <span className="pe-5"><i class="fa-solid fa-suitcase text-warning"></i>  WorkType</span>
                        <span></span>
                    </div>
                </div>
                </button>
                </div>
               
                </div>
                <div className="col-8">
                {state && <div class="card">
                    <div class="card-body">
                    <h5 class="card-title p-1"> <i class="fa-solid fa-building-columns text-primary"></i>  Institute Name</h5>
                    <h5 className="card-title p-1 text-warning">Title/Job post</h5>
                    <div className="d-flex justify-content-evenly p-1">
                        <span><i class="fa-solid fa-location-dot text-warning"></i>  Location</span>
                        <span><i class="fa-solid fa-clock text-warning"></i>  Experience</span>
                        <span><i class="fa-solid fa-indian-rupee-sign text-warning"></i>  Salary</span>
                        <span><i class="fa-solid fa-graduation-cap text-warning"></i>  Qualification</span>
                        <span className="pe-5"><i class="fa-solid fa-suitcase text-warning"></i>  WorkType</span>
                        <span></span>
                    </div>
                    <h5 className="fw-bold pt-3"><u>Description</u></h5>
                    <div className="p-3">
                        <p className="text-justify">We are looking for an experienced and passionate TGT Mathematics Teacher to join our CBSE School. The successful candidate will be responsible for teaching Mathematics to students from Grade 6 to Grade 10.</p>
                    </div>
                    <div>
                        <h5 className="fw-bold p-2"><u>Responsibilities</u></h5>
                    </div>
                    <div>
                        <p>Develop lesson plans and deliver lectures to students.</p>
                           <p>Evaluate student performance and progress.</p>
                            <p>Provide appropriate feedback on work.</p>
                            <p>Encourage and monitor the progress of individual students.</p>
                            <p>Maintain records of students’ progress and development.</p>
                           <p>Organize and supervise activities and experiments.</p>
                           <p> Prepare classroom and coursework materials.</p>
                           <p> Keep up to date with changes and developments in the curriculum.</p>
                           <p> Participate in departmental meetings, parent meetings, and other school activities.</p>
                    </div>
                    <div>
                        <h5 className="fw-bold p-2"><u>Requirements</u></h5>
                    </div>
                    <div>
                        <p>Bachelor’s degree in Mathematics or related field.</p>
                         <p>   Minimum of 3 years of teaching experience.</p>
                          <p>      Excellent communication and interpersonal skills.</p>
                          <p>      Ability to work collaboratively with colleagues.</p>
                          <p>      Knowledge of current teaching methods and educational pedagogy.</p>
                            <p>    Proficiency in English.</p>
                              <p>  Computer literacy.</p>
                    </div>
                </div>
                </div>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Appliedjobs;