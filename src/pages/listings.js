import { useEffect, useState } from "react";
import Listings_Filters from "../components/Listings_Filters";
import Listing_Cards from "../components/Listing_Cards";
import config from "../config/config";

const Listings = () => {
  const [properties_list, setproperties_list] = useState([]);
  useEffect(() => {
    fetch(config.get("GetProperties"))
      .then((response) => {
        return response.json();
      })
      .then((response_json) => {
        setproperties_list(response_json.items);
      });
  }, []);
  return (
    <>
      <div className="container listings">
        {/* Category & Search Component */}{" "}
        <div className="listings_filters">
          <Listings_Filters />
        </div>
        <div className="listings_properties">
          {properties_list.map((element) => {
            return (
              <Listing_Cards property={element} key={element.property_id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Listings;
