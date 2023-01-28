import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/productForm";

function EditProduct( ) {
    const [product, setProduct] = useState(); 
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const  params = useParams();
    const id = params.id;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id])
    const updateProduct = (data) => {
        axios.put('http://localhost:8000/api/product/' + id, data)
            .then(res => console.log(res))
            .then(()=> navigate(`/${id}`));
    }
    return (
        <div>
            <h2>Update a Product</h2>
            { loaded && (
                <ProductForm handleSubmit={updateProduct} initialTitle={product?.title} initialDescription={product?.description} initialPrice={product?.price} />
            )}
            </div>
    )
}

export default EditProduct;