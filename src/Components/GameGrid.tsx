import useGames from "../Hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error != "canceled" && error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
export default GameGrid;
