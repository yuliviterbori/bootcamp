import { useState } from 'react';
import './App.css';

function App() {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordC, setPasswordC ] = useState("");
  return (
    <div className="App">
      <h2>Form</h2>
      <form className='form'>
        <div className='formEntry'>
          <label for="firstName">First Name</label>
          <input id="firstName" type={"text"} value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
        </div>
        <div className='formEntry'>
          <label for="lastName">Last Name</label>
          <input id="lastName" type={"text"} value={lastName} onChange={e=>setLastName(e.target.value)}></input>
        </div>
        <div className='formEntry'>
          <label for="email">Email</label>
          <input id="email" type={"email"} value={email} onChange={e=>setEmail(e.target.value)}></input>
        </div>
        <div className='formEntry'>
          <label for="password">Password</label>
          <input id="password" type={"password"} value={password} onChange={e=>setPassword(e.target.value)}></input>
        </div>
        <div className='formEntry'>
          <label for="passwordc">Confirm Password</label>
          <input id="passwordc" type={"password"} value={passwordC} onChange={e=>setPasswordC(e.target.value)}></input>
        </div>
      </form>
      <h2>Data</h2>
      <div className='dataEntry'>
        <span>First Name</span>
        <span>{firstName}</span>
      </div>
      <div className='dataEntry'>
        <span>Last Name</span>
        <span>{lastName}</span>
      </div>
      <div className='dataEntry'>
        <span>Email</span>
        <span>{email}</span>
      </div>
      <div className='dataEntry'>
        <span>Password</span>
        <span>{password}</span>
      </div>
      <div className='dataEntry'>
        <span>Confirm Password</span>
        <span>{passwordC}</span>
      </div>
    </div>
  );
}

export default App;
