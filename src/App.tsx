import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import ColorModeSwitch from "./Components/ColorModeSwitch";
import GameGrid from "./Components/GameGrid";

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
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}></GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
