import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrum/Breadcrum'; 
import { ProductDisplay } from '../Component/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Component/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../Component/RelatedProduct/RelatedProduct';

export const Product = () => {
  const { all_products } = useContext(ShopContext); 
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};
