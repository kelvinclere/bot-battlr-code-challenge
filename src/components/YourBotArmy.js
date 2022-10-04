

import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, setBotArmy, setBots }) {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy?.map((bot, id) => (
            <BotCard
              bot={bot}
              key={id}
              setBotArmy={setBotArmy}
              setBots={setBots}
              position="botPagePosition"
            />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
