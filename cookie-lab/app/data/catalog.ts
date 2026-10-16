import type { Collectible, PowerItem, ShopItem} from "./game-types";
//reminder change naming and description to items to fit theme
//delete comments when complete!;
export const clickUpgrade: PowerItem[] = [
{
    id: "click-1", name: "Power-Click", description: "A stronger click", cost: 25, kind: "click", power: 1, image: "/public/click_1.png",
},
{
    id: "click-2", name: "Mega-Click", description: "Serious Clicking power", cost: 400, kind: "click", power: 5, image: "/public/click_2.png",
},
{
    id: "click-3", name: "Ultra-click", description: "Some marines can click this hard", cost: 2500, kind: "click", power: 20, image: "/public/click_3.png",
},
{
    id: "click-4", name: "Emperors finger", description: "The one that sits and clicks", cost: 40000, kind: "click", power: 400, image: "/public/click_4.png",
},

];

export const autoUpgrades: PowerItem[] = [
{
    id: "auto-1", name: "Basic Baker", description: "one of many bakers", cost: 2500, kind: "auto", power: 1, image: "/public/auto_1.png",
},
{
    id: "auto-2", name: "Basic oven", description: "One of many basic ovens", cost: 5000, kind: "auto", power: 5, image: "/public/auto_2.png",
},
{
    id: "auto-3", name: "Basic Baker's line", description: "Horde of bakers be baking", cost: 25000, kind: "auto", power: 20, image:"/public/auto_3.png", 
},
{
    id: "auto-4", name: "mega baker", description: "grandma's choosen baker", cost: 250_000, kind: "auto", power: 100, image: "public/auto_4.png",
},
];

export const shopItem: ShopItem[] = [
{
    id: "shop-1", name: "Hidden recipe", description: "new secret recipe of cookies from tera", cost: 1_000_000, kind: "auto", power: 500, rarity: "common", image: "/public/shop_1.png", 
},
{
    id: "shop-2", name: "Ancient BakeingTray", description: "Bakingtray of speedy baking", cost: 25_000_000, kind: "auto", power: 2500, rarity: "uncommon", image: "/public/shop_2.png",
},
{
    id: "shop-3", name: "Ancient yeast", description: "Makes the dough grow much faster", cost: 400_000_000, kind: "auto", power: 10000, rarity: "rare", image: "/public/shop_3.png",
},
{
    id: "shop-4", name: "Tera Furnace", description: "secret heating tech from the ancient world", cost: 100_000_0000, kind: "auto", power: 20000, rarity: "legendary", image: "/public/shop_4.png",
},
];

export const collectibles: Collectible[] =
[
{
    id: "collection-1", name: "Ancient Rolling pin from tera", description: "Item was found in a old cave has a constant heat made for baking", cost: 100_000_000, rarity: "common", image:"/public/collect_1.png",
},
{
    id: "collection-2", name: "Book of baking anything into a cookie", description: "This book contains the ancinet and forbidden techniques to bake Anything! into a cookie use with caution", cost: 250_000_000, rarity: "rare", image: "/public/collect_2.png",
},
{
    id: "collection-3", name: "Cookie Facility from the warp", description: "Found in the warp can bake anything is sealed by 7 ancient seals", cost: 350_000_000, rarity: "legendary", image:"/public/collect_3.png"
},
{
    id: "collection-4", name: "Emperor's sealed Book of baking", description: "Golden book that has a warning Do not open", cost: 800_000_000, rarity: "mythic", image: "/public/collect_4.png"
},

];

