import React from 'react';
import backgroundImage from "../assets/images/img40.jpg";

const BackgroundImage = () => {
    const sectionStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust to 'contain' if needed
        backgroundPosition: 'center', // Adjust position as needed
        backgroundRepeat: 'no-repeat', // Ensures the image is not repeated
        minHeight: '100vh', // Ensures the section covers the viewport height
      };
  return (
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    style={sectionStyles} >
    </section>
  );
};

export default BackgroundImage;
