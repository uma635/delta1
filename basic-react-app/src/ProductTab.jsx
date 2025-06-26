// import Product from "./Product.jsx";

// function ProductTab(){
//    // let features = ["hi-tech","durable" ,"fast"];
//     //let features2 ={a:"hi-tech", b:"durable", c:"fast"};
//     //let features = [<li>"hi-tech"</li>,<li>"durable" </li>,<li>"fast"</li>];
//     return(
//         <>
//             <Product title="phone" price={30000} />
//              <Product title="pc" price={40000}/>
//             <Product title="pen" price={30}/> 
//         </>
//     );
// }

// export default ProductTab;



// import Product from "./Product.jsx";

// function ProductTab(){
//    // let features = ["hi-tech","durable" ,"fast"];
//     //let features2 ={a:"hi-tech", b:"durable", c:"fast"};
//     //let features = [<li>"hi-tech"</li>,<li>"durable" </li>,<li>"fast"</li>];
//     return(
//         <>
//             <Product title="phone" price={30000} />
//              <Product title="pc" price={40000}/>
//             <Product title="pen" price={30}/> 
//         </>
//     );
// }

// export default ProductTab;

//activity

import Product from "./Product.jsx";

let styles = {
    display: "flex",
    flexWrap: "wrap",
    justyfyContent: "center",
    alignItems: "center",

};
function ProductTab(){
return(
        <div style={styles}>
       
            <Product title="Logitech MX Master" idx = {0}/>
            <Product title="Apple pencile (2nd)"  idx = {1}/>
            <Product title="Zebronic Zeb-transformer" idx = {2} /> 
            <Product title="Pentronics Toad 23"  idx = {3}/>
        </div>
    );
}

export default ProductTab;