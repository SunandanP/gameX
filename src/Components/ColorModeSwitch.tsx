import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [dark, setDark] = useState(true);
  return (
    <HStack>
      <Switch
        isChecked={colorMode == "dark"}
        colorScheme="red"
        onChange={() => {
          toggleColorMode();
          setDark(!dark);
        }}
      ></Switch>
      <Icon as={dark ? BsFillMoonStarsFill : BsSun}></Icon>
    </HStack>
  );
}
export default ColorModeSwitch;
