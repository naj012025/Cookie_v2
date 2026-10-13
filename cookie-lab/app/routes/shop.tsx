import { PowerCard } from "~/components/Powercard";
import { useGame } from "~/context/GameContext";
import { shopItem } from "~/data/catalog";

export function meta() {
  return [{ title: "Cookie Lab | Shop" }];
}

export default function ShopRoute() {
  const { game, isReady, buyPower } = useGame();
  if (!isReady) {
    return <section className="panel">Loading saved game...</section>;
  }

  return (
    <div className="shop-page">
      <header className="page-header">
        <h1>Shop</h1>
        <p>Collect all the things</p>
      </header>

      <section className="panel">
        <div className="card-grid shop-page__grid">
          {shopItem.map((item) => (
            <PowerCard
              key={item.id}
              item={item}
              cookies={game.cookies}
              onBuy={buyPower}
              badge={item.rarity}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
