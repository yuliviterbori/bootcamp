function List({title, items}) {
    if(items.length <1 ){
        return <></>
    }
    return ( <>
    <h4>{title}</h4>
    <ul>
        {
            items.map(itm => <li key={itm}>{itm}</li>)
        }
    </ul>
    </> );
}

export default List;