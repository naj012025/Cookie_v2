import { useGame } from "~/context/GameContext";
import { formatCookies } from "~/lib/format";

//change name here later to theme i want.
export function meta() {
  //reminder | in the quotes is not a union tag just a formatting choise.
  return [
    { title: "Cookie Lab | Game" },
    { name: "description", content: "Your Cookie bakery Dashboard" },
  ];
}

export default function GameRoute() {
  const { game, isReady, click, reset } = useGame();
  if (!isReady) {
    return <section className="panel">Loading saved game...</section>;
  }
  //change this later to theme.
  return (
    <div className="game-page">
      <header className="page-header">
        <h1>CookieLab</h1>
        <p>Build your Cookie Empire one click at a time</p>
      </header>

      <section className="panel game-page__main" aria-label="Cookie game">
        <div className="stats-grid">
          <div className="stat">
            <span className="stat__label">Cookies: </span>
            <strong className="stat__value">
              {formatCookies(game.cookies)}
            </strong>
          </div>

          <div className="stat">
            <span className="stat__label">Per Click: </span>
            <strong className="stat__value">
              {formatCookies(game.cookiesPerClick)}
            </strong>
          </div>

          <div className="stat">
            <span className="stat__label">Per second: </span>
            <strong className="stat__value">
              {formatCookies(game.cookiesPerSecond)}
            </strong>
          </div>
        </div>

        <button
          className="cookie-button"
          type="button"
          onClick={click}
          aria-label="Bake a cookie"
        >
          Cookie!
        </button>
        <p className="Game-page__hint">Click cookie then buy upgrades!.</p>
      </section>

      <section className="text-panel game-page__info">
        <h2>your bakery</h2>
        <p>
          Progress saves automaticly in this browser. Your collection has{" "}
          {game.ownedCollectibles.length} item's.
        </p>

        <button
          className="button button--secondary"
          type="button"
          onClick={() => {
            if (window.confirm("Reset all cookies and collection items?")) {
              reset();
            }
          }}
        >
          Reset Game!
        </button>
      </section>
    </div>
  );
}
