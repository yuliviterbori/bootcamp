import ListOfProducts from "../components/listOfProducts";
import ProductForm from "../components/productForm";
import axios from "axios";

function Main() {
    const onCreateProduct = async (data) => {
        try{
            const res =  axios.post('http://localhost:8000/api/product', data)
            console.log(res)
            return res;

        } catch(err){
            console.log(err)
        }
    }
    return ( <>
    <h2>
        Product Manager
    </h2>
    <ProductForm handleSubmit={onCreateProduct} />
    <hr/>
    <ListOfProducts />
    </> );
}

export default Main;