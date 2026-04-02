import { useState, type ChangeEvent } from "react";
import { FormEvent } from "react";

function Form_validator() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [eemail, seteemail] = useState("");
  const [cnumber, setcnumber] = useState("");
  const [gender, setgender] = useState("");
  const [subjects, setSubjects] = useState({
    python: false,
    c_language: false,
    sql: false,
  });
  type Subject = "python" | "c_language" | "sql";
  const [resume, setresume] = useState("");

  const handleSubjectChange = (sub: Subject) => {
    setSubjects((prev) => ({ ...prev, [sub]: !prev[sub] }));
  };

  const handleReset = () => {
    setfname("");
    setlname("");
    setSubjects({
      python: false,
      c_language: false,
      sql: false,
    });
    setcnumber("");
    seteemail("");
    setgender("");
    setresume("");
  };

  const handleSubmitform = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fname, lname, resume, eemail, cnumber, gender, subjects);
  };

  return (
    <>
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setfname(e.target.value)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setlname(e.target.value)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              seteemail(e.target.value)
            }
            required
          />
          <br />
          <label htmlFor="CNumber">Contact Number*</label>
          <br />
          <input
            type="number"
            id="cnumber"
            placeholder="Enter mobile number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setcnumber(e.target.value)
            }
            name="cnumber"
          />
          <br />
          <label htmlFor="Gender"> Gender* </label> <br />
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(e) => setgender(e.target.value)}
          />
          <label htmlFor="male">Male </label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(e) => setgender(e.target.value)}
          />
          <label htmlFor="female">Female </label>
          <input
            type="radio"
            name="gender"
            id="others"
            value="others"
            onChange={(e) => setgender(e.target.value)}
          />
          <label htmlFor="others">Others</label>
          <br />
          <label htmlFor="subjects">Best Subjects</label>
          <br />
          <input
            type="checkbox"
            name="subjects"
            id="python"
            value="python"
            onChange={() => handleSubjectChange("python")}
          />
          <label htmlFor="python">Python</label>
          <input
            type="checkbox"
            name="subjects"
            id="c_language"
            value="c_language"
            onChange={() => handleSubjectChange("c_language")}
          />
          <label htmlFor="c_language">C language</label>
          <input
            type="checkbox"
            name="subjects"
            id="sql"
            value="sql"
            onChange={() => handleSubjectChange("sql")}
          />
          <label htmlFor="sql">PL/SQL</label>
          <br />
          <label htmlFor="resume">Upload Resume*</label>
          <br />
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setresume(e.target.value)
            }
          />
          <br />
          <button
            type="reset"
            id="reset"
            name="reset"
            className="button"
            onClick={() => handleReset()}
          >
            {" "}
            Reset{" "}
          </button>
          <form onSubmit={handleSubmitform}>
            <button
              type="submit"
              id="submit"
              name="submit"
              className="button"

              // onClick={(e) => handleSubmitform(e)}
            >
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form_validator;
