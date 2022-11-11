const Property_Details_Property_Features = ({ property }) => {
  return (
    <>
      <div className="single-property-image">
        <img src="/farm.png" alt="" />
      </div>
      <div className="single-property-heading">
        <h2>{property.property_name}</h2>
      </div>
      <div className="single-property-location">
        <p>{property.property_location}</p>
      </div>
      <div className="single-property-attributes seperator">
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

      <div className="single-property-bids seperator">
        <h2>Ongoing bids</h2>
        <table className="bidding-table">
          <tbody>
            <tr>
              <td>28 Sept</td>
              <td>₹1,00,000</td>
              <td>2 units</td>
              <td className="rejected">Rejected</td>
            </tr>
            <tr>
              <td>2 Sept</td>
              <td>₹1,00,000</td>
              <td>2 units</td>
              <td className="accepted">Accepted</td>
            </tr>
            <tr>
              <td>1 Aug</td>
              <td>₹1,00,000</td>
              <td>2 units</td>
              <td className="rejected">Rejected</td>
            </tr>
            <tr>
              <td>16 July</td>
              <td>₹1,00,000</td>
              <td>2 units</td>
              <td className="accepted">Accepted</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="single-property-about seperator">
        <h2>About Property</h2>
        <p className="property_description">{property.property_desc}</p>
      </div>
      <div className="single-property-address seperator">
        <h2> Property Location</h2>
        <p className="property_description">
          The asset is located on Old Madras Road, along the Hoskote-Narasapura
          Belt. The area is well connected to Bengaluru, Chennai, and Tirupati.
          The area is also close to the upcoming Bengaluru-Chennai expressway.
        </p>
        <img src="/map.png" alt="" />
      </div>
    </>
  );
};

export default Property_Details_Property_Features;
