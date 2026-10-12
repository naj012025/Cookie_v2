import { createDefaultSave, type GameSave } from "~/data/game-types";

const SAVE_KEY = "cookie-clicker:v1";

function validInteger(value: unknown,minimum: number): value is number {
    return Number.isSafeInteger(value) && typeof value === "number" && value >= minimum;

} 


//Zod does this for me but writing it here for practice on doing validatation myself
//and how to recongnize it.
export function isGameSave(value: unknown,): value is GameSave {

    if (typeof value !== "object" || value === null) return false;

    if(!("version" in value) || !("cookies" in value) || !("cookiesPerClick" in value)||
       !("cookiesPerSecond" in value) || !("ownedCollectibles" in value)) return false;

    return value.version === 1 &&
        validInteger(value.cookies,0) &&
        validInteger(value.cookiesPerClick, 1) &&
        validInteger(value.cookiesPerSecond, 0)   &&
        
        Array.isArray(value.ownedCollectibles) &&
        value.ownedCollectibles.every((id: unknown) =>
            typeof id === "string"
        );
}

//windows.Local storage does not mean save only on windows os its browser storage works on any os
export function loadGame(): GameSave {
    if (typeof window === "undefined") return createDefaultSave();
    try {
        const raw = window.localStorage.getItem(SAVE_KEY);
       
        if (raw === null) return createDefaultSave();

        const parsed: unknown = JSON.parse(raw);

        return isGameSave(parsed) ? parsed : createDefaultSave();
    } catch (error) {
        console.warn("could not load The game save", error);
        return createDefaultSave();
    }
}

export function saveGame(game: GameSave): void {
    if  (typeof window === "undefined") return
    try {
        window.localStorage.setItem(SAVE_KEY, JSON.stringify(game));
    } catch (error) {
        console.error("could not save the game ", error);
    }
}