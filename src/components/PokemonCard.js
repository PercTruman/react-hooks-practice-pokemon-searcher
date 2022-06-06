import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, frontSprite, backSprite}) {
  const [flipped, setFlipped] = useState(false)

  function flipCard(){
    setFlipped((flipped)=>flipped=!flipped)
  }

  return (
    <Card>
      <div >
        <div className="image" onClick={flipCard}>
          <img src= {flipped? backSprite:frontSprite} alt="oh no!" />
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
}

export default PokemonCard;
