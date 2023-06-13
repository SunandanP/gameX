import { Card } from "@chakra-ui/card";
import { Game } from "../Hooks/useGames";
import { CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  {
    // <PlatformList platforms={e.platform} />
    console.log("Parent");
  }
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"} shadow={"xl"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformList game={game}></PlatformList>
        </CardBody>
      </Card>
    </>
  );
}
export default GameCard;
