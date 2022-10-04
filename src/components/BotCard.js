import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, setBotArmy, setBots, position }) {
  function handleBotClick(e) {
    console.log(bot.id);

    e.preventDefault();

    setBotArmy((botFleet) => {
      botFleet = [...botFleet];

      if (botFleet.includes(bot)) {
        if (position === "botPagePosition") {
          botFleet.splice(botFleet.indexOf(bot), 1);
        }
      } else {
        botFleet.push(bot);
      }

      console.log(
        "Army:" + typeof botFleet + " Size: " + botFleet.length
      );
      return botFleet;
    });
  }

  function releaseBot(e) {
    e.preventDefault();

    fetch(`http://localhost:8002/bots/${bot.id}`, 
    { method: "DELETE" })
    .then((response) => {
        setBotArmy((botFleet) => {
          botFleet = [...botFleet];

          if (botFleet.includes(bot)) {
            botFleet.splice(botFleet.indexOf(bot), 1);
          }
          return botFleet;
        });

        setBots((botShown) => {
          botShown = [...botShown];
          botShown.splice(botShown.indexOf(bot), 1);
          return botShown;
        });
      }
    );
  }

  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={(e) => handleBotClick(e)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) => releaseBot(e)}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
