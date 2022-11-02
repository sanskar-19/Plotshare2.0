import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faShare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Listing_Cards = ({ property }) => {
  return (
    <>
      <div className="property-row">
        <div className="single-property-image">
          <img src={property.property_image} alt="" />
        </div>
        <div className="single-property-content">
          <div className="single-property-title">{property.property_name}</div>
          <div className="single-property-location">
            <span>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "10px" }}
              />
              {property.property_location}
            </span>
          </div>
          <div className="single-property-share">
            <FontAwesomeIcon icon={faShare} style={{ marginRight: "10px" }} />
            <FontAwesomeIcon icon={faHeart} style={{ marginRight: "10px" }} />
          </div>
          <div className="single-property-attributes">
            <table>
              <tbody>
                <tr>
                  <th>Total area plot</th>
                  <th>Total units</th>
                  <th>Cost per unit</th>
                </tr>
                <tr>
                  <td>{property.property_total_area_plot + " sq.ft"}</td>
                  <td>{property.property_total_units}</td>
                  <td>{property.property_cost_per_unit}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th>Units Sold</th>
                  <th>Min Tenure</th>
                  <th>Yield</th>
                </tr>
                <tr>
                  <td>{property.property_units_sold}</td>
                  <td>{property.property_min_tenure}</td>
                  <td>{property.property_yield}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="single-property-cta">
            <div className="biddate">
              Bid open till <br></br>
              <span className="date">
                {property.property_last_bidding_date}
              </span>
            </div>
            <div className="single-property-buy-now">
              <button>
                <Link
                  className="property-link"
                  to={
                    "/properties/" +
                    property.property_name.toLowerCase().split(" ").join("-")
                  }
                >
                  Buy Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing_Cards;
