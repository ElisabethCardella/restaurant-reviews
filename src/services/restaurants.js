export const getRestaurants = () => {
  var myPlace = { lat: 25.276987, lng: 55.296249 };

  var service = new window.google.maps.places.PlacesService();
  service.nearbySearch(
    {
      location: myPlace,
      radius: 5500,
      type: ["restaurant"],
    },
    function (results, status) {
      console.log(results);
    }
  );

  return [
    {
      restaurantName: "Bronco",
      address: "39 Rue des Petites Écuries, 75010 Paris",
      lat: 48.8737815,
      long: 2.3501649,
      ratings: [
        {
          stars: 4,
          comment:
            "Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande.",
        },
        {
          stars: 5,
          comment: "Tout simplement mon restaurant préféré !",
        },
      ],
    },
    {
      restaurantName: "Babalou",
      address: "4 Rue Lamarck, 75018 Paris",
      lat: 48.8865035,
      long: 2.3442197,
      ratings: [
        {
          stars: 5,
          comment:
            "Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !",
        },
        {
          stars: 3,
          comment: "J'ai trouvé ça correct, sans plus",
        },
      ],
    },
  ];
};
