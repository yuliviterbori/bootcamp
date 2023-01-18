import style from './item.module.css'

const ListItems = ({items, onDelete, handleChecked}) => {
    return(
        <div >
        {
            items.map(item =>{
                return(
                    <div key={item.id} className={style.item}>
                    <label className={item.done ? style.labeldone : ''}>{item.text}</label>
                    <input type="checkbox" checked={item.done} onChange={e => handleChecked(item.id,e.target.checked)}/>
                    <button onClick={()=>onDelete(item.id)}>Delete</button>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ListItems;