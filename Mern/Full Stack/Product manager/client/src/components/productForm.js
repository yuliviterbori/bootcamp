import { useState } from 'react'

function ProductForm( {handleSubmit, initialTitle="", initialPrice="", initialDescription=""} ) {
    const [title, setTitle] = useState(initialTitle); 
    const [description, setDescription] = useState(initialDescription);
    const [price, setPrice] = useState(initialPrice);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        handleSubmit({title, price, description});
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <textarea type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;