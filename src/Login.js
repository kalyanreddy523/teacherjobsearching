import { Link } from 'react-router-dom';
import React from 'react';


function Login() {

   return(
   
    <>
     <div className="container-fluid bg-body-tertiary p-5">
                <div className="row">
                    <div className="col-12">
                        <div className="container pt-4 bg-body-secondary">
                            <form className="row g-3">
                                <div className="col-12">
                                    <label for="email" className="form-label text-primary fw-bold">Email</label>
                                    <input type="email" className="form-control" id="email"   placeholder="Enter the Mail Id" required />
                                </div>
                                <div className="col-12">
                                    <label for="password" className="form-label text-primary fw-bold">Password</label>
                                    <input type="password" className="form-control" id="password"   placeholder="Enter the password" required />
                                </div>
                                <span>Forgot password?<Link to='/forgotpassword'>click here</Link></span>
                                <p className="pt-3">Don't Have an Account?<Link to='/Registration'>Sign Up here</Link></p>
                                <div className="col-12">
                                    <button type="button" className="btn btn-primary" >Login</button>
                                </div>
                                </form>
                                </div>
                                </div>
                                </div>
                                </div>

    </>
   );


}

export default Login;