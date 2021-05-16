import { getRestaurants } from "../../services/restaurants";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Restaurants = () => {
  const restaurants = getRestaurants();
  console.log(restaurants);

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nom </Th>
          <Th>Adresse</Th>
          <Th>Notation</Th>
        </Tr>
      </Thead>
      <Tbody>
        {restaurants.map((restaurant) => {
          return (
            <Tr>
              <Td>{restaurant.restaurantName}</Td>
              <Td>{restaurant.address}</Td>
              <Td>"3"</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default Restaurants;
