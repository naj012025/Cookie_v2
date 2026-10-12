export type PowerKind = "click" | "auto";
export type Rarity = "common" | "uncommon" | "rare" | "legendary" | "mythic";

export type PowerItem = {
    id: string;
    name: string;
    description: string;
    cost: number;
    kind: PowerKind;
    power: number;    
};

//learned & intersection can combine items like in example below.
//it removes this during runtime so using spread copies the properties.
// & is tells the shape of the object.
export type ShopItem = PowerItem & {
    rarity: Rarity;
};

export type Collectible = {
    id: string;
    name: string;
    description: string;
    cost: number;
    rarity: Rarity;
};
// version is called a schema.
export type GameSave = {
    version: 1;
    cookies: number;
    cookiesPerClick: number;
    cookiesPerSecond: number;
    ownedCollectibles: string [];
};

export function createDefaultSave(): GameSave {
    return {
        version: 1,
        cookies: 0,
        cookiesPerClick: 1,
        cookiesPerSecond: 0,
        ownedCollectibles: [],
    };
};