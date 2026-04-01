import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Submit Form</h1>

      <div className="formsubmit">
        <label htmlFor="fname"> First Name*</label>
        <br />
        <input
          type="text"
          id="fname"
          placeholder="First Name"
          name="fname"
          required
        />
        <br />
        <label htmlFor="lname">Last Name*</label>
        <br />
        <input
          type="text"
          id="lname"
          placeholder="Last Name"
          name="lname"
          required
        />
        <br />
        <label htmlFor="email">Email Address*</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          name="email"
          required
        />
        <br />
        <label htmlFor="CNumber">Contact Number*</label>
        <br />
        <input
          type="number"
          id="cnumber"
          placeholder="Enter mobile number"
          name="cnumber"
        />
        <br />
        <label htmlFor="Gender"> Gender* </label> <br />
        <input type="radio" name="gender" id="male" value="male" />
        <label htmlFor="male">Male </label>
        <input type="radio" name="gender" id="female" value="female" />
        <label htmlFor="female">Female </label>
        <input type="radio" name="gender" id="others" value="others" />
        <label htmlFor="others">Others</label>
        <br />
        <label htmlFor="subjects">Best Subjects</label>
        <br />
        <input type="checkbox" name="subjects" id="python" value="python" />
        <label htmlFor="python">Python</label>
        <input
          type="checkbox"
          name="subjects"
          id="c_language"
          value="c_language"
        />
        <label htmlFor="c_language">C language</label>
        <input type="checkbox" name="subjects" id="sql" value="sql" />
        <label htmlFor="sql">PL/SQL</label>
        <br />
        <label htmlFor="resume">Upload Resume*</label>
        <br />
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
        <br />
        <button type="reset" id="reset" name="reset" className="button">
          {" "}
          Reset{" "}
        </button>
        <button type="submit" id="submit" name="submit" className="button">
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
