import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

 const Detail =  props => {
    const [person, setPerson] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <p>
                <Link to={"/people/" + person._id + "/edit"}>Edit</Link>
            </p>
        </div>
    )
}

export default Detail;