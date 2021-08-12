

const HeroBx = () => {
 

  return (
      <div className='flex__container--hero-box'>
        <h1 className='title__primary'>
          Goodbye Junk Food
          <br /> Hello super healthy meals.
        </h1>
        <div className='hero__btn--container'>
          <button type='button' className='btn__full' href="#h">
            I&rsquo;m hungry
          </button>
          <button type='button' className='btn__outline' href="#s">
            Show me more
          </button>
        </div>
      </div>
  );
};

export default HeroBx;
