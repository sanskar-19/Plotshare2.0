import { useEffect, useState } from "react";
import Listings_Filters from "../components/Listings_Filters";
import Listing_Cards from "../components/Listing_Cards";
import config from "../config/config";

const Listings = () => {
  const [properties_list, setproperties_list] = useState([]);
  useEffect(() => {
    // fetch(config.get("GetProperties"))
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response_json) => {
    //     setproperties_list(response_json.items);
    //   });

    setproperties_list([
      {
        property_id: 1,
        property_name: "Plot 1",
        property_cost: 100,
        property_image: "/img.png",
        property_desc:
          "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
        property_total_units: 100,
        property_total_area_plot: 10000,
        property_cost_per_unit: 1,
        property_min_tenure: "3 yrs",
        property_units_sold: 64,
        property_yield: "8%",
        property_last_bidding_date: "4th Oct' 22",
        property_sold: true,
        property_location: "Lorem Epsum Dolar",
      },
      {
        property_id: 2,
        property_name: "Plot 2",
        property_image: "/img.png",
        property_cost: 100,
        property_desc:
          "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
        property_total_units: 100,
        property_cost_per_unit: 1,
        property_min_tenure: "3 yrs",
        property_yield: "8%",
        property_total_area_plot: 10000,
        property_last_bidding_date: "4th Oct' 22",
        property_units_sold: 64,
        property_sold: false,
        property_location: "Lorem Epsum Dolar",
      },
      {
        property_id: 3,
        property_name: "Plot 3",
        property_image: "/img.png",
        property_cost: 100,
        property_desc:
          "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
        property_total_units: 100,
        property_cost_per_unit: 1,
        property_yield: "8%",
        property_total_area_plot: 10000,
        property_min_tenure: "3 yrs",
        property_units_sold: 64,
        property_last_bidding_date: "4th Oct' 22",
        property_sold: true,
        property_location: "Lorem Epsum Dolar",
      },
      {
        property_id: 4,
        property_image: "/img.png",
        property_name: "Plot 4",
        property_cost: 100,
        property_total_area_plot: 10000,
        property_desc:
          "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
        property_total_units: 100,
        property_cost_per_unit: 1,
        property_yield: "8%",
        property_last_bidding_date: "4th Oct' 22",
        property_min_tenure: "3 yrs",
        property_units_sold: 64,
        property_sold: true,
        property_location: "Lorem Epsum Dolar",
      },
    ]);
  }, []);
  return (
    <>
      <div className="container listings">
        {/* Category & Search Component */}{" "}
        <div className="listings_filters">
          <Listings_Filters />
        </div>
        <div className="listings_properties">
          <h2 className="listings_heading">
            32 properties found in HSR Layout
          </h2>
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
