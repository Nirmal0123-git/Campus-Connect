/* =========================================================
   REACT SETUP
========================================================= */

const {
  useState
} = React;


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

  {
    id: 1,

    name: "AI Career Assistant",

    description:
      "An intelligent career assistant that analyzes user skills and recommends suitable career paths, learning resources and project ideas.",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",

    tags: [
      "AI",
      "React",
      "Python"
    ]
  },


  {
    id: 2,

    name: "Smart Hospital Management",

    description:
      "A digital hospital platform for managing patients, appointments, doctors, prescriptions and hospital records.",

    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",

    tags: [
      "React",
      "Node.js",
      "MongoDB"
    ]
  },


  {
    id: 3,

    name: "IoT Smart Home",

    description:
      "A smart-home monitoring system that connects IoT devices and displays temperature, device status and sensor information.",

    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=80",

    tags: [
      "IoT",
      "ESP32",
      "MQTT"
    ]
  },


  {
    id: 4,

    name: "Cloud File Management",

    description:
      "A cloud-based file management platform that allows users to upload, organize, search and share digital files.",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",

    tags: [
      "Cloud",
      "AWS",
      "React"
    ]
  },


  {
    id: 5,

    name: "Cybersecurity Threat Monitor",

    description:
      "A cybersecurity dashboard designed to visualize security events, alerts, threat levels and system activity.",

    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",

    tags: [
      "Security",
      "Dashboard",
      "Python"
    ]
  },


  {
    id: 6,

    name: "Blockchain Certificate Verification",

    description:
      "A blockchain-based certificate verification platform that helps institutions issue and verify digital certificates.",

    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80",

    tags: [
      "Blockchain",
      "Web3",
      "Solidity"
    ]
  },


  {
    id: 7,

    name: "Student Performance Analytics",

    description:
      "An analytics application that presents student marks, attendance and performance trends through interactive dashboards.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",

    tags: [
      "Analytics",
      "Charts",
      "React"
    ]
  },


  {
    id: 8,

    name: "Online Learning Platform",

    description:
      "An e-learning platform where students can explore courses, watch lessons, complete assessments and monitor progress.",

    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=80",

    tags: [
      "EdTech",
      "React",
      "Firebase"
    ]
  },


  {
    id: 9,

    name: "Expense Management System",

    description:
      "A personal finance application for recording expenses, categorizing transactions and visualizing monthly spending.",

    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",

    tags: [
      "Finance",
      "JavaScript",
      "Charts"
    ]
  },


  {
    id: 10,

    name: "DevOps CI/CD Dashboard",

    description:
      "A dashboard for monitoring application builds, deployment pipelines, release status and development workflow metrics.",

    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",

    tags: [
      "DevOps",
      "Docker",
      "CI/CD"
    ]
  }

];


/* =========================================================
   HEADER COMPONENT
========================================================= */

function Header() {

  return (

    <section
      className="header-section"
      id="home"
    >

      <nav className="navbar">


        {/* LOGO */}

        <div className="logo-container">

          <img
            src="https://dummyimage.com/100x100/7c3aed/ffffff.png&text=BE"
            alt="Best Engineering College Logo"
          />

          <span className="logo-text">
            Best Engineering College
          </span>

        </div>


        {/* CENTER HEADING */}

        <h1 className="page-heading">
          Career Page
        </h1>


        {/* RIGHT LINKS */}

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#contact">
            Contact Us
          </a>

        </div>

      </nav>


      {/* HERO */}

      <div className="hero-content">

        <div className="hero-content-inner">

          <span className="hero-badge">
            BUILD YOUR FUTURE WITH US
          </span>


          <h2 className="hero-title">

            Discover Your

            <br />

            <span>
              Career Opportunity
            </span>

          </h2>


          <p className="hero-description">

            Submit your professional details,
            create your career profile and
            explore innovative IT projects
            developed around modern technology.

          </p>


          <a
            href="#career"
            className="hero-button"
          >
            Apply Now
          </a>

        </div>

      </div>

    </section>

  );

}


/* =========================================================
   ERROR POPUP
========================================================= */

function ErrorPopup({
  message,
  closePopup
}) {

  if (!message) {

    return null;

  }


  return (

    <div className="popup-overlay">

      <div className="popup">


        <div className="popup-icon">
          !
        </div>


        <h3>
          Validation Error
        </h3>


        <p>
          {message}
        </p>


        <button
          className="popup-close"
          onClick={closePopup}
        >
          OK, I'll Correct It
        </button>


      </div>

    </div>

  );

}


/* =========================================================
   CAREER SECTION
========================================================= */

