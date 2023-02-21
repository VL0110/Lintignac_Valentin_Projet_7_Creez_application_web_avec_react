// Importation style 

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Colors from '../../utils/hooks/colors'
import resolution from '../../utils/hooks/resolution'

// Définition style navigation, media only (tel)

const NavDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const NavUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10%;
  white-space: nowrap;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.primary};
  font-weight: 500;
  font-size: 12px;
  list-style: none;
  text-decoration: none;
  &:active, :focus
  {
    text-decoration: underline ${Colors.primary};

  }
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 18px;
  }
`


// Appel "const" Nav avec les éléments de la section de la page (textes,styles)

const Nav = () => {
  return (
    <NavDiv>
      <NavUl>
      <NavLink to="/" tabindex="0">Accueil</NavLink>
          <NavLink to="/about" >A Propos</NavLink>
      </NavUl>
    </NavDiv>
  )
}

export default Nav
