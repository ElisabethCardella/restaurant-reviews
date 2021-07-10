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
import { useEffect, useState } from "react";
import { getRestaurantDetails } from "../../services/restaurants";
import { Select } from "@chakra-ui/react";

const Restaurants = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  const [ratingFilter, setRatingFilter] = useState(null);

  const loadRestaurants = async () => {
    const rest = await getRestaurants();

    setRestaurants(rest);
  };

  loadRestaurants();

  return (
    <div>
      <Select
        onChange={(event) => {
          setRatingFilter(event.target.value);
        }}
      >
        <option value="1a2">1 à 2 étoiles</option>
        <option value="2a3">2 à 3 étoiles</option>
        <option value="3a4">3 à 4 étoiles</option>
        <option value="4a5">4 à 5 étoiles</option>
        <option selected="selected" value="tous">
          {" "}
          Tous
        </option>
      </Select>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nom </Th>
            <Th>Adresse</Th>
            <Th>Notation</Th>
          </Tr>
        </Thead>
        <Tbody>
          {restaurants
            ?.filter((restaurant) => {
              if (
                ratingFilter === "tous" &&
                (restaurant.rating > 5 || restaurant.rating < 1)
              ) {
                return false;
              }

              if (ratingFilter === "1a2" && restaurant.rating > 2) {
                return false;
              }
              if (
                ratingFilter === "2a3" &&
                (restaurant.rating > 3 || restaurant.rating < 2)
              ) {
                return false;
              }

              if (
                ratingFilter === "3a4" &&
                (restaurant.rating > 4 || restaurant.rating < 3)
              ) {
                return false;
              }

              if (
                ratingFilter === "4a5" &&
                (restaurant.rating > 5 || restaurant.rating < 4)
              ) {
                console.log("coucou");
                console.log(restaurant.rating);
                return false;
              }
              return true;
            })

            .map((restaurant) => {
              return (
                <Tr key={restaurant.place_id}>
                  <Td>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>{restaurant.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th>Notes </Th>

                                <Th>Commentaires</Th>

                                <Th>Vue de la rue</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {restaurantDetails?.reviews?.map((review) => {
                                return (
                                  <Tr>
                                    <Td>
                                      {review.rating}

                                      {/* {restaurant?.ratings?.map((rating) => (
                              <li key={rating.stars}>{rating.stars}</li>
                            ))} */}
                                    </Td>
                                    <Td>{review.text}</Td>
                                  </Tr>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                    <button
                      onClick={async () => {
                        onOpen();

                        const restaurantDetails = await getRestaurantDetails(
                          restaurant.place_id
                        );

                        console.log(restaurantDetails);

                        setRestaurantDetails(restaurantDetails);
                      }}
                    >
                      {restaurant.name}
                    </button>
                  </Td>
                  <Td>{restaurant.vicinity}</Td>
                  <Td>{restaurant.rating}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
};
export default Restaurants;
