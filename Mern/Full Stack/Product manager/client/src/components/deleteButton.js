import axios from "axios";

function DeleteButton({productId, onDelete}) {
    const deleteProduct = () =>{
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then(res => {
            onDelete(productId)
        })
    }

    return ( <button onClick={deleteProduct}>Delete</button> );
}

export default DeleteButton;