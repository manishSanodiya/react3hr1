import React from 'react'

const ProductItem = ({todo,onDelete}) => {
  return (
    <div>
     
      <p>{todo.ProductName}, Price= {todo.sellingPrice} <button className='btn-danger' onClick={()=>{onDelete(todo)}}>delete</button></p>
      
    </div>
  )
}

export default ProductItem
