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
        { firstName && firstName?.length<2 && (
          <span>First Name must be at least 2 characters</span>
        )}
        <div className='formEntry'>
          <label for="lastName">Last Name</label>
          <input id="lastName" type={"text"} value={lastName} onChange={e=>setLastName(e.target.value)}></input>
        </div>
        { lastName && lastName?.length<2 && (
          <span>Last Name must be at least 2 characters</span>
        )}
        <div className='formEntry'>
          <label for="email">Email</label>
          <input id="email" type={"email"} value={email} onChange={e=>setEmail(e.target.value)}></input>
        </div>
        { email && email?.length<2 && (
          <span>Email must be at least 2 characters</span>
        )}
        <div className='formEntry'>
          <label for="password">Password</label>
          <input id="password" type={"password"} value={password} onChange={e=>setPassword(e.target.value)}></input>
        </div>
        { password && password?.length<8 && (
          <span>Password must be at least 8 characters</span>
        )}
        <div className='formEntry'>
          <label for="passwordc">Confirm Password</label>
          <input id="passwordc" type={"password"} value={passwordC} onChange={e=>setPasswordC(e.target.value)}></input>
        </div>
        { password && passwordC && password !== passwordC && (
          <span>Password must match</span>
        )}
      </form>
    </div>
  );
}

export default App;
