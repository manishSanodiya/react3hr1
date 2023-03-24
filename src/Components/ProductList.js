import React from "react";
import ProductItem from "./ProductItem";
const ProductList = (props) => {
  
  
  // {parsInt(props.total)+parsInt(t.sellingPrice)}
  return (
    <div>
      <h4>ProductList</h4>
      <div>
        {props.pl.length === 0
          ? "No products To Display"
          : props.pl.map((t, b) => {
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
        <h4>Total Price is Rs:{props.total2} </h4>
      </div>
    </div>
  );
};

export default ProductList;
