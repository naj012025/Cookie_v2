import {
  createContext,
  useContext, // this one is used in export at 89.
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

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setGame(loadGame());
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    saveGame(game);
  }, [game, isReady]);

  useEffect(() => {
    if (!isReady || game.cookiesPerSecond === 0) return;

    const timerId = window.setInterval(() => {
      setGame((current) => tickCookies(current));
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [isReady, game.cookiesPerSecond]);

  function click() {
    if (!isReady) return;
    setGame((current) => clickCookie(current));
  }

  function buyPower(item: PowerItem) {
    if (!isReady) return;
    setGame((current) => purchasePower(current, item));
  }

  function buyCollectible(item: Collectible) {
    if (!isReady) return;
    setGame((current) => purchaseCollectibles(current, item));
  }

  function reset() {
    if (!isReady) return;
    setGame(createDefaultSave());
  }

  return (
    <GameContext.Provider
      value={{ game, isReady, click, buyPower, buyCollectible, reset }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame(): GameContextValue {
  const context = useContext(GameContext);

  if (context === null) {
    throw new Error("useGame must be called inside GameProvider");
  }
  return context;
}
