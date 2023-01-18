import style from './pestanas.module.css'


const Pestanas = ({items, activeId, handleClick}) =>{


    return(
        <>
        <div className={style.tabContainer} >
            {items.map(itm => <button key={itm.id} className={activeId === itm.id ? ` ${style.tab} ${style.activeTab}` : style.tab} onClick={()=> handleClick(itm.id)}>Tab {itm.id} </button>)}
        </div>
        <div className={style.content}>
            {items.find(itm => itm.id === activeId)?.content}
        </div>
        </>
    )
}

export default Pestanas;