import List from "./list";
import style from './showData.module.css'
import Error from './error';
import Item from "./item";

function ShowData({data, err}) {
    
    return (<>
    { data && (
        <div className={style.container}>
            {data?.name && (<h2>{data.name}</h2>)}
            {data?.title && (<h2>{data.title}</h2>)}
            <div className={style.table}>

            {Object.keys(data).map( (key, index) => {
                const title = key!=="name" && key!=="title" && key.replace(/_/g, ' ').toUpperCase();

                if(typeof(data[key]) === 'string'){
                    return (<Item key={index} title={title} description={data[key]} />)
                }
                if(typeof(data[key]) === 'object'){
                    return (<List key={index} title={key.replace(/_/g, ' ').toUpperCase()} items={data[key]} />)
                }
                return (<></>)
                })}

            </div>
        </div>
    )}

    { err && 
        <Error />
    }

    </>
    
    );
}

export default ShowData;