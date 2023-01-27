import { useState } from 'react'
import axios from 'axios'

function CreateProductForm() {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setFirstName] = useState(""); 
    const [description, setLastName] = useState("");
    const [price, setPrice] = useState();
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange para actualizar title y description
    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange = {(e)=>setFirstName(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <textarea type="text" onChange = {(e)=>setLastName(e.target.value)} value={description}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default CreateProductForm;