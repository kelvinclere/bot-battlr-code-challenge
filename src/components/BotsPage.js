import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(function showBots() {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => {
        console.log("Bots:" + data);
        setBots(data);
      });
  }, []);

  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} setBots={setBots} />
      <BotCollection bots={bots} setBotArmy={setBotArmy} setBots={setBots} />
    </div>
  );
}

export default BotsPage;
