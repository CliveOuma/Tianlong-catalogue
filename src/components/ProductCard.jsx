import React from 'react';

const ProductCard = ({ imgURL, name, features }) => {
  return (
    <div className='flex flex-1 flex-col max-sm:w-full w-full'>
      <h3 className="leading-normal mt-2 text-2xl pb-2 text-blue-500 font-semibold border-b-2 border-blue-600">{name}</h3>
      <img src={imgURL} alt={name} className='w-[250px] h-[250px] pt-6' />
      <div className='justify-start gap-2.5 mt-8 flex'>
        <p className='text-black leading-normal text-2xl font-bold'>Features</p>
      </div>
      {Array.isArray(features) && features.length > 0 ? (
        <ul className='text-gray-500 leading-normal mt-2 text-xl font-semibold list-disc list-inside'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      ) : (
        <p className='text-black leading-normal mt-2 text-xl font-semibold'>No features available</p>
      )}
    </div>
  );
};

export default ProductCard;
