import type { PowerItem } from "~/data/game-types";
import { formatCookies } from "~/lib/format";

type PowerCardProps = {
  item: PowerItem;
  cookies: number;
  onBuy: (item: PowerItem) => void;
  badge?: string;
};

//classname can be the same in case of <P>
//if i want seperate css just add a modifier to the classname.
//adding --Bem naming so i can acces diff modifers on a classname for css modification
export function PowerCard({ item, cookies, onBuy, badge }: PowerCardProps) {
  return (
    <article className="card">
      <div className="card__topline">
        <img className="card__image" src={item.image} alt="" />
        <h3 className="card__title">{item.name}</h3>
        {badge && <span className="badge">{badge}</span>}
      </div>
      <p className="card__description">{item.description}</p>
      <p className="card__detail">Cost: {formatCookies(item.cost)}</p>
      <p className="card__detail">
        +{formatCookies(item.power)} per
        {item.kind === "click" ? "click" : " second"}
      </p>

      <div className="card__actions">
        <button
          type="button"
          className="button button--primary button--wide"
          disabled={cookies < item.cost}
          onClick={() => onBuy(item)}
        >
          Buy Upgrade
        </button>
      </div>
    </article>
  );
}
