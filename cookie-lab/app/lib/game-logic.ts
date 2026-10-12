
import type { Collectible , GameSave, PowerItem } from "~/data/game-types";

export function clickCookie(game: GameSave): GameSave {
    return {...game, cookies: game.cookies + game.cookiesPerClick };
}

export function tickCookies(game: GameSave): GameSave {
    if (game.cookiesPerSecond === 0) return game;

    return {...game, cookies: game.cookies + game.cookiesPerSecond}   
}

export function purchasePower(game: GameSave, item: PowerItem): GameSave {
    if (game.cookies < item.cost) return game;

    return {
        ...game,
        cookies: game.cookies - item.cost,
        cookiesPerClick: game.cookiesPerClick + (item.kind === "click" ? item.power : 0),
        cookiesPerSecond: game.cookiesPerSecond + (item.kind === "auto" ? item.power : 0)
    };
}

export function purchaseCollectibles(game: GameSave, item: Collectible): GameSave {
    if(game.ownedCollectibles.includes(item.id)) return game;
    if(game.cookies < item.cost) return game;
    return {
        ...game,
        cookies: game.cookies - item.cost,
        ownedCollectibles: [...game.ownedCollectibles, item.id]
    };
}

