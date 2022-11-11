import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Single_Listing_Tabs from "../components/Property_Details/Single_Listing_Tabs";
import config from "../config/config";
import Property_Details_Property_Features from "../components/Property_Details/Property_Details_Property_Features";
import Property_Details_About from "../components/Property_Details/Property_Details_About";
import Property_Details_Holders from "../components/Property_Details/Property_Details_Holders";
import Property_Details_Locality from "../components/Property_Details/Property_Details_Locality";
import Property_Details_Latest_Developments from "../components/Property_Details/Property_Details_Latest_Developments";
import Property_Details_Charges from "../components/Property_Details/Property_Details_Charges";
import Property_Details_Returns from "../components/Property_Details/Property_Details_Returns";
import Property_Details_FAQs from "../components/Property_Details/Property_Details_FAQs";

const Single_Listing = () => {
  const { propertyid } = useParams();
  const [property, setproperty] = useState();
  const [activeMenu, setactiveMenu] = useState(1);
  useEffect(() => {
    // fetch(config.get("GetProperties") + "/" + propertyid)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response_json) => {
    //     setproperty(response_json);
    //   });

    setproperty();
  }, []);
  return (
    <>
      <div className="property-details">
        {/* This is top navigation tabular menu for single Listings page */}
        <Single_Listing_Tabs
          setactiveMenu={setactiveMenu}
          activeMenu={activeMenu}
        />
        <div className="container single-property-wrapper">
          <div className="single-property-content-box">
            {activeMenu === 1 && (
              <Property_Details_Property_Features
                property={{
                  property_id: 1,
                  property_name: "Winsdors farm land near ORR",
                  property_location: "Outer ring road, Sarjapur, Bangalore",
                  property_total_units: 100,
                  property_total_area_plot: 10000,
                  property_cost_per_unit: 1,
                  property_min_tenure: "3 yrs",
                  property_units_sold: 64,
                  property_desc:
                    "The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive. The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive",
                  property_yield: "8%",
                  property_last_bidding_date: "4th Oct' 22",
                }}
              />
            )}
            {activeMenu === 2 && (
              <Property_Details_Property_Features
                property={{
                  property_id: 1,
                  property_name: "Winsdors farm land near ORR",
                  property_location: "Outer ring road, Sarjapur, Bangalore",
                  property_total_units: 100,
                  property_total_area_plot: 10000,
                  property_cost_per_unit: 1,
                  property_min_tenure: "3 yrs",
                  property_units_sold: 64,
                  property_desc:
                    "The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive. The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive",
                  property_yield: "8%",
                  property_last_bidding_date: "4th Oct' 22",
                }}
              />
            )}
            {activeMenu === 3 && (
              <Property_Details_Property_Features
                property={{
                  property_id: 1,
                  property_name: "Winsdors farm land near ORR",
                  property_location: "Outer ring road, Sarjapur, Bangalore",
                  property_total_units: 100,
                  property_total_area_plot: 10000,
                  property_cost_per_unit: 1,
                  property_min_tenure: "3 yrs",
                  property_units_sold: 64,
                  property_desc:
                    "The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive. The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive",
                  property_yield: "8%",
                  property_last_bidding_date: "4th Oct' 22",
                }}
              />
            )}
            {activeMenu === 4 && (
              <Property_Details_Property_Features
                property={{
                  property_id: 1,
                  property_name: "Winsdors farm land near ORR",
                  property_location: "Outer ring road, Sarjapur, Bangalore",
                  property_total_units: 100,
                  property_total_area_plot: 10000,
                  property_cost_per_unit: 1,
                  property_min_tenure: "3 yrs",
                  property_units_sold: 64,
                  property_desc:
                    "The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive. The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive",
                  property_yield: "8%",
                  property_last_bidding_date: "4th Oct' 22",
                }}
              />
            )}
            {activeMenu === 5 && (
              <Property_Details_Property_Features
                property={{
                  property_id: 1,
                  property_name: "Winsdors farm land near ORR",
                  property_location: "Outer ring road, Sarjapur, Bangalore",
                  property_total_units: 100,
                  property_total_area_plot: 10000,
                  property_cost_per_unit: 1,
                  property_min_tenure: "3 yrs",
                  property_units_sold: 64,
                  property_desc:
                    "The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive. The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive",
                  property_yield: "8%",
                  property_last_bidding_date: "4th Oct' 22",
                }}
              />
            )}
            {activeMenu === 6 && (
              <Property_Details_Property_Features
                property={{
                  property_id: 1,
                  property_name: "Winsdors farm land near ORR",
                  property_location: "Outer ring road, Sarjapur, Bangalore",
                  property_total_units: 100,
                  property_total_area_plot: 10000,
                  property_cost_per_unit: 1,
                  property_min_tenure: "3 yrs",
                  property_units_sold: 64,
                  property_desc:
                    "The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive. The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive",
                  property_yield: "8%",
                  property_last_bidding_date: "4th Oct' 22",
                }}
              />
            )}
            {activeMenu === 7 && (
              <Property_Details_Property_Features
                property={{
                  property_id: 1,
                  property_name: "Winsdors farm land near ORR",
                  property_location: "Outer ring road, Sarjapur, Bangalore",
                  property_total_units: 100,
                  property_total_area_plot: 10000,
                  property_cost_per_unit: 1,
                  property_min_tenure: "3 yrs",
                  property_units_sold: 64,
                  property_desc:
                    "The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive. The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive",
                  property_yield: "8%",
                  property_last_bidding_date: "4th Oct' 22",
                }}
              />
            )}
            {activeMenu === 8 && (
              <Property_Details_Property_Features
                property={{
                  property_id: 1,
                  property_name: "Winsdors farm land near ORR",
                  property_location: "Outer ring road, Sarjapur, Bangalore",
                  property_total_units: 100,
                  property_total_area_plot: 10000,
                  property_cost_per_unit: 1,
                  property_min_tenure: "3 yrs",
                  property_units_sold: 64,
                  property_desc:
                    "The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive. The newly constructed & platinum rated building is situated in the largest IT corridor of Bangalore. This is a rare opportunity to acquire an A+ grade asset with a blue chip tenant at an attractive",
                  property_yield: "8%",
                  property_last_bidding_date: "4th Oct' 22",
                }}
              />
            )}
            {/* {activeMenu === 2 && <Property_Details_Holders />}
            {activeMenu === 3 && <Property_Details_About />}
            {activeMenu === 4 && <Property_Details_Locality />}
            {activeMenu === 5 && <Property_Details_Latest_Developments />}
            {activeMenu === 6 && <Property_Details_Charges />}
            {activeMenu === 7 && <Property_Details_Returns />}
            {activeMenu === 8 && <Property_Details_FAQs />} */}
          </div>
          <div className="single-property-action-bar">
            <div className="single-property-purchase-form">
              <div className="single-property-heading">
                <h2>Buy</h2>
              </div>
              <div className="field">
                <label htmlFor="prop_no_of_units">Select no. of units</label>
                <select
                  name="prop_no_of_units"
                  id="prop_no_of_units"
                  className="single-property-form-input"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
              </div>
              <div className="field">
                <input
                  type="number"
                  name="single-property-form-price"
                  id="single-property-form-price"
                  placeholder="Enter unit price"
                />
              </div>

              <button className="single-property-form-cta">BUY NOW</button>
              <button className="single-property-form-cta single-property-form-cta-whatsapp">
                CONNECT VIA WHATSAPP
              </button>
            </div>

            <div className="single-property-bids">
              <div className="single-property-heading">
                <h2>Ongoing Bids</h2>
                <table className="bidding-table">
                  <tbody>
                    <tr>
                      <td>₹1,00,000</td>
                      <td>2 units</td>
                      <td className="rejected">Rejected</td>
                    </tr>
                    <tr>
                      <td>₹1,00,000</td>
                      <td>2 units</td>
                      <td className="accepted">Accepted</td>
                    </tr>
                    <tr>
                      <td>₹1,00,000</td>
                      <td>2 units</td>
                      <td className="rejected">Rejected</td>
                    </tr>
                    <tr>
                      <td>₹1,00,000</td>
                      <td>2 units</td>
                      <td className="accepted">Accepted</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single_Listing;
