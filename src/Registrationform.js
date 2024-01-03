import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Registrationform() {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [father, setFather] = useState("");
  const [mobile, setMobileNo] = useState("false");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [specialization1, setSpecialization1] = useState("");
  const [specialization2, setSpecialization2] = useState("");
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [subject4, setSubject4] = useState("");
  const [subject5, setSubject5] = useState("");
  const [subject6, setSubject6] = useState("");
  const [language1, setLanguage1] = useState("");
  const [language2, setLanguage2] = useState("");
  const [language3, setLanguage3] = useState("");
  const [language4, setLanguage4] = useState("");
  const [language5, setLanguage5] = useState("");
  const [language6, setLanguage6] = useState("");
  const [language7, setLanguage7] = useState("");
  const [language8, setLanguage8] = useState("");
  const [language9, setLanguage9] = useState("");
  const [address, setAddress] = useState("");
  const [professional, setProfessional] = useState("");
  const [description, setDescription] = useState("");
  const [statement, setStatement] = useState("");
  const [amount, setAmount] = useState("");
  const [city, setCity] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errmail, setErrMail] = useState(false);
  const [errmobile, setErrMobileNo] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMobileNo, setIsValidMobile] = useState(true);

  //   async function save(event) {

  //     event.preventDefault();
  //     if (!isValidEmail) {
  //      // setErr(true);
  //       setErrMail(true); // Show the error message
  //       return;
  //     }
  // }

  const handleDropdownChange = (event) => {
    // Update the selected option when the dropdown changes
    setSelectedOption(event.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|hotmail\.com|anarghyacomm\.in)$/;

    return emailRegex.test(email);
  };
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  function submit() {
    if (mobile.length > 10 && mobile.length < 10) {
      alert("enter the 10 digit number only");
    }
  }
  const validateMobileNumber = (mobileNumber) => {
    // Regular expression pattern for a 10-digit mobile number starting with 6 to 9
    var pattern = /^[6-9]\d{9}$/;

    // Check if the provided number matches the pattern
    return pattern.test(mobileNumber);
  };

  // Example usage:
  var phoneNumber = "7890123456"; // Change this to the desired phone number for testing
  if (validateMobileNumber(phoneNumber)) {
    console.log("The number " + phoneNumber + " is a valid mobile number.");
  } else {
    console.log("The number " + phoneNumber + " is NOT a valid mobile number.");
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container bg-body-secondary mt-4 rounded pt-4">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="name" className="form-label text-primary fw-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(event) => {
                      const updatedValue = event.target.value.replace(
                        /[^A-Za-z\s]/g,
                        ""
                      );
                      setName(updatedValue);
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    for="mobileNumber"
                    className="form-label text-primary fw-bold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    ClassName="form-control"
                    id="mobileNumber"
                    placeholder="Enter mobile Number"
                    required
                  />
                </div>
                <div className="col-12">
                  <label
                    for="email"
                    className="form-label text-primary fw-bold"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    className={`form-control  ${
                      isValidEmail ? "" : "is-invalid"
                    }`}
                    id="email"
                    placeholder="Enter the Email"
                    value={email}
                    onChange={handleEmailChange}
                    title=" Please enter a valid email ending with @gmail.com or @hotmail.com."
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <label
                      for="password"
                      className="form-label text-primary fw-bold"
                    >
                      password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter the Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                      title="Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long."
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label
                      for="password"
                      className="form-label text-primary fw-bold"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Re-Enter the Password"
                      value={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                      title="confirm Password must be same as Password"
                      required
                    />
                  </div>
                </div>
                <br />
                <div className="col-md-6">
                  <label for="job" className="form-label text-primary fw-bold">
                    Job Classification
                  </label>
                  <select
                    value={selectedOption}
                    onChange={handleDropdownChange}
                  >
                    <option>select</option>
                    <option value="option1">Teachers</option>
                    <option value="option2">Skilled Trainers</option>
                    <option value="option3">Religious Trainers</option>
                  </select>
                  <br />
                  <br />
                  <div>
                    {/* Display content based on th
                                    e selected option */}
                    {selectedOption === "option1" && (
                      <div>
                        <div className="col-12">
                          <label
                            for="qualification"
                            className="form-label text-primary fw-bold"
                          >
                            Qualification
                          </label>
                          <select ClassName="form-select">
                            <option>select</option>
                            <option>Graduation</option>
                            <option>Post Graduation</option>
                            <option>Ph.d</option>
                          </select>
                          <input
                            type="qualification"
                            className="form-control"
                            id="qualification"
                            placeholder="Enter specialization"
                            value={specialization}
                            onChange={(event) => {
                              const updatedValue = event.target.value.replace(
                                /[^A-Za-z\s]/g,
                                ""
                              );
                              setSpecialization(updatedValue);
                            }}
                            required
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label
                              for="yop"
                              className="form-label text-primary fw-bold"
                            >
                              Years of Experience
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="yop"
                              placeholder="years"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              for="yop"
                              className="form-label text-primary fw-bold"
                            >
                              Months of Experience
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="yop"
                              placeholder="months"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              {" "}
                              Expertise In Subjects
                            </label>
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={subject1}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setSubject1(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={subject2}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setSubject2(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={subject3}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setSubject3(updatedValue);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              {" "}
                              Known Languages
                            </label>
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={language1}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setLanguage1(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={language2}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setLanguage2(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={language3}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setLanguage3(updatedValue);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Proficiency In Languages
                            </label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="option1"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Beginner
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="option2"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault2"
                              >
                                Intermediate
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                                value="option3"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault3"
                              >
                                Expert
                              </label>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Type of mode
                            </label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                Online
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckChecked"
                              >
                                Offline
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                Hybrid
                              </label>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Interested In
                            </label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault4"
                                value="option4"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault4"
                              >
                                Fulltime
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault5"
                                value="option5"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault5"
                              >
                                Parttime
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault6"
                                value="option6"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault6"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                          <br></br>
                          <div className="col-md-6">
                            <label
                              for="exp"
                              className="form-label text-primary fw-bold"
                            >
                              Expected Salary
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="exp"
                              placeholder="Ex(5000-50000)(min-max)range"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedOption === "option2" && (
                      <div>
                        <div className="col-12">
                          <label
                            for="qualification"
                            className="form-label text-primary fw-bold"
                          >
                            Qualification
                          </label>
                          <select ClassName="form-select">
                            <option>select</option>
                            <option>Graduation</option>
                            <option>Post Graduation</option>
                            <option>Ph.d</option>
                          </select>
                          <input
                            type="qualification"
                            className="form-control"
                            id="qualification"
                            placeholder="Enter Specialization"
                            value={specialization1}
                            onChange={(event) => {
                              const updatedValue = event.target.value.replace(
                                /[^A-Za-z\s]/g,
                                ""
                              );
                              setSpecialization1(updatedValue);
                            }}
                            required
                          />
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <label
                              for="yop"
                              className="form-label text-primary fw-bold"
                            >
                              Years of Experience
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="yop"
                              placeholder="years"
                              required
                            />
                          </div>
                          <div className="col-6">
                            <label
                              for="yop"
                              className="form-label text-primary fw-bold"
                            >
                              Months of Experience
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="yop"
                              placeholder="months"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              {" "}
                              Expertise In Subjects
                            </label>
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={subject4}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setSubject4(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={subject5}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setSubject5(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={subject6}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setSubject6(updatedValue);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Languages
                            </label>
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={language4}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setLanguage4(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={language5}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setLanguage5(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label></label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              value={language6}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setLanguage6(updatedValue);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Proficiency
                            </label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                Beginner
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckChecked"
                              >
                                Intermediate
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                Expert
                              </label>
                            </div>
                          </div>
                        </div>
                        <br />

                        <div class="mb-3">
                          <label
                            class="form-label"
                            className="form-label text-primary"
                          >
                            Certifications
                          </label>
                          <input
                            type="file"
                            class="form-control"
                            aria-label="file example"
                            required
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Date of Birth
                            </label>
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Date
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="Date"
                              placeholder=" "
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Month
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="month"
                              placeholder=" "
                              required
                            />
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              year
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label
                            for="name"
                            className="form-label text-primary fw-bold"
                          >
                            Father Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder=""
                            value={father}
                            onChange={(event) => {
                              const updatedValue = event.target.value.replace(
                                /[^A-Za-z\s]/g,
                                ""
                              );
                              setFather(updatedValue);
                            }}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label
                            for="name"
                            className="form-label text-primary fw-bold"
                          >
                            Professional Qualification
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder=""
                            value={professional}
                            onChange={(event) => {
                              const updatedValue = event.target.value.replace(
                                /[^A-Za-z\s]/g,
                                ""
                              );
                              setProfessional(updatedValue);
                            }}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label
                            for="name"
                            className="form-label text-primary fw-bold"
                          >
                            Job Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder=""
                            value={description}
                            onChange={(event) => {
                              const updatedValue = event.target.value.replace(
                                /[^A-Za-z\s]/g,
                                ""
                              );
                              setDescription(updatedValue);
                            }}
                            required
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Type of mode
                            </label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                Online
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckChecked"
                              >
                                Offline
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                Hybrid
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            >
                              Interested In
                            </label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault"
                              >
                                Fulltime
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault"
                              >
                                Parttime
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="name"
                              className="form-label text-primary fw-bold"
                            ></label>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <label
                            htmlFor="Amount"
                            className="form-label text-primary fw-bold"
                          >
                            Expected Salary
                          </label>
                          <input
                            type="number"
                            id="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="minimum  salary 5000"
                            min="100"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {selectedOption === "option3" && (
                      <div>
                        <div>
                          <div className="col-12">
                            <label
                              for="qualification"
                              className="form-label text-primary fw-bold"
                            >
                              Qualification
                            </label>
                            <select ClassName="form-select">
                              <option>select</option>
                              <option>Graduation</option>
                              <option>Post Graduation</option>
                              <option>Ph.d</option>
                            </select>
                            <input
                              type="qualification"
                              className="form-control"
                              id="qualification"
                              placeholder="Enter Specialization"
                              value={specialization2}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setSpecialization2(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <label
                                for="yop"
                                className="form-label text-primary fw-bold"
                              >
                                Years of Experience
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="yop"
                                placeholder="years"
                                required
                              />
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <label
                                  for="name"
                                  className="form-label text-primary fw-bold"
                                >
                                  Languages
                                </label>
                                <label></label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder=" "
                                  value={language7}
                                  onChange={(event) => {
                                    const updatedValue =
                                      event.target.value.replace(
                                        /[^A-Za-z\s]/g,
                                        ""
                                      );
                                    setLanguage7(updatedValue);
                                  }}
                                  required
                                />
                              </div>
                              <div className="col-md-4">
                                <label></label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder=" "
                                  value={language8}
                                  onChange={(event) => {
                                    const updatedValue =
                                      event.target.value.replace(
                                        /[^A-Za-z\s]/g,
                                        ""
                                      );
                                    setLanguage8(updatedValue);
                                  }}
                                  required
                                />
                              </div>
                              <div className="col-md-4">
                                <label></label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder=" "
                                  value={language9}
                                  onChange={(event) => {
                                    const updatedValue =
                                      event.target.value.replace(
                                        /[^A-Za-z\s]/g,
                                        ""
                                      );
                                    setLanguage9(updatedValue);
                                  }}
                                  required
                                />
                              </div>
                            </div>
                            <div class="mb-3">
                              <label
                                class="form-label"
                                className="form-label text-primary"
                              >
                                Certifications
                              </label>
                              <input
                                type="file"
                                class="form-control"
                                aria-label="file example"
                                required
                              />
                            </div>
                            <div className="col-12">
                              <label
                                for="name"
                                className="form-label text-primary fw-bold"
                              >
                                Statement of Faith
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder=""
                                value={statement}
                                onChange={(event) => {
                                  const updatedValue =
                                    event.target.value.replace(
                                      /[^A-Za-z\s]/g,
                                      ""
                                    );
                                  setStatement(updatedValue);
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="col-12">
                      <label
                        for="inputAddress2"
                        className="form-label text-primary fw-bold"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment or floor"
                        value={address}
                        onChange={(event) => {
                          const updatedValue = event.target.value.replace(
                            /[^A-Za-z\s]/g,
                            ""
                          );
                          setAddress(updatedValue);
                        }}
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label
                          for="inputCity"
                          className="form-label text-primary fw-bold"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                          value={city}
                          onChange={(event) => {
                            const updatedValue = event.target.value.replace(
                              /[^A-Za-z\s]/g,
                              ""
                            );
                            setCity(updatedValue);
                          }}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          for="inputZip"
                          className="form-label text-primary fw-bold"
                        >
                          Zip
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputZip"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label
                          class="form-label"
                          className="form-label text-primary"
                        >
                          Upload Resume
                        </label>
                        <input
                          type="file"
                          class="form-control"
                          aria-label="file example"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          class="form-label"
                          className="form-label text-primary"
                        >
                          Photo
                        </label>
                        <input
                          type="file"
                          class="form-control"
                          aria-label="file example"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label
                          className="form-check-label text-primary fw-bold"
                          for="gridCheck"
                        >
                          Check me out
                        </label>
                      </div>
                    </div>
                    <br></br>
                    <div className="col-12 text-center">
                      <button className="btn btn-primary" onClick={submit}>
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <br></br>
              <p className="pt-3">Already Have a Account?<Link to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registrationform;
