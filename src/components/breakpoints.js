import styled from 'styled-components';

//    const size = {
//     xs: '320px',
//     sm: '768px',
//     lg: '1080px',
//     xl: '1400px',
//    }

//    const device = {
//     xs: `(min-width: ${size.xs})`,
//     sm: `(min-width: ${size.sm})`,
//     lg: `(min-width: ${size.lg})`,
//     xl: `(min-width: ${size.xl})`
//    }

   export const FlexDiv = styled.div`
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media (min-width: 768px) {    
            justify-content: space-around;
      }
   `;

  export const Columns = styled.div`
        width: 100%;
        padding: 1.5em;
        @media (min-width: 768px) {
            width: 50%;
          }
        @media (min-width: 1024px) {
            width: 25%;
          }
   `;

 export const MealCol = styled.div`
     width: 50% ;  
     @media (min-width: 1024px) {
        width: 25%;
      }
 `;

 export const ReviewCol = styled.div`
    width: 80%;
    padding-bottom: 1.5em;
    @media (min-width: 768px) {
        padding: 1.5em;
        width: 50%;
      }
    @media (min-width: 1024px) {
        width: 30%;
      }
 `;

   