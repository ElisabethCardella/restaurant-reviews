export const getRestaurants = async () =>
  new Promise((resolve) => {
    const map = new window.google.maps.Map(document.getElementById("map"));
    var service = new window.google.maps.places.PlacesService(map);

    navigator.geolocation.getCurrentPosition(function (position) {
      service.nearbySearch(
        {
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          radius: 5500,
          type: ["restaurant"],
        },
        function (results) {
          resolve(results);
          console.log(results);
        }
      );
    });
  });

export const getRestaurantDetails = async (placeId) =>
  new Promise((resolve) => {
    const map = new window.google.maps.Map(document.getElementById("map"));
    var service = new window.google.maps.places.PlacesService(map);

    service.getDetails(
      {
        placeId: placeId,
      },
      function (results) {
        resolve(results);
        console.log(results);
      }
    );
  });
