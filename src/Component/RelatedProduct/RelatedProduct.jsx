import React from 'react'
import './RelatedProduct.css'
import data_product from  '../assest/data'
import { Item } from '../item/Item'

export const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
       <h1>Related Product</h1>
       <hr/>
       <div className="relatedproducts-item">
          {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          } )}
       </div>
 
    </div>
  )
}
