import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import ColorModeSwitch from "./Components/ColorModeSwitch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"} bg={"blue"}>
          main
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"black"}>
            aside
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
