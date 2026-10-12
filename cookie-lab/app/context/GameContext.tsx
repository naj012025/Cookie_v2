import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  createDefaultSave,
  type Collectible,
  type GameSave,
  type PowerItem,
} from "~/data/game-types";
import {
  clickCookie,
  purchaseCollectibles,
  purchasePower,
  tickCookies,
} from "~/lib/game-logic";
import { loadGame, saveGame } from "../lib/storage";

//This is a custom hook read more about that.

type GameContextValue = {
  game: GameSave;
  isReady: boolean;
  click: () => void;
  buyPower: (item: PowerItem) => void;
  buyCollectible: (item: Collectible) => void;
  reset: () => void;
};

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [game, setGame] = useState<GameSave>(createDefaultSave);
}
