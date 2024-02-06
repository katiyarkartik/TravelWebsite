import React from "react";
import { useState } from "react";

const Filter = () => {
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    ];
    const [a, seta] = useState("");
    const [checkStock, setcheckStock] = useState(true);
    const handleStock = () => {
        let stock = !checkStock;
        setcheckStock(stock);
        console.log(checkStock);
    }
    return (
        <div className="filter">
            <input type="text" name="" id="" onChange={(e) => seta(e.target.value)} />
            {/* 
      {console.log(a)} */}

            {/* {a === "Fruits" ? (
        <div>{console.log("fruits")}</div>
      ) : a == "Vegetables" ? (
        <div>{console.log("vege")}</div>
      ) : (
        <div></div>
      )} */}
            <input type="checkbox" onClick={handleStock} />
            {
                products.map((product) => (

                   product.stocked && checkStock ?( 
                  <li key={product.name}> { product.name }</li>):null
              ))
          }
    </div>
  );
};

export default Filter;
