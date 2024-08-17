import React from 'react';

const ProductRange = () => {
  return (
    <section id='ProductRange' className='max-container'>
      <h3 className='text-center font-bold text-3xl text-blue-500'>OUR PRODUCT RANGE</h3>
      <div className='m-auto mt-4 text-center bg-pink-500 p-4 rounded-lg'>
        <ul className='text-white py-4'>
          <li className='text-lg md:text-xl lg:text-xl leading-relaxed md:leading-normal lg:leading-relaxed mb-4'>
            Manufacture and revalidation of cylinders - Tianlong is known over the past years to become a lead manufacturer of LPG gas cylinders and supplier to over 45 countries across the globe
          </li>
          <li className='text-lg md:text-xl lg:text-xl leading-relaxed md:leading-normal lg:leading-relaxed'>
            Assembling gas cookers and accessories - Additionally to LPG gas cylinders, Tianlong assembles cookers, produces, and manufactures grills, regulators, and burners that seek to address customer pain points.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductRange;
