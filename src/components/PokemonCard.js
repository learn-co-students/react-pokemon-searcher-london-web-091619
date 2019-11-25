import React, { useState } from "react"
import { Card } from "semantic-ui-react"

const PokemonCard = ({ name, stats, sprites }) => {
  const hp = stats.find(stat => stat.name === "hp").value

  const [sprite, setSprite] = useState(sprites.front)

  const toggleSprite = () => {
    sprite === sprites.front
      ? setSprite(sprites.back)
      : setSprite(sprites.front)
  }

  return (
    <Card onClick={toggleSprite}>
      <div>
        <div className="image">
          <img src={sprite} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
