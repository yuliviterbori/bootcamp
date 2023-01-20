import { useParams } from "react-router-dom";

function Number() {
    let { number } = useParams();
    if(isNaN(+number)){
        return (
            <div>
        The word is: {number}
    </div>
        )
    }
    return ( <div>
        The number is: {number}
    </div> );
}

export default Number;