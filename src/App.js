import "./App.css";
import React, { useState, useEffect } from "react";
import AddProducts from "./Components/AddProducts";
import ProductList from "./Components/ProductList";

function App() {
  let total=0;
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    setTodo(
      pl.filter((e) => {
        
        return e !== todo;
      })
    );
    localStorage.getItem("todos", JSON.stringify(pl));
  };

  const addProducts = (productId, sellingPrice, ProductName) => {
    console.log(productId, sellingPrice, ProductName, "adding todo");
    let sno;
    if (pl.length === 0) {
      sno = 1;
    } else {
      sno = pl[pl.length - 1].sno + 1;
    }

    let myproducts = {
      sno: sno,
      productId: productId,
      sellingPrice: sellingPrice,
      ProductName: ProductName,
    };
    
    setTodo([...pl, myproducts]);
    console.log(myproducts);
  };

  const [pl, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(pl));
  }, [pl]);

  // let pl = [
  //   { sno: 1, sellingPrice: 1000, ProductName: "book" },
  //   { sno: 2, sellingPrice: 2000, ProductName: "specs" },
  //   { sno: 3, sellingPrice: 3000, ProductName:" mal" },
  //   { sno: 4, sellingPrice: 4000, ProductName: "daru "},
  //   { sno: 5, sellingPrice: 5000, ProductName: "game" },
  // ];

  return (
    <div className="App">
      <AddProducts addProducts={addProducts} total= {total} />
      <ProductList pl={pl} onDelete={onDelete} total={total} />
    </div>
  );
}

export default App;
