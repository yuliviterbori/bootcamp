import { useEffect, useState } from 'react';
import ShowData from './showData';
import util from "./util";

const options = util.options;
const search = util.search;

function Form() {
    const [selectedOption, setSelectedOption] = useState("people");
    const [id, setId] = useState("");
    const [data, setData] = useState({});
    const [err, setErr] = useState(false);

    const handleClick = async () => {
       const newData = await search(id,selectedOption);
       setData(newData.data);
       setErr(newData.err);
    }
    return ( <>
        <label>Search for: </label>
          <select
          value={selectedOption}
          onChange={e=>setSelectedOption(e.target.value)}
          >
            {
              Object.keys(options).map(itm => <option key={itm} value={itm}>{itm}</option>)
            }
          </select>
          <label>ID: </label>
          <input type={'number'} value={id} onChange={(e)=>setId(e.target.value)} />
          <button onClick={handleClick}>Search</button>
          <ShowData data={data} err={err} />
    </> );
}

export default Form;