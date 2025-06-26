// import './Product.css';

// function Product({title,price}){

//    // const list = features.map((feature)  => <li>{feature}</li>);
//     if (price>40000){
//         return
//         (
//             <div >
//             <h3>{title}</h3>
//             <h5>price:{price}</h5>
//             <p>Discount of 5%</p>
//             </div>
//         );
//     }
//     else{
//         return
//         (
//             <div className='Product'>
//             <h3>{title}</h3>
//             <h5>price:{price}</h5>
            
//             </div>
//         );

//     }
 
// }
// export default Product;


   // return(
    //     <div className='Product'>
    //         <h3>{title}</h3>
    //         <h5>price : {price}</h5>
    //         {/* <p>{features}</p> */}
    //      {/* <p>{features2}</p>  */}
    //      {/* <p>{features.map((feature)=><li>{feature}</li>)}</p> */}
    //     </div>
    // );

    // import './Product.css';
    // function Product({title, price}){
    //     //  let isDiscount = price > 30000 ? " Discount of 5%" : "";
    //     let isDiscount = price >30000;
    //      let styles = {backgroundColor : isDiscount ? "pink" : ""};
         
    //     return(
    //         <div className="Product" style={styles}>
    //             <h3>{title}</h3>
    //             <h5> price: {price}</h5>
    //             {isDiscount && <p>Discount of 5%</p>}
    //         </div>
    //     );
    // }
    // export default Product;

 //activity


    import './Product.css';
    import Price from "./Price";

    function Product({title,idx }){
        let oldPrices= ["12,495","11,900","1,599","599"];
        let newPrices = ["8,999","9,199","899","278"];
        let description =[["8,000 DPI","5 Programmable buttons"],
        ["intuitive surface","designed for iPad pro",],
         ["designed for iPad pro","intuitive surface"],
          ["wirless","optical orientation"],];
       return(
            <div className="Product" >
               <h4>{title}</h4>
               <p>{description[idx][0]}</p> 
               <p>{description[idx][1]}</p>
               <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]} />
            </div>
        );
    }
    export default Product;