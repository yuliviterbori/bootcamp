import { useReducer} from 'react';
import './App.css';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { id, value } = e.target;
        dispatch({
            type: id,
            payload: value
        });
    }
  return (
    <div className="App">
      <h2>Form</h2>
      <form className='form'>
        <div className='formEntry'>
          <label for="firstName">First Name</label>
          <input id="firstName" type={"text"} value={state.firstName.value} onChange={handleChange}></input>
        </div>
        { state.firstName && state.firstName?.length<2 && (
          <span>First Name must be at least 2 characters</span>
        )}
        <div className='formEntry'>
          <label for="lastName">Last Name</label>
          <input id="lastName" type={"text"} value={state.lastName.value} onChange={handleChange}></input>
        </div>
        { state.lastName && state.lastName?.length<2 && (
          <span>Last Name must be at least 2 characters</span>
        )}
        <div className='formEntry'>
          <label for="email">Email</label>
          <input id="email" type={"email"} value={state.email.value} onChange={handleChange}></input>
        </div>
        {state.email && state.email?.length<2 && (
          <span>Email must be at least 2 characters</span>
        )}
      </form>
    </div>
  );
}

export default App;
