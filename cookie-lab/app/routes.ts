import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/game.tsx"),
    route("shop", "routes/shop.tsx"),
    route("upgrades", "routes/upgrades.tsx"),
    route("collection", "routes/collection.tsx"),
] satisfies RouteConfig;
