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
    fetch(config.get("GetProperties") + "/" + propertyid)
      .then((response) => {
        return response.json();
      })
      .then((response_json) => {
        setproperty(response_json);
      });
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
            {activeMenu === 1 && <Property_Details_Property_Features />}
            {activeMenu === 2 && <Property_Details_Holders />}
            {activeMenu === 3 && <Property_Details_About />}
            {activeMenu === 4 && <Property_Details_Locality />}
            {activeMenu === 5 && <Property_Details_Latest_Developments />}
            {activeMenu === 6 && <Property_Details_Charges />}
            {activeMenu === 7 && <Property_Details_Returns />}
            {activeMenu === 8 && <Property_Details_FAQs />}
          </div>
          <div className="single-property-action-bar"></div>
        </div>
      </div>
    </>
  );
};

export default Single_Listing;
