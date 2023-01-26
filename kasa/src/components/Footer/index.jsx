// Importation logo (footer), styles

import styled from 'styled-components'
import Logo from '../../assets/footer-logo.png'
import resolution from '../../utils/hooks/resolution'

// Définition style footer, logo footer, media only (tel)

const DivFooter = styled.footer`
  background-color: black;
  height: 209px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`
const DivLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`
const LogoFooter = styled.img`
  height: 40px;
`

const RightsFooter = styled.p`
  color: white;
  font-size: 12px;
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 18px;
  }
`

// Appel "const" Footer avec les éléments de la section de la page (logo,texte)

const Footer = () => {
  return (
    <DivFooter>
      <DivLogo>
        <LogoFooter $LetterK src={Logo} />
      </DivLogo>
      <RightsFooter>© 2020 Kasa. All rights reserved</RightsFooter>
    </DivFooter>
  )
}

export default Footer
