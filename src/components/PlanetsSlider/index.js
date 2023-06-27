import Slider from 'react-slick'

import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div data-testid="planets" className="planets-app-container">
      <h1 className="heading">Planets</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
