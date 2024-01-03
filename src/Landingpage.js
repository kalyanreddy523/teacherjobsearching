// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landingpage.css';
import { Container}from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <div className='bg-body-tertiary'>
      {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          
          <label className="nvimg navbar-brand"><img src='https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg' width={80} /></label>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"

            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Job's</a>
              </li>
              <li className="nav-item">
              <button type="button" class="btn2 btn btn-warning">Hire Talent</button>
              </li>
              <li className="nav-item">
              <button type="button" class="btn1 btn btn-warning">JobSeekerLogin</button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className='bgimg pb-2'>
            <h1><center>Find the Best Jobs in Education</center></h1>
            <h5><center>On India's Most Comprehensive Job Search Platform for Education</center></h5>
            
            <label className='imageb'><Link type="button" to='/Registration' class="btn btn-primary">Register as Job Seeker for Free</Link></label>
                    

        </div><br/>
        <div className='serchba-div p-3'>
           <center><input className='searchbar col-sx-14' type='search' placeholder='Search...'/> <button className='search-btn' type="submit">search</button></center>
        </div><br/><br/>
        <h1><center>Teaching Job Vacancies From</center></h1>
        
        <div class="scroll-container p-3">
            <figure className='figure1'>
                <img src="https://img.freepik.com/free-vector/hand-drawn-high-school-logo-design_23-2149667303.jpg" alt="Cinque Terre"/>   
                
                <figcaption><center>Education</center></figcaption>            
            </figure>
            <figure className='figure1'>
                <img src="https://images.click.in/classifieds/images/164/20_04_2018_16_48_34_0b19fa4ef7558e9809e7fcbf21264533_owgyvaisjf.jpg" alt="Cinque Terre"/>   
                
                <figcaption><center>Narayana</center></figcaption>            
            </figure>
            <figure className='figure1'>
                <img src="https://www.srichaitanyaneetacademytn.com/images/logo.png" alt="Cinque Terre"/>   
                
                <figcaption><center>Sri Chaitanya</center></figcaption>            
            </figure>
            <figure className='figure1'>
                <img src="https://scitr.edu.in/scitr_adm/gallery_category_images/logo.JPG" alt="Cinque Terre"/>   
                
                <figcaption><center>Chaitanya Institute</center></figcaption>            
            </figure>
            <figure className='figure1'>
                <img src="https://www.rayalaseemauniversity.ac.in/upload/logo1.png" alt="Cinque Terre"/>   
                
                <figcaption><center>Rayalaseema</center></figcaption>            
            </figure>
            <figure className='figure1'>
                <img src="https://poddartechnicalcampus.com/wp-content/uploads/2018/09/Poddar-Logo-512.png" alt="Cinque Terre"/>   
                
                <figcaption><center>Poddar Group of Institut</center></figcaption>            
            </figure>
            <figure className='figure1'>
                <img src="https://saiuniversity.edu.in/wp-content/uploads/2021/03/Sai_OG_Img.jpeg" alt="Cinque Terre"/>   
                
                <figcaption><center>Poddar Group of Institut</center></figcaption>            
            </figure>      
            
        </div>
        <div className='video-first p-4'>
            <div>
                <h1>What Job Seekers will get?</h1>
                <li>Free resume builder.</li>
                <li>Set free job alerts and get notified when matching jobs are posted.</li>
                <li>Create multiple job preferences and get relevant job suggestions as per the preferences created.</li>
                <li>Search for relevant jobs from thousands of posted jobs on JIE.</li>
                <li>Keep track of all scheduled interviews, demonstrations and assessments.</li>
                <li>Receive offer letters directly on the JIE portal from the employers.</li>
                <li>Teaching and Non Teaching Jobs from Delhi, Kolkata, Coimbatore, Mumbai, Bengaluru, Lucknow, Chennai, Hyderabad, Jaipur, Pune locations and many more.</li>
                
               <center><button type="button" class="video-btn2 btn btn-primary mt-5">Get a Job</button></center>
            </div>

            <Container>
            <div className="ratio ratio-16x9">
            <iframe frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="India’s most comprehensive job search platform for the education sector" width="100%" height="100%" src="https://www.youtube.com/embed/PLChVjJP_lI?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fwww.jobsineducation.net&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2" style={{borderRadius:"10px"}} className='img-thumbnail rounded' data-gtm-yt-inspected-9="true" data-gtm-yt-inspected-17="true"></iframe>
            
            </div>
            </Container>            
                        
                     
            
        </div><br/>
        <div className='Second-employee p-4'>
            <Container>
                <div className="ratio ratio-16x9">
                <iframe frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="It’s time to simplify the recruitment process with Jobs in Education" width="100%" height="100%" src="https://www.youtube.com/embed/fEkwJnYqs9w?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fwww.jobsineducation.net&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=3" id="widget4" className='img-thumbnail rounded' data-gtm-yt-inspected-9="true" data-gtm-yt-inspected-17="true"></iframe>
                </div>
            </Container> 
            {/* <div><video width="540" height="350" controls>
                <source src={videoUrl} type="video/mp4" />
                
            </video></div> */}
            <div className='second-video'>
                <h1>What employers will get?</h1>
                <ul >
                <li>One account for multiple institutes under the same group.</li>
                <li>End-to-end hiring solution. Search, save, invite, shortlist, schedule interview rounds, select, and send offers to candidates.</li>
                <li>Find relevant candidates that match your requirement. The mapping is done using all the parameters that are provided in the job posts hence the candidates listed will always be a suitable match for the job requirement.</li>
                <li>Post jobs and receive applications directly from the candidates.</li>
                <li>No yearly subscription, pay as per the usage.</li>
                <li>Free Coins on sign-up.</li>
                <center><button type="button" class="video-btn2 btn btn-primary mt-5">Hire Talent</button></center>
                
                </ul>
            </div>
        </div><br/>
        <div className='footer'>
            <div className='footer-f-block col-md-4'>
                <h5>Jobs by Categories</h5>
                <ul>
                    <li>Coaching</li>
                    <li>School</li>
                    <li>Pre-Scholl</li>
                    <li>EdTech</li>
                    <li>College/University</li>
                    <li>Vocational Training Institute</li>
                </ul>
            </div>
            <div className='col-md-4'>
                <h5>Jobs by Locations</h5>
                <ul>
                    <li>Bangalore</li>
                    <li>pune</li>
                    <li>Chennai</li>
                </ul>
            </div>
            <div className='footer-part3  col-md-4'>
                <h5>Jobs by Designations</h5>
                <ul>
                    <li>Mathematics</li>
                    <li>English</li>
                    <li>Teacher </li>
                    <li>Biology </li>
                </ul>
            </div>
        </div>
    
    </div>
  );
}

export default Landingpage;
