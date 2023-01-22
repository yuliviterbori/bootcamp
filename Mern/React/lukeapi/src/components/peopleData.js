import { useEffect, useState } from 'react';
import util from "./util";
import ShowData from './showData';

const search = util.search;


function PeopleData( {id} ) {
    const [data, setData] = useState({});
    const [err, setErr] = useState(false);

    const loadData = async (id) => {
        const newData = await search(id,"people");
        setData(newData.data);
        setErr(newData.err);
    }

    useEffect(()=>{
        loadData(id);
    }, [id])
    return ( 
        <ShowData data={data} err={err} /> );
}

export default PeopleData;