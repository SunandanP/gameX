import { Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
}
export default Navbar;
