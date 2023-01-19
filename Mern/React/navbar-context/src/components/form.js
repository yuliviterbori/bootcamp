import { useContext } from 'react';
import NameContext from '../context/nameContext';

function Form() {
    const context = useContext(NameContext);

    return ( <form>
        <label>Your Name: </label>
        <input value={context.name} onChange={e => {context.setName(e.target.value);}} />
    </form>);
}

export default Form;