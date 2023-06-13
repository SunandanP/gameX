import { Card } from "@chakra-ui/card";
import { Game } from "../Hooks/useGames";
import { CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"} shadow={"xl"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
}
export default GameCard;
