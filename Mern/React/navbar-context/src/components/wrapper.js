

function Wrapper( {children} ) {
    return ( 
    <div style={{maxWidth: "600px", margin: "0 auto"}}>
        {children}
    </div> 
    );
}

export default Wrapper;