import { useEffect, useState } from "react";
import axios from "axios";


function ListOfProducts() {
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(res => setProducts(res.data))
        .catch(err => console.log("There was an errer getting products", err))
    })

    return ( <div>
        <h2>All Products:</h2>
        { products.map(pro => (<div><a href={`/${pro._id}`}>
        { pro.title }
        </a></div>
        ))}
    </div> );
}

export default ListOfProducts;