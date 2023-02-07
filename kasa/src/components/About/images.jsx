// Importation react, image, styles

import React from 'react'
import styled from 'styled-components'
import AboutImg from '../../assets/about-picture.png'
import { fadeIn } from '../../utils/animation'

// Définition style image, contour image (css)

const AboutPictureDiv = styled.div`
  width: 100%;
  margin: 20px auto;
  height: 223px;
  animation: ${fadeIn} 1s ease-in-out;
`

const AboutPictureImg = styled.img`
  background-blend-mode: darken;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%;
  border-radius: 10px;
`

// Appel "const" AboutPicture avec les éléments de la section de la page (image)

const AboutPicture = () => {
  return (
    <AboutPictureDiv>
      <AboutPictureImg src={AboutImg} />
    </AboutPictureDiv>
  )
}

export default AboutPicture
