import List from "./list";

function ShowData({data}) {
    console.log(data)
    return ( <h2>
        {data.name}
        {data?.films && <List title={"Films"} items={data?.films} />}
    </h2> );
}

export default ShowData;