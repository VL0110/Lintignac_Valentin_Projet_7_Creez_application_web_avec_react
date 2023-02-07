// Importation des éléments de la page et du style

import Header from '../../components/Header'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import resolution from '../../utils/hooks/resolution'
import AboutPicture from '../../components/About/images'
import AboutDropdown from '../../components/About/dropdown'
import { collapses } from '../../datas/collapses'
import { useEffect } from "react";


// Définition style main

const Main = styled.main`
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  position relative;
  padding-bottom: 200px;
`

// Appel "const" About avec les éléments de la page (header,main,picture,dropdown,collapses,footer)

const About = () => {
  useEffect(() => {
		document.title = `About`
	}, )
  return (
    <div>
      <Header />
      <Main>
        <AboutPicture />
        {collapses.map((collapse) => (
          <AboutDropdown
            key={`collapse-${collapse.title}`}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </Main>
      <Footer />
    </div>
  )
}

export default About
