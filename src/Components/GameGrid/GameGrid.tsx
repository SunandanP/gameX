import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error != "canceled" && error && <p>{error}</p>}
      <SimpleGrid spacing={10} columns={{ sm: 1, md: 2, lg: 3 }} padding={10}>
        {isLoading &&
          skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
export default GameGrid;
