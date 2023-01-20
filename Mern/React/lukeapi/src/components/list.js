function List({title, items}) {
    return ( <>
    <h4>{title}</h4>
    <ul>
        {
            items.map(itm => <li>{itm}</li>)
        }
    </ul>
    </> );
}

export default List;