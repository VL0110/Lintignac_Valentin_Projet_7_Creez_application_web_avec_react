// Importation des éléments de la page (header,footer,card,picture) et des caractéristiques de mise en page 

import Footer from '../../components/Footer'
import Header from '../../components/Header/index'
import styled from 'styled-components'
import resolution from '../../utils/hooks/resolution'
import HomePicture from '../../components/HomePicture'
import Card from '../../components/Card'
import LogementsData from '../../datas/logements.json'
import { fadeIn } from '../../utils/animation'

// Style du corps de page (css)

const Main = styled.main`
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  position relative;
  padding-bottom: 200px;
`

//Style du Card (css)

const CardContainer = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  border-radius: 25px;
  animation: ${fadeIn} 2s ease-in-out;
  @media only screen and (min-width: ${resolution.medium}) {
    grid-template-columns: repeat(2, 1fr);
    background: #f7f7f7;
  }
  @media only screen and (min-width: ${resolution.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

// Création fonction Home avec les éléments de la page (header,main,picture,card(logements.json),footer)

function Home() {
  return (
    <div>
      <Header />
      <Main>
        <HomePicture />
        <CardContainer>
          {LogementsData.map((logement) => (
            <Card
              key={`logement-${logement.id}`}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
              pictures={logement.pictures}
              description={logement.description}
              hostName={logement.host.name}
              hostPicture={logement.host.picture}
              rating={logement.rating}
              location={logement.location}
              equipments={logement.equipments}
              tags={logement.tags}
            />
          ))}
        </CardContainer>
      </Main>
      <Footer />
    </div>
  )
}

export default Home

