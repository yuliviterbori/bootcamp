import style from './boxes.module.css'

const Boxes = ({items})=> {
    console.log("items",items)
    return (
    <div className={style.container}>
        {items.map((itm, idx) => <div key={idx} style={{backgroundColor: itm}} className={style.item} />
        )}
    </div>
)}
export default Boxes;