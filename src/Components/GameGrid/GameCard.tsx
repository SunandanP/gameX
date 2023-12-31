import { Card } from "@chakra-ui/card";
import { Game } from "../../Hooks/useGames";
import { CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticBadge from "./CriticBadge";
import cropImage from "../../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"} shadow={"xl"}>
        <Image src={cropImage(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformList game={game} />
            <CriticBadge metacritic={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}
export default GameCard;
