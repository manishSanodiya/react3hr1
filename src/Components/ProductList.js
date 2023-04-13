import React from "react";
import ProductItem from "./ProductItem";
const ProductList = (props) => {
  let total = 0
 props.pl.map((t) => {
   total += Number(t.sellingPrice)
   
  })
  
  // {parsInt(props.total)+parsInt(t.sellingPrice)}
  return (
    <div>
      <h4>ProductList</h4>
      <div>
        {props.pl.length === 0
          ? "No products To Display"
          : props.pl.map((t) => {
              return (
                <>
                  <ProductItem
                    todo={t}
                    key={t.sno}
                    onDelete={props.onDelete}
                    
                  />
                  
                </>
              );
            })}
        <h4>Total Price is Rs:{total} </h4>
      </div>
    </div>
  );
};

export default ProductList;
