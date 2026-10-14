import { PowerCard } from "~/components/Powercard";
import { useGame } from "~/context/GameContext";
import { autoUpgrades, clickUpgrade } from "~/data/catalog";

export function meta() {
  return [{ title: "Cookie Lab | upgrades" }];
}

export default function UpgradesRoute() {
  const { game, isReady, buyPower } = useGame();
  if (!isReady) {
    return <section className="panel">Loading Saved Game...</section>;
  }

  return (
    <div className="upgrades-page">
      <header className="page-header">
        <h1>Upgrades</h1>
        <p>Increase your baking power!.</p>
      </header>

      <section className="upgrades-page">
        <header className="page-header">
          <h2>Click Upgrades.</h2>
        </header>

        <div className="card-grid upgrades-page__grid">
          {clickUpgrade.map((item) => (
            <PowerCard
              key={item.id}
              item={item}
              cookies={game.cookies}
              onBuy={buyPower}
            />
          ))}
        </div>
      </section>

      <section className="panel upgrades-page__section">
        <h2>Automatic upgrades</h2>
        <div className="card-grid upgrades-page__grid">
          {autoUpgrades.map((item) => (
            <PowerCard
              key={item.id}
              item={item}
              cookies={game.cookies}
              onBuy={buyPower}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
