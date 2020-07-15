const apiKey =
  "e7ZFh2KZZyd5WBVSTtwiP-nYkEHKyQb1CrfGNCm3gt9_woldbMWgs1oc3EYyTsPoPYPiF0k-IPEFDq8CRAIcM30G9O037-_5FsA5vOt_0NkUxwa94qpgk_L_dUELX3Yx";
const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};
export default Yelp;