// Importation use react, useWindowSize, arrow, styles

import styled from 'styled-components'
import DownArrow from '../../assets/down-arrow.png'
import { useEffect, useState } from 'react'
import resolution from '../../utils/hooks/resolution'
import DownArrowTel from '../../assets/down-arrow-tel.png'
import { useWindowSize } from '../../utils/hooks/index'
import { fadeIn, translate } from '../../utils/animation'

// Définition style arrow, animation, texte, media only (tel)

const AboutDropdownDiv = styled.div`
  width: 100%;
  border: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
  gap: 30px;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-in-out, ${translate} 1s ease-in-out;
  @media only screen and (min-width: ${resolution.medium}) {
    margin: 45px 0px;
  }
`
const DropdownWord = styled.div`
  width: 100%;
  border-radius: 5px;
  background: #ff6060;
  position: relative;
  display: flex;
  align-items: center;
`

const DropdownTitle = styled.h2`
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  position: relative;
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 24px;
    height: 47px;
  }
`

const DownArrowImg = styled.img`
  padding: 10px;
  transform: rotate(180deg);
  transition: transform 300ms;
`

const DropdownContentDiv = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin-top: -40px;
  z-index: -1;
  animation: ${fadeIn} 0.5s;
`

const DropdownContentText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 142.6%;
  color: #ff6060;
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 24px;
  }
`

// Appel "const" AboutDropdown avec les éléments de la section de la page (title,arrow,textes)

const AboutDropdown = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)
  const [isRotate, setIsRotate] = useState('0deg')
  const [isLarge, setIsLarge] = useState(false)
  const screenWidth = useWindowSize().width

  function toggleFunction() {
    setIsActive(!isActive)
  }

  // Taille de la flèche en fonction de la largeur de l'écran

  useEffect(() => {
    if (screenWidth >= 1025) {
      setIsLarge(true)
    } else {
      setIsLarge(false)
    }
  }, [screenWidth])

  // Rotation flèche

  useEffect(() => {
    const arrow = document.querySelector(`.${title}`)
    if (isActive) {
      setIsRotate('0deg')
      arrow.style.transform = `rotate(${isRotate})`
    } else {
      setIsRotate('180deg')
      arrow.style.transform = `rotate(${isRotate})`
    }
  }, [isActive, isRotate, title])

  return (
    <AboutDropdownDiv>
      <DropdownWord onClick={toggleFunction}>
        <DropdownTitle>{title}</DropdownTitle>
        <DownArrowImg
          src={isLarge ? DownArrow : DownArrowTel}
          className={title}
        />
      </DropdownWord>
      {isActive && (
        <DropdownContentDiv>
          <DropdownContentText>{content}</DropdownContentText>
        </DropdownContentDiv>
      )}
    </AboutDropdownDiv>
  )
}

export default AboutDropdown
