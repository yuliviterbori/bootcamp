import { useContext } from 'react';
import style from './navbar.module.css'
import NameContext from '../context/nameContext';

function Navbar() {
    const name = useContext(NameContext).name;
    return ( <div className={style.navbar}>
        Hi {name}
    </div> );
}

export default Navbar;