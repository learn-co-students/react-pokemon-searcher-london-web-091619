import React, {useState, useEffect} from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = (props) => {

    const displayHp = () => {
      if (props.pokemon.stats[5].value) {
        return props.pokemon.stats[5].value
      } else {
        return props.pokemon.stats.hp
      }
    }

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {displayHp()}
            </span>
          </div>
        </div>
      </Card>
    )
}

export default PokemonCard
