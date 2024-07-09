import React from 'react';
import { products } from '../constants'; // Assuming 'products' is correctly exported from '../constants'
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <section id='products' className='max-container max-sm:mt-6'>
      <div className='mt-3 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-4 grid-cols-1'>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
