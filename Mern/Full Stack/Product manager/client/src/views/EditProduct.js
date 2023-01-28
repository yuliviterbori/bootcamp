import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct( ) {
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const navigate = useNavigate();
    const  params = useParams();
    const id = params.id;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .then(()=> navigate(`/${id}`));
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <textarea type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default EditProduct;