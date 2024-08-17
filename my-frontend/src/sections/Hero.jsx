import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import backgroundImage from "../assets/images/img 16.avif"; // Replace with your actual image path

const Hero = () => {
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
      style={sectionStyles} // Apply inline styles here
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h1 className='mt-8 font-palanquin  max-sm:text-[40px] max-sm:leading-[40px] font-bold'>
          <span className='xl:whitespace-nowrap text-white relative z-10 pr-1 text-2xl'>
            Amaze Kitchen Accessories
          </span>
          <br />
          <span className='text-white font-bold inline-block mt-1 text-4xl'>PRODUCT CATALOGUE </span>
        </h1>
        <p className='font-montserrat text-white text-lg justify-center mt-6 mb-14 sm:max-w-sm'>
          (wholesale)</p>
        <Button label='Explore'  iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
