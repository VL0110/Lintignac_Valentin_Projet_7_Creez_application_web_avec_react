// Importation image home et style 

import BannerPhoto from '../../assets/home-picture.png'
import styled from 'styled-components'
import resolution from '../../utils/hooks/resolution'
import { fadeIn } from '../../utils/animation'

// Définition style contour de l'image, image, texte à l'intérieur, media only (tel)

const BannerDiv = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 111px;
  border-radius: 10px;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
  @media only screen and (min-width: ${resolution.large}) {
    height: 223px;
  }
`
const BannerImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  filter: contrast(70%);
  mix-blend-mode: darken;
`

const BannerText = styled.p`
  position: absolute;
  left: 9.6%;
  right: 32.53%;
  top: 14.04%;
  bottom: 80.05%;
  font-weight: 500;
  font-size: 24px;
  color: white;
  width: 80%;
  @media only screen and (min-width: ${resolution.medium}) {
    display: none;
  }
`

const BannerTextLg = styled.p`
  display: none;
  @media only screen and (min-width: ${resolution.medium}) {
    display: inline;
    position: absolute;
    left: 9.6%;
    right: 32.53%;
    top: 25%;
    bottom: 80.05%;
    font-weight: 500;
    font-size: 24px;
    color: white;
    width: 80%;
  }
  @media only screen and (min-width: ${resolution.large}) {
    left: 0%;
    top: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
`

// Appel "const" Banner avec les éléments de la section de la page (image, texte)

const Banner = () => {
  return (
    <BannerDiv>
      <BannerImg src={BannerPhoto} />
      <BannerText>
        Chez vous,
        <br /> partout et ailleurs
      </BannerText>
      <BannerTextLg>Chez vous, partout et ailleurs</BannerTextLg>
    </BannerDiv>
  )
}

export default Banner

