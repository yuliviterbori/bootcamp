import { useState } from 'react'

const Form = ( {handleNewColor}) => {
    const [newColor, setNewColor] = useState("")

    const handleAdd = (e) =>{
        e.preventDefault();
        handleNewColor(newColor);
        setNewColor("");
    }

    return(
        <form>
            <label>
                Color
            </label>
            <input value={newColor} onChange={(e)=>setNewColor(e.target.value)} style={{margin: '0 10px'}}/>
            <button onClick={handleAdd} type="submit">Add</button>
        </form>
    )
}

export default Form;