import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button colorScheme="purple">Button</Button>
    </>
  );
}

export default App;