function CareerSection() {


  /* EMPTY FORM */

  const emptyForm = {

    name: "",

    email: "",

    role: "",

    password: ""

  };


  /* STATES */

  const [form, setForm] =
    useState(emptyForm);


  const [profile, setProfile] =
    useState(null);


  const [submitted, setSubmitted] =
    useState(false);


  const [error, setError] =
    useState("");


  /* =======================================================
     HANDLE INPUT
  ======================================================= */

  function handleChange(event) {

    const {
      name,
      value
    } = event.target;


    setForm({

      ...form,

      [name]: value

    });

  }


  /* =======================================================
     VALIDATION
  ======================================================= */

  function validateForm() {


    /*
      Name:
      Only alphabets and spaces.
    */

    const nameRegex =
      /^[A-Za-z ]{2,50}$/;


    /*
      Email:
      Standard email format.
    */

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


    /*
      Password:
      Minimum 8 characters.
      Must have letter.
      Must have number.
    */

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;


    /* NAME */

    if (!form.name.trim()) {

      return "Please enter your name.";

    }


    if (!nameRegex.test(
      form.name.trim()
    )) {

      return (
        "Name should contain only "
        + "letters and spaces."
      );

    }


    /* EMAIL */

    if (!form.email.trim()) {

      return (
        "Please enter your email address."
      );

    }


    if (!emailRegex.test(
      form.email.trim()
    )) {

      return (
        "Please enter a valid email address."
      );

    }


    /* ROLE */

    if (!form.role.trim()) {

      return "Please enter your role.";

    }


    if (
      form.role.trim().length < 2
    ) {

      return (
        "Role must contain at least "
        + "2 characters."
      );

    }


    /* PASSWORD */

    if (!form.password) {

      return (
        "Please enter a password."
      );

    }


    if (!passwordRegex.test(
      form.password
    )) {

      return (
        "Password must contain at least "
        + "8 characters, including "
        + "letters and numbers."
      );

    }


    /* EVERYTHING IS VALID */

    return "";

  }


  /* =======================================================
     SUBMIT
  ======================================================= */

  function handleSubmit(event) {

    event.preventDefault();


    const validationError =
      validateForm();


    /*
      If validation fails,
      show popup and STOP.
    */

    if (validationError) {

      setError(
        validationError
      );

      return;

    }


    /*
      Only valid information
      is saved into profile.
    */

    const validProfile = {

      name:
        form.name.trim(),

      email:
        form.email.trim(),

      role:
        form.role.trim(),

      password:
        form.password

    };


    setProfile(
      validProfile
    );


    setSubmitted(
      true
    );

  }


  /* =======================================================
     EDIT
  ======================================================= */

  function handleEdit() {


    /*
      Restore previous data
      into the input fields.
    */

    setForm({

      name:
        profile.name,

      email:
        profile.email,

      role:
        profile.role,

      password:
        profile.password

    });


    /*
      Hide profile.
    */

    setProfile(null);


    /*
      Show form again.
    */

    setSubmitted(false);


    /*
      Scroll back to form.
    */

    const career =
      document.getElementById(
        "career"
      );


    if (career) {

      career.scrollIntoView({

        behavior: "smooth"

      });

    }

  }


  /* =======================================================
     DELETE
  ======================================================= */

  function handleDelete() {


    /*
      Remove entire profile.
    */

    setProfile(null);


    /*
      Show form.
    */

    setSubmitted(false);


    /*
      Reset every field.
    */

    setForm(
      emptyForm
    );


    /*
      Remove errors.
    */

    setError("");

  }


  /* =======================================================
     JSX
  ======================================================= */

  return (

    <section
      className="career-section"
      id="career"
    >


      {/* TITLE */}

      <div className="section-heading">

        <h2>
          Career Application
        </h2>

        <p>
          Enter your correct information
          to create your profile.
        </p>

      </div>


      <div className="form-area">


        {/* =================================================
            FORM
        ================================================= */}

        {!submitted &&
          !profile && (

            <div className="career-box">

              <form
                onSubmit={
                  handleSubmit
                }
              >

                <table className="form-table">

                  <tbody>


                    {/* NAME */}

                    <tr>

                      <td>
                        Name:
                      </td>

                      <td>

                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={form.name}
                          onChange={
                            handleChange
                          }
                          autoComplete="name"
                        />

                      </td>

                    </tr>


                    {/* EMAIL */}

                    <tr>

                      <td>
                        Email:
                      </td>

                      <td>

                        <input
                          type="email"
                          name="email"
                          placeholder="example@email.com"
                          value={form.email}
                          onChange={
                            handleChange
                          }
                          autoComplete="email"
                        />

                      </td>

                    </tr>


                    {/* ROLE */}

                    <tr>

                      <td>
                        Role:
                      </td>

                      <td>

                        <input
                          type="text"
                          name="role"
                          placeholder="e.g. React Developer"
                          value={form.role}
                          onChange={
                            handleChange
                          }
                        />

                      </td>

                    </tr>


                    {/* PASSWORD */}

                    <tr>

                      <td>
                        Password:
                      </td>

                      <td>

                        <input
                          type="password"
                          name="password"
                          placeholder="Minimum 8 characters"
                          value={
                            form.password
                          }
                          onChange={
                            handleChange
                          }
                          autoComplete="new-password"
                        />

                      </td>

                    </tr>


                    {/* SUBMIT */}

                    <tr className="submit-row">

                      <td colSpan="2">

                        <button
                          type="submit"
                          className="submit-button"
                        >
                          Submit
                        </button>

                      </td>

                    </tr>


                  </tbody>

                </table>

              </form>

            </div>

          )}


        {/* =================================================
            SUCCESS + PROFILE
        ================================================= */}

        {submitted &&
          profile && (

            <div>


              {/* SUCCESS */}

              <div className="success-message">

                <span className="success-tick">
                  ✓
                </span>

                Submitted Successfully

              </div>


              {/* PROFILE */}

              <div className="profile-card">


                {/* PROFILE HEADER */}

                <div className="profile-header">

                  <div className="profile-avatar">

                    {
                      profile.name
                        .charAt(0)
                        .toUpperCase()
                    }

                  </div>


                  <div>

                    <h3>
                      {profile.name}
                    </h3>

                    <p>
                      {profile.role}
                    </p>

                  </div>

                </div>


                {/* DETAILS */}

                <div className="profile-details">


                  {/* NAME */}

                  <div className="detail-box">

                    <small>
                      Name
                    </small>

                    <strong>
                      {profile.name}
                    </strong>

                  </div>


                  {/* EMAIL */}

                  <div className="detail-box">

                    <small>
                      Email
                    </small>

                    <strong>
                      {profile.email}
                    </strong>

                  </div>


                  {/* ROLE */}

                  <div className="detail-box">

                    <small>
                      Role
                    </small>

                    <strong>
                      {profile.role}
                    </strong>

                  </div>


                  {/* PASSWORD */}

                  <div className="detail-box">

                    <small>
                      Password
                    </small>

                    <strong>
                      {
                        "•".repeat(
                          profile.password.length
                        )
                      }
                    </strong>

                  </div>


                </div>


                {/* BUTTONS */}

                <div className="profile-actions">


                  <button
                    className="edit-button"
                    onClick={
                      handleEdit
                    }
                  >
                    Edit
                  </button>


                  <button
                    className="delete-button"
                    onClick={
                      handleDelete
                    }
                  >
                    Delete
                  </button>


                </div>


              </div>


            </div>

          )}


      </div>


      {/* ERROR POPUP */}

      <ErrorPopup

        message={error}

        closePopup={() =>
          setError("")
        }

      />


    </section>

  );

}


/* =========================================================
   PROJECT SECTION
========================================================= */

function ProjectsSection() {

  return (

    <section
      className="projects-section"
      id="projects"
    >


      {/* HEADING */}

      <div className="section-heading">

        <h2>
          IT Project Showcase
        </h2>

        <p>
          Explore innovative projects
          across modern technology domains.
        </p>

      </div>


      {/* GRID */}

      <div className="projects-grid">


        {projects.map(
          (project, index) => (

            <article

              key={
                project.id
              }

              className={
                "project-card " +

                (
                  project.id === 10
                    ? "project-ten"
                    : ""
                )
              }

            >


              {/* IMAGE */}

              <img

                className="project-image"

                src={
                  project.image
                }

                alt={
                  project.name
                }

                loading="lazy"

              />


              {/* CONTENT */}

              <div className="project-content">


                {/* NUMBER */}

                <span className="project-number">

                  PROJECT{" "}

                  {
                    String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )
                  }

                </span>


                {/* NAME */}

                <h3>
                  {project.name}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="tech-tags">


                  {project.tags.map(
                    tag => (

                      <span

                        key={tag}

                        className="tech-tag"

                      >

                        {tag}

                      </span>

                    )
                  )}


                </div>


              </div>


            </article>

          )
        )}


      </div>

    </section>

  );

}


/* =========================================================
   FOOTER
========================================================= */

function Footer() {

  return (

    <footer
      className="footer-section"
      id="contact"
    >


      <div className="footer-content">


        {/* LEFT */}

        <div>

          <h2 className="footer-title">
            Contact Us
          </h2>

          <p className="footer-description">

            Best Engineering College is
            committed to helping students
            and professionals develop
            technology skills and build
            successful careers.

          </p>

        </div>


        {/* RIGHT */}

        <div className="contact-information">


          <p>

            <strong>
              College:
            </strong>

            {" "}

            Best Engineering College

          </p>


          <p>

            <strong>
              Location:
            </strong>

            {" "}

            Switzerland, London

          </p>


          <p>

            <strong>
              Mobile No:
            </strong>

            {" "}

            836361064

          </p>


        </div>


      </div>


      {/* COPYRIGHT */}

      <div className="copyright">

        © 2026 Best Engineering College.
        All Rights Reserved.

      </div>


    </footer>

  );

}


/* =========================================================
   MAIN APP
========================================================= */

function App() {

  return (

    <>

      {/* SECTION 1 */}

      <Header />


      {/* SECTION 2 */}

      <CareerSection />


      {/* SECTION 3 */}

      <ProjectsSection />


      {/* SECTION 4 */}

      <Footer />

    </>

  );

}


/* =========================================================
   START REACT
========================================================= */

const root =
  ReactDOM.createRoot(
    document.getElementById(
      "root"
    )
  );


root.render(
  <App />
);