import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Map from "./components/Map";
import Restaurants from "./components/Restaurants";
import PlacesAutocomplete from "react-places-autocomplete";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={4}>
          <Map />
        </GridItem>
        <GridItem colSpan={1}>
          <Restaurants />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
