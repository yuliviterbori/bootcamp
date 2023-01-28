import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./deleteButton";


function ListOfProducts(  ) {
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(res => setProducts(res.data))
        .catch(err => console.log("There was an errer getting products", err))
    })

    const onDelete = (productId) =>{
        const newProducts = products.filter(pro => pro._id!==productId);
        setProducts(newProducts)
    }

    return ( <div>
        <h2>All Products:</h2>
        { products.map(pro => (<div key={pro._id}><Link to={`/${pro._id}`}>
        { pro.title }
        </Link>
        <DeleteButton productId={pro._id} onDelete={onDelete} />
        </div>
        ))}
    </div> );
}

export default ListOfProducts;