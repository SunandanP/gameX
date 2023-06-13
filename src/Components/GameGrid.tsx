import { PinInputDescendantsProvider, SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error != "canceled" && error && <p>{error}</p>}
      <SimpleGrid
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
export default GameGrid;
