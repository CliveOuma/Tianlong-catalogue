import React from 'react';

const About = () => {
  return (
    <section id='about' className='max-container'>
      <h3 className='text-center font-bold text-3xl text-blue-500'>ABOUT US</h3>
      <div className='m-auto mt-4 text-center p-4 rounded-lg'>
        <ul className='text-black py-4'>
          <li className='text-lg md:text-xl lg:text-xl leading-relaxed md:leading-normal lg:leading-relaxed mb-4'>
          Tianlong industry (kenya) Limited is located at Tatu City in Ruiru, Kiambu County.
          The company is a subsidary of the China based Hangzhou Tianlong Steel Cylinder Co. Ltd.
          Our newly built factory at Tatu City sits on 7 acres piece of prime land 
          and is fitted with modern machines with a capacity to manufacture at least 
          one million LPG steel cylinders per year.
          </li>
          <li className='text-lg md:text-xl lg:text-xl leading-relaxed md:leading-normal lg:leading-relaxed'>
          We are currently manufacturing new cylinders and re-validating old cylinders at a capacity
          of 3000 cylinders per day all inclusive. Additionally in line with our company's mission 
          "To become the best gas and service kitchen service provider for every household"
          We endeavour to give our customers top notch products and services. The business
          assembles cookers and other accessories such as regulators, grills, and burners.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;


