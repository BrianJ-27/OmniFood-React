import imgOne from './img/1.jpg'
import imgTwo from './img/2.jpg'
import imgThree from './img/3.jpg'
import imgFour from './img/4.jpg'
import imgFive from './img/5.jpg'
import imgSix from './img/6.jpg'
import imgSeven from './img/7.jpg'
import imgEight from './img/8.jpg'
import lisbon from './img/lisbon-3.jpg'
import sanFran from './img/san-francisco.jpg'
import berlin from './img/berlin.jpg'
import london from './img/london.jpg'
import customer1 from './img/customer-1.jpg'
import customer2 from './img/customer-2.jpg'
import customer3 from './img/customer-3.jpg'


const mealData = [

  {
    id: 0,
    pic: imgOne,
    alt: 'Korean bibimbap with egg and vegetables',
  },
  {
    id: 1,
    pic: imgTwo,
    alt: 'Simple italian pizza with cherry tomatoes'
  },
  {
    id: 2,
    pic: imgThree, 
    alt: 'Chicken breast steak with vegetables' 
  },
  { 
    id: 3,
    pic: imgFour, 
    alt: 'Autumn pumpkin soup' 
  },
  { 
    id: 4,
    pic: imgFive,
    alt: 'Paleo beef steak with vegetables'
  },
  { 
    id: 5,
    pic: imgSix, 
    alt: 'Healthy baguette with egg and vegetables'
  },
  { 
    id: 6,
    pic: imgSeven, 
    alt: 'Burger with cheddar and bacon' 
  },
  { 
    id: 7,
    pic: imgEight, 
    alt: "Granola with cherries and strawberries" 
  }

]

export default mealData;

export const citiData = [
  {
    id: 0,
    img: lisbon,
    city: 'Lisbon', 
    review1: '1600+ happy eaters',
    review2: '60+ top chefs',
    link: '@omnifood_lx',
  },
  {
    id: 1,
    img: sanFran,
    city: 'San Francisco',
    review1: '3700+ happy eaters',
    review2: '160+ top chefs',
    link: '@omnifood_sf',
  },
  {
    id: 2,
    img: berlin,
    city: 'Berlin',
    review1: '2300+ happy eaters',
    review2: '110+ top chefs',
    link: '@omnifood_berlin',
  },
  {
    id: 3,
    img: london,
    city: 'London',
    review1: '1200+ happy eaters',
    review2: '50+ top chefs',
    link: '@omnifood_london',
  }
]

export const testimonialData = [
  {
    id: 0,
    review: 'Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a lifesaver. Now that i got to it, I could not live without my daily meals',
    photo: customer1,
    name: 'Alberto Duncan',
    alt: 'Customer Alberto Duncan'
  },
  {
    id: 1,
    review: 'Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!',
    photo: customer2,
    name: 'Joana Silva',
    alt: 'Customer Joana Silva'
  },
  {
    id: 2,
    review: 'I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!',
    photo: customer3,
    name: 'Milton Chapman',
    alt: 'Customer Milton Chapman'
  }
]

export const planInfo = [
  
  {
    id: 0,
    type: 'Premium',
    price: '$399',
    term: '/ month',
    mealDescrptn: 'That is only 13.30 $ per meal',
    deal1: '1 meal every day',
    deal2: 'Order 24/7',
    deal3: 'Access to newest creations',
    deal4: 'Free delivery',
    link: 'Sign up now'
  },
  {
    id: 1,
    type: 'Pro',
    price: '$149',
    term: '/ month',
    mealDescrptn: 'That is only 14.90 $ per meal',
    deal1: '1 meal 10 days/month',
    deal2: 'Order 24/7',
    deal3: 'Access to newest creations',
    deal4: 'Free delivery',
    link: 'Sign up now'
  },
  {
    id: 2,
    type: 'Starter',
    price: '$19',
    term: '/ meal',
    mealDescrptn: 'Pay for a meal when you want',
    deal1: '1 meal every day',
    deal2: 'Order 24/7',
    deal3: '',
    deal4: 'Free delivery',
    link: 'Sign up now'
  },

]


