import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail( ) {
    const [product, setProduct] = useState({});
    const  params = useParams();
    const id = params.id;
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            navigate("/")
        })
    }

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={`/${product._id}/edit`}>Edit</Link><button onClick={()=>deleteProduct(product._id)}>Delete</button></p>
        </div>
    )
}

export default ProductDetail;