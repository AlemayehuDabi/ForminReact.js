import { useState, useEffect, useRef } from "react";
// import Input from "./Input.jsx";
import Display from "./Display.jsx";
import Data from "./data.json";

const Form = () => {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
  });

  const [display, setDisplay] = useState({
    firstDisplay: "",
    lastDisplay: "",
    emailDisplay: "",
  });

  const handleFirstChange = (e) => {
    setForm({ ...form, first: e.target.value });
  };

  const handleLastChange = (e) => {
    setForm({ ...form, last: e.target.value });
  };
  const handleEmailChange = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay({
      firstDisplay: form.first,
      lastDisplay: form.last,
      emailDisplay: form.email,
    });
    setForm({
      first: "",
      last: "",
      email: "",
    });
  };

  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputref}
          onChange={handleFirstChange}
          value={form.first}
          placeholder="Enter your Firstname"
        />

        {Data.filter((val) => {
          if (form.first === "") {
            return;
          } else {
            return val.firstname
              ?.toLowerCase()
              ?.includes(form.first.toLowerCase());
          }
        }).map((val, index) => (
          <p key={index}>{val.firstname}</p>
        ))}
        <input
          onChange={handleLastChange}
          value={form.last}
          placeholder="Enter your Lastname"
        />
        {Data.filter((val) => {
          if (form.last === "") {
            return;
          } else {
            return val.lastname
              ?.toLowerCase()
              ?.includes(form.last.toLowerCase());
          }
        }).map((val, index) => (
          <p key={index}>{val.lastname}</p>
        ))}
        <input
          onChange={handleEmailChange}
          value={form.email}
          placeholder="Enter your Emailname"
        />
        {Data.filter((val) => {
          if (form.email === "") {
            return;
          } else {
            return val.email?.toLowerCase()?.includes(form.email.toLowerCase());
          }
        }).map((val, index) => (
          <p key={index}>{val.email}</p>
        ))}
        <button type="submit">Submit</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setDisplay({
              firstDisplay: "",
              lastDisplay: "",
              emailDisplay: "",
            });
          }}
        >
          Clear
        </button>
      </form>
      <div>
        <Display What="First-Name" Display={display.firstDisplay} />
        <Display What="Last-Name" Display={display.lastDisplay} />
        <Display What="Email-Name" Display={display.emailDisplay} />
      </div>
    </div>
  );
};
export default Form;
