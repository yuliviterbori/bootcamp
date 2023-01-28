import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ListOfProducts(  ) {
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(res => setProducts(res.data))
        .catch(err => console.log("There was an errer getting products", err))
    })

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            const newProducts = products.filter(pro => pro._id!==id);
            setProducts(newProducts)
        })
    }

    return ( <div>
        <h2>All Products:</h2>
        { products.map(pro => (<div><Link to={`/${pro._id}`}>
        { pro.title }
        </Link><button onClick={()=>deleteProduct(pro._id)}>Delete</button></div>
        ))}
    </div> );
}

export default ListOfProducts;