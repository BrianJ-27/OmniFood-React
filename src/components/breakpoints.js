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
        @media (min-width: 768px) {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
      }
   `;

  export const Columns = styled.div`
        width: 90%;
        margin: 1em auto;
        @media (min-width: 768px) {
            width: 40%
          }
        @media (min-width: 1024px) {
            width: 28%
          }
   `;

   