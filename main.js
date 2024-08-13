// /*// const { useState } = React;

// // const { useEffect } = require("react");

// // function FruitListItem(props) {
// //   return (
// //     <li>
// //       {props.fruit.name} | <button onClick={() => props.onRemove(props.fruit)}>Delete</button>
// //     </li>
// //   );
// // }
// // function FruitList() {
// //   const [fruits, setFruits] = useState([
// //     { id: 1, name: "apple" },
// //     { id: 2, name: "orange" },
// //     { id: 3, name: "blueberry" },
// //     { id: 4, name: "banana" },
// //     { id: 5, name: "kiwi" },
// //   ]);
// //   function removeFruit(fruit) {
// //     const updatedFruits = fruits.filter((aFruit) => aFruit.id !== fruit.id);
// //     setFruits(updatedFruits);
// //   }
// //   return (
// //     <ul>
// //       {fruits.map((fruit) => (
// //         <FruitListItem key={fruit.id} fruit={fruit} onRemove={removeFruit} />
// //       ))}
// //     </ul>
// //   );
// // }
// // function App() {
// //   return <FruitList />;
// // }
// // ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// // import React from "react";

// //================================================================//
// // function App() {
// //   const [busy, setBusy] = React.useState(false);
// //   const [teams, setTeams] = React.useState([]);

// //   function LoadTeams(props) {
// //     React.useEffect(() => {
// //       setBusy(true);

// //      setTimeout(() => {
// //         setTeams([
// //           {
// //             teamName: "Los Angeles Lakers",
// //             city: "Los Angeles",
// //             owner: "Jeanie Buss",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Golden State Warriors",
// //             city: "San Francisco",
// //             owner: "Joe Lacob & Peter Guber",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Chicago Bulls",
// //             city: "Chicago",
// //             owner: "Jerry Reinsdorf",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Boston Celtics",
// //             city: "Boston",
// //             owner: "Wyc Grousbeck & Irv Grousbeck",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Miami Heat",
// //             city: "Miami",
// //             owner: "Micky Arison",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Brooklyn Nets",
// //             city: "Brooklyn",
// //             owner: "Joe Tsai",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Dallas Mavericks",
// //             city: "Dallas",
// //             owner: "Mark Cuban",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Houston Rockets",
// //             city: "Houston",
// //             owner: "Tilman Fertitta",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Philadelphia 76ers",
// //             city: "Philadelphia",
// //             owner: "Josh Harris",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Milwaukee Bucks",
// //             city: "Milwaukee",
// //             owner: "Wes Edens & Marc Lasry",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Toronto Raptors",
// //             city: "Toronto",
// //             owner: "Maple Leaf Sports & Entertainment",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Phoenix Suns",
// //             city: "Phoenix",
// //             owner: "Mat Ishbia",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Denver Nuggets",
// //             city: "Denver",
// //             owner: "Kroenke Sports & Entertainment",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "San Antonio Spurs",
// //             city: "San Antonio",
// //             owner: "Peter Holt",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "New York Knicks",
// //             city: "New York",
// //             owner: "James Dolan",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Atlanta Hawks",
// //             city: "Atlanta",
// //             owner: "Antony Ressler",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Utah Jazz",
// //             city: "Salt Lake City",
// //             owner: "Ryan Smith",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Portland Trail Blazers",
// //             city: "Portland",
// //             owner: "Jody Allen",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Los Angeles Clippers",
// //             city: "Los Angeles",
// //             owner: "Steve Ballmer",
// //             numberOfPlayers: 15,
// //           },
// //           {
// //             teamName: "Cleveland Cavaliers",
// //             city: "Cleveland",
// //             owner: "Dan Gilbert",
// //             numberOfPlayers: 15,
// //           },
// //         ]);
// //         setBusy(false);
// //       }, 1000);
// //     });

// //     return props.busy ? <h1>Loading...</h1> : props.teams.map((team) =>  <div key={team.teamName} className="card">{team.teamName}</div>);
// //   }
// //   return <LoadTeams busy={busy} teams={teams} />;
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// //=================================================================//
// // const { useState, useEffect } = React;

// // const nbaTeams = [
// //   { name: "Los Angeles Lakers", division: "Pacific" },
// //   { name: "Chicago Bulls", division: "Central" },
// //   { name: "Miami Heat", division: "Southeast" },
// //   { name: "Dallas Mavericks", division: "Southwest" },
// // ];

// // const teamAPI = {
// //   list() {
// //     return new Promise((resolve) => {
// //       setTimeout(() => {
// //         resolve(nbaTeams);
// //       }, 1000);
// //     });
// //   },
// // };

// // // Define the App component here
// // function App() {
// //   const [busy, setBusy] = React.useState(false);
// //   const [teams, setTeams] = React.useState([]);

// //   React.useEffect(() => {
// //     loadTeams();
// //   }, []);

// //   async function loadTeams() {
// //     setBusy(true);
// //     setTeams(await teamAPI.list());
// //     setBusy(false);
// //   }

// //   return busy ? (
// //     <h1>Loading...</h1>
// //   ) : (
// //     <div className="list">
// //     {teams.map((team) => (
// //       <a href="" className="card">
// //       <div key={team.name}>
// //         <h1>{team.division}</h1>
// //         <h3>{team.name}</h3>
// //         </div>
// //         </a>
// //       ))}
// //     </div>
// //   );
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// // function App() {
// //   return (
// //     <div className="container-fluid flex-wrap w-25 ">
// //       <ContactUsForm />
// //     </div>
// //   );
// // }
// //==========================================================================//
// // function ContactUsForm() {
// //   const [department, setDepartment] = React.useState("");
// //   const [message, setMessage] = React.useState("");
// //   const [agreedToTerms, setTerms] = React.useState(false);
// //   const [errors, setErrors] = React.useState({});

// //   const formData = {
// //     department,
// //     message,
// //     agreedToTerms,
// //   };

// //   function validateForm() {
// //     let newErrors = {};

// //     // Checking if fields are empty and adding errors accordingly
// //     if (!message) newErrors.message = "Message is required";
// //     if (!department) newErrors.department = "Department is required";
// //     if (!agreedToTerms) newErrors.agreedToTerms = "You must agree to the terms";

// //     setErrors(newErrors);

// //     // Return true if no errors, otherwise false
// //     return Object.keys(newErrors).length === 0;
// //   }

// //   const formDataString = JSON.stringify(formData);

// //   function handleSubmit(event) {
// //     event.preventDefault();
// //     if (validateForm()) {
// //       // If no errors, proceed with form submission
// //       console.log(formDataString);
// //     } else {
// //       console.log("Validation failed:", errors);
// //     }
// //   }

// //   return (
// //     <>
// //       <form onSubmit={handleSubmit}>
// //         <label className="d-flex justify-content-center fw-semibold" htmlFor="department">Departments</label>
// //         <select
// //           className="container-fluid form-select"
// //           name="department"
// //           id="department"
// //           onChange={(event) => setDepartment(event.target.value)}
// //           value={department}>
// //           <option value="">Select...</option>
// //           <option value="HR">HR</option>
// //           <option value="PublicRelation">Public Relations</option>
// //           <option value="Support">Support</option>
// //         </select>
// //         <textarea
// //           className="container-fluid mt-2 form-control"
// //           name="message"
// //           id="message"
// //           value={message}
// //           onChange={(event) => setMessage(event.target.value)}
// //         />
// //         <div className=" container-fluid d-flex justify-content-center">
// //           <input
// //             className="me-2"
// //             type="checkbox"
// //             id="agreedToTerms"
// //             checked={agreedToTerms}
// //             onChange={(event) => setTerms(event.target.checked)}
// //           />
// //           <label className=" " htmlFor="agreedToTerms">I agree to the terms</label>
// //         </div>
// //         <button className="btn btn-outline-primary container-fluid mt-3" type="submit">Send</button>
// //       </form>
// //     </>
// //   );
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(<App />); */

// //===================================================================

// // const { useState } = React;
// // const { useForm } = ReactHookForm;

// // function ContactUsForm() {
// //   const [department, setDepartment] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [agreedToTerms, setAgreedToTerms] = useState(false);

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm();

// //   // function validateForm() {
// //   //   const newErrors = {};
// //   //   if (!department) newErrors.department = "Department is required.";
// //   //   if (!message) newErrors.message = "Message is required.";
// //   //   if (!agreedToTerms) newErrors.agreedToTerms = "You must agree to the terms.";
// //   //   return newErrors;
// //   // }

// //   function submit() {
// //     console.log("Form submitted:", { department, message, agreedToTerms });
// //   }
// //   // console.log(register("department", { required: "department is required" }));

// //   return (
// //     <form className="mt-4" onSubmit={handleSubmit(submit)}>
// //       <div className="mb-3">
// //         <label htmlFor="department" className="form-label">
// //           Department
// //         </label>
// //         <select
// //           id="department"
// //           className={`form-select ${errors.department ? "is-invalid" : ""}`}
// //           {...register("department", { required: "department is required" })}
// //           // name="department"
// //           // value={department}
// //           // onChange={(e) => setDepartment(e.target.value)}
// //         >
// //           <option value="">Select...</option>
// //           <option value="HR">Human Resources</option>
// //           <option value="PR">Public Relations</option>
// //           <option value="Support">Support</option>
// //         </select>
// //         {errors.department && <div className="invalid-feedback">{errors.department.message}</div>}
// //       </div>

// //       <div className="mb-3">
// //         <label htmlFor="message" className="form-label">
// //           Message
// //         </label>
// //         <textarea
// //           id="message"
// //           className={`form-control ${errors.message ? "is-invalid" : ""}`}
// //           {...register("message", { required: "message is required" })}
// //           cols="30"
// //           rows="5"
// //         />
// //         {errors.department && <div className="invalid-feedback">{errors.message.message}</div>}
// //       </div>

// //       <div className="mb-3 form-check">
// //         <input
// //           type="checkbox"
// //           id="agreedToTerms"
// //           className={`form-check-input ${errors.agreedToTerms ? "is-invalid" : ""}`}
// //           {...register("agreedToTerms", { required: "checkbox is required" })}
// //         />
// //         <label htmlFor="agreedToTerms" className="form-check-label">
// //           I agree to the terms and conditions.
// //         </label>
// //         {errors.department && <div className="invalid-feedback">{errors.agreedToTerms.message}</div>}
// //       </div>

// //       <button type="submit" className="btn btn-primary">
// //         Send
// //       </button>
// //     </form>
// //   );
// // }

// // function App() {
// //   return (
// //     <div className="container">
// //       <ContactUsForm />
// //     </div>
// //   );
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// //=====================================================

// //main.js//main.js
const { useState, useEffect } = React;
// import { useForm } from 'react-hook-form';
const { useForm } = ReactHookForm;

const BASE_URL = "http://localhost:9000";

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return "Please sign in again.";
    case 403:
      return "You do not have permission to view the data requested.";
    default:
      return "There was an error saving or retrieving data.";
  }
}

async function checkStatus(response) {
  if (response.ok) return response;

  const httpError = {
    status: response.status,
    statusText: response.statusText,
    url: response.url,
    body: await response.text(),
  };
  console.log(`http error status: ${JSON.stringify(httpError, null, 1)}`);

  let errorMessage = translateStatusToErrorMessage(httpError.status);
  throw new Error(errorMessage);
}

function parseJSON(response) {
  return response.json();
}

function delay(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

const url = `${BASE_URL}/teams`;
const teamAPI = {
  list() {
    return fetch(url).then(checkStatus).then(parseJSON);
  },
  find(id) {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },
  insert(team) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team),
    })
      .then(checkStatus)
      .then(parseJSON);
  },
};

function TeamList() {
  const [busy, setBusy] = useState(false);
  const [teams, setTeams] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);

  async function loadTeams() {
    try {
      setBusy(true);
      let data = await teamAPI.list();
      setTeams(data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(function () {
    loadTeams();
  }, []);

  return (
    <div className="list mt-2">
      {busy && <p>Loading...</p>}
      {errorMessage && <div className="alert alert-danger"> {errorMessage}</div>}
      {teams?.map((team) => (
        <div className="card p-4" key={team.name}>
          <div className="container d-flex justify-content-between ps-0">
            <strong>{team.name}</strong>
            <div>
              <NavLink className="btn btn-outline-secondary" to={`/edit/${team.id}`}>
                Edit
              </NavLink>
            </div>
          </div>

          <div>{team.division}</div>
        </div>
      ))}
    </div>
  );
}

// function App() {

//   return (
//     <div className="container">
//       <TeamList />
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const {
  BrowserRouter: Router,
  Route,
  Routes,
  Link,
  NavLink,
  Navigate,
  useParams,
  useLocation,
  useNavigation,
  useNavigate,
} = window.ReactRouterDOM;

function HomePage() {
  return <h2>Home</h2>;
}

function AboutPage() {
  return <h2>About</h2>;
}

function ContactPage() {
  return <h2>Contact</h2>;
}
function TeamsPage() {
  return (
    <>
      <div className="container d-flex justify-content-between mb-3">
        <h2>Teams</h2>
        <NavLink className="btn btn-outline-primary mt-2" to="/teams/create">
          Add Team
        </NavLink>
      </div>
      <TeamList />
    </>
  );
}

function TeamEditPage() {
  const { id } = useParams();
  const [team, setTeam] = useState(undefined);

  async function loadTeam() {
    let data = await teamAPI.find(id);
    setTeam(data);
  }

  useEffect(() => {
    loadTeam();
  }, [id]);

  return (
    <div>
      <header className=" fs-4"> {team?.name}</header>
      <hr />
      <TeamForm team={team} />
    </div>
  );
}

function TeamForm({ team }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(undefined)
  const navigate = useNavigate();

  async function save(team) {
    try{
      setBusy(true);
      let newTeam = await teamAPI.insert(team);
      navigate("/teams")

    } catch(error){
      setError(error.message)
    }
    finally {
      setBusy(false)
    }
  }

  return (
    <>
    {busy && <p>Saving...</p>}
    {error && <div className="alert alert-danger">{error}</div>}
    <div className="mb3">
      <form className="w-25" onSubmit={handleSubmit(save)}>
        <label className=" form-label" htmlFor="teamName">
          Team Name
        </label>
        <input
          type="text"
          id="teamName"
          className={`form-control ${errors.title && "is-invalid"}`}
          {...register("name", { required: "Team Name is required" })}
          
          />
        <p className="invalid-feedback">{errors.title?.message}</p>
        <label className=" form-label" htmlFor="division">
          Division
        </label>
        <input type="text" id="division" className={`form-control ${errors.title && "is-invalid"}`}
          {...register("division", { required: "Division is required" })}  />
        <div className="d-flex mt-3 gap-2">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
          <NavLink className="btn btn-outline-primary" to="/teams">
            Cancel
          </NavLink>
        </div>
      </form>
    </div>
</>
  );
}

function Players() {
  return <h2>Players</h2>;
}

function CreateTeamPage() {
  return (
    <>
      <TeamForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="my-4 mb-5">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/teams">
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/players">
                Players
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="players" element={<Players />} />
            <Route path="/teams/create" element={<CreateTeamPage />} />
            <Route path="edit/:id" element={<TeamEditPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
