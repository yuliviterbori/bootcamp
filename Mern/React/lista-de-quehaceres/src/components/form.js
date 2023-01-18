import { useState } from 'react'
import style from './form.module.css'
const Form = ({handleAdd}) =>{
    const [text, setText] =useState("")
    return(
        <form className={style.form}>
            <input type={text} value={text} onChange={e => setText(e.target.value)} placeholder="I have to..." />
            <br />
            <button className={style.button} type='submit' onClick={e=>{e.preventDefault();setText("");handleAdd(text)}}>Add</button>
        </form>
    )
}
export default Form;