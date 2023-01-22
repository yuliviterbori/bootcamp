import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


function Item({title, description}) {
    const [des, setDes] = useState("");
    const addNewDes = async (description) => {
        try{
            const response = await axios.get(description);
            setDes(response.data?.name)
        }
        catch(err){
            console.error(err);
        }
    }
    useEffect(()=>{
        if(description?.includes("https://swapi.dev/api") && title!=="URL"){
            addNewDes(description);
        }
        else{
            setDes(description);
        }
    }, [description])

    if(!title || !description){
        return <></>
    }
    return ( 
    <>
        <h4>{title}</h4>
        <span>{des}</span>
    </> 
    );
}

export default Item;