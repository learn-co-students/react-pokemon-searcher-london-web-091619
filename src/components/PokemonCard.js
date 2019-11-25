import React, { useState } from "react";
import { Card } from "semantic-ui-react";

const PokemonCard = ({ name, sprites: { front, back }, stats }) => {
  const [showFront, setShowFront] = useState(true);
  const hp = stats.find(stat => stat.name === "hp").value;
  return (
    <Card>
      <div onClick={() => setShowFront(!showFront)}>
        <div className="image">
          <img alt="oh no!" src={showFront ? front : back} />
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
  );
};

export default PokemonCard;
