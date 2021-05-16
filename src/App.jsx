import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header"
import Map from "./components/Map"
import Restaurants from "./components/Restaurants"

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Map /> 
      <Restaurants />
    </ChakraProvider>
  );
}

export default App;
