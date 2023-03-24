import React,{useState} from "react";


const AddProducts = (props) => {
    const [productId, setId]= useState("");
    const [sellingPrice, setPrice]= useState("");
    const [ProductName, setName]= useState("");
  
  
    let total2;
    const submit = (e) => {
        e.preventDefault();
        if(!productId || !sellingPrice || !ProductName){
            alert("fill all the fields")
        }
        props.addProducts(productId,sellingPrice,ProductName);
        total2 = parseInt(props.total) + parseInt(sellingPrice);
        setId('');
        setName('');
        setPrice('');

    }
  
  return (
    <div>
      <h2>AddProduct</h2>
      <form onSubmit={submit}>
        <label>Product Id</label>
        <input type="number" value={productId} id="productId" className="productId" onChange={(e)=>{setId(e.target.value)}} />
        <label>Selling Price</label>
        <input type="number" value={sellingPrice} id="sellingPrice" className="sellingPrice" total2={total2}  onChange={(e)=>{setPrice(e.target.value)}}/>
        <label>Product Name</label>
        <input type="text" value={ProductName} id="productName" className="productName" onChange={(e)=>{setName(e.target.value)}} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
