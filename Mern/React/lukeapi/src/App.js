import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ShowData from './components/showData';
import Error from './components/error';

const options={
  "people": "https://swapi.dev/api/people/", 
  "planets": "https://swapi.dev/api/planets/", 
  "films": "https://swapi.dev/api/films/", 
  "species": "https://swapi.dev/api/species/", 
  "vehicles": "https://swapi.dev/api/vehicles/", 
  "starships": "https://swapi.dev/api/starships/"
}
function App() {
  const [selectedOption, setSelectedOption] = useState("people");
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const [err, setErr] = useState(false)

  const search = async () =>{
    setData({});setErr(false)
    try{
      const res = await axios.get(`${options[selectedOption]}${id}`);
      setData(res.data);
    }catch(error){
      setErr(true);
    }
  }
  return (
    <div className="App">
      <select
      value={selectedOption}
      onChange={e=>setSelectedOption(e.target.value)}
      >
        {
          Object.keys(options).map(itm => <option key={itm} value={itm}>{itm}</option>)
        }
      </select>
      <input type={'number'} value={id} onChange={(e)=>setId(e.target.value)} />
      <button onClick={search}>Search</button>
      { data && (
        <ShowData data={data} />
      )}
      { err && 
        <Error />
    

      }
    </div>
  );
}

export default App;
