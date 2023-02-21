// Importation logo, nav, styles

import Logo from './logo'
import styled from 'styled-components'
import Nav from './nav'
import resolution from '../../utils/hooks/resolution'
import { fadeIn } from '../../utils/animation'

// Définition style header, media only (tel)

const HeaderDiv = styled.header`
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px auto;
  padding: 0px 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
  @media only screen and (min-width: ${resolution.medium}) {
    height: 68px;
  }
`

// Appel "const" Header avec les éléments de la section de la page (logo,nav)

const Header = () => {
  return (
    <HeaderDiv>
      <Logo />
      <Nav />
    </HeaderDiv>
  )
}

export default Header
