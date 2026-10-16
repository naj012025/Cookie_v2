import { useGame } from "~/context/GameContext";
import { collectibles } from "~/data/catalog";
import { formatCookies } from "~/lib/format";

export function meta() {
  return [{ title: "Cookie Lab | Collection" }];
}

export default function CollectionRoute() {
  const { game, isReady, buyCollectible } = useGame();
  if (!isReady) {
    return <section className="panel">Loading SaveGame...</section>;
  }

  return (
    <div className="collection-page">
      <header className="page-header">
        <h1>Collection</h1>
        <p>Perma items</p>
      </header>

      <section className="panel">
        <div className="card-grid collection-page__grid">
          {collectibles.map((item) => {
            const owned = game.ownedCollectibles.includes(item.id);
            return (
              <article className="card" key={item.id}>
                <img className="card__image" src={item.image} alt="" />
                <div className="card__topline">
                  <h3 className="card__title">{item.name}</h3>
                  <span className="badge">{item.rarity}</span>
                </div>
                <p className="card__detail">
                  Cost: {formatCookies(item.cost)} cookies
                </p>
                <div className="card__actions">
                  <button
                    className="button button--primary button--wide"
                    type="button"
                    disabled={owned || game.cookies < item.cost}
                    onClick={() => buyCollectible(item)}
                  >
                    {owned ? "Owned" : "Collect"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
