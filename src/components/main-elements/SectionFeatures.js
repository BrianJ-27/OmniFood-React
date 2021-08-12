import {
  IoInfiniteOutline,
  IoStopwatchOutline,
  IoNutritionOutline,
  IoCartOutline,
} from "react-icons/io5";

const SectionFeatures = () => {
  return (
    <section id="features">
      <div className="wrapper">
        <div className='grid__col--4'>
          <h2 className='title__secondary'>Get food fast <span className='feature__heading'>&mdash; not fast food</span></h2>
          <p className='long__copy content__base'>
            Hello, we&rsquo;re Omnifood, your new premium food delivery service.
            We know you&rsquo;re always busy. No time for cooking. So let us
            take care of that, we&rsquo;re really good at it, we promise!
          </p>
        </div>
        <div className="flex__container">
          <div className='grid__col--3'>
            <IoInfiniteOutline className='icon__feature' />
            <h3 className='title__tertiary'>Up to 365 days/year</h3>
            <p className='content__base'>
              Never cook again! We really mean that. Our subscription plans
              include up to 365 days/year coverage. You can also choose to order
              more flexibly if that's your style.
            </p>
          </div>
          <div className='grid__col--3'>
            <IoStopwatchOutline className='icon__feature' />
            <h3 className='title__tertiary'>Ready in 20 minutes</h3>
            <p className='content__base'>
              You're only twenty minutes away from your delicious and super
              healthy meals delivered right to your home. We work with the best
              chefs in each town to ensure that you're 100% happy.
            </p>
          </div>
          <div className='grid__col--3'>
            <IoNutritionOutline className='icon__feature' />
            <h3 className='title__tertiary'>100% organic</h3>
            <p className='content__base'>
              All our vegetables are fresh, organic and local. Animals are
              raised without added hormones or antibiotics. Good for your
              health, the environment, and it also tastes better!
            </p>
          </div>
          <div className='grid__col--3'>
            <IoCartOutline className='icon__feature' />
            <h3 className='title__tertiary'>Order anything</h3>
            <p className='content__base'>
              We don't limit your creativity, which means you can order whatever
              you feel like. You can also choose from our menu containing over
              100 delicious meals. It's up to you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
