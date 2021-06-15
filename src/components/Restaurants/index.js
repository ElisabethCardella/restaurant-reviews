import { getRestaurants } from "../../services/restaurants";
import { Table, Thead, Tbody, Tr, Th, Td, Alert } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Restaurants = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const restaurants = getRestaurants();

  function getAverage(ratings) {
    const sum = ratings.reduce((sum, rating) => sum + rating.stars, 0);

    return sum / ratings.length;
  }

  /*function getAverage(ratings) {
    let sum = 0;
    for (let i = 0; i < ratings.length; i++) {
      sum = sum + ratings[i].stars;
    }
    return sum / ratings.length;
  }*/

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
              <Td>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{restaurant.restaurantName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Notation </Th>
                            <Th>Commentaires</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Td>
                            {restaurant.ratings.map((rating) => (
                              <li key={rating.stars}>{rating.stars}</li>
                            ))}
                          </Td>
                          <Td>
                            {restaurant.ratings.map((rating) => (
                              <li key={rating.comment}>{rating.comment}</li>
                            ))}
                          </Td>
                        </Tbody>
                      </Table>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <button
                  onClick={() => {
                    onOpen();
                  }}
                  /*if (restaurant.ratings.length > 4.5) {
                      restaurant.ratings.forEach((element) => {
                        console.log(element.stars);
                      });
                    }*/
                >
                  {restaurant.restaurantName}
                </button>
              </Td>
              <Td>{restaurant.address}</Td>
              <Td>{getAverage(restaurant.ratings)}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
export default Restaurants;
