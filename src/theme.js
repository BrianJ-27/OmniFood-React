import { createTheme } from '@material-ui/core/styles';
import styled from 'styled-components';


export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 415,
      tablet: 768,
      desktop: 1024,
    },
  },
})

export const FlexMe = {
  flexRow: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'red',
  }
}

 export const MealCol = styled.div`
     width: 50% ;  
     @media (min-width: 1024px) {
        width: 25%;
      }
 `;


   