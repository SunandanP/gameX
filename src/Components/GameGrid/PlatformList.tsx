import { IconType } from "react-icons";
import { Game } from "../../Hooks/useGames";
import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function PlatformList({ game }: Props) {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <>
      <HStack spacing={5} marginY={5} padding={1}>
        {game.parent_platforms.map((p) => (
          <Icon
            key={p.platform.id}
            as={IconMap[p.platform.slug]}
            boxSize={5}
            color={"gray.500"}
          ></Icon>
        ))}
      </HStack>
    </>
  );
}
export default PlatformList;
