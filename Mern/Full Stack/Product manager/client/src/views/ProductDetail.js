import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import DeleteButton from "../components/deleteButton";

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

    const onDelete = () =>{
        navigate("/")
    }

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>
                <Link to={`/${product._id}/edit`}>Edit</Link>
                <DeleteButton onDelete={onDelete} productId={product._id} />
            </p>
        </div>
    )
}

export default ProductDetail;