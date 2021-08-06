import styled from "styled-components";

export const MainNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`;

export const NavListItem = styled.div`
    margin-right: 1em;
`;
export const NavLinks = styled.div`
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: 300;
    letter-spacing: .5em;
`;

export const NavTheme = {
  MainNavBar: MainNav,
  ListItem: NavListItem,
  NLinks: NavLinks
}