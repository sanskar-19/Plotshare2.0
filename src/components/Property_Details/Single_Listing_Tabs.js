const Single_Listing_Tabs = ({ setactiveMenu, activeMenu }) => {
  return (
    <>
      <div className="single-property-tabs-menu ">
        <div className="container">
          <ul>
            <li
              onClick={() => setactiveMenu(1)}
              className={activeMenu === 1 ? "active" : undefined}
            >
              Property Features
            </li>
            <li
              onClick={() => setactiveMenu(2)}
              className={activeMenu === 2 ? "active" : undefined}
            >
              Holders
            </li>
            <li
              onClick={() => setactiveMenu(3)}
              className={activeMenu === 3 ? "active" : undefined}
            >
              About
            </li>
            <li
              onClick={() => setactiveMenu(4)}
              className={activeMenu === 4 ? "active" : undefined}
            >
              Locality
            </li>
            <li
              onClick={() => setactiveMenu(5)}
              className={activeMenu === 5 ? "active" : undefined}
            >
              Latest Developments
            </li>
            <li
              onClick={() => setactiveMenu(6)}
              className={activeMenu === 6 ? "active" : undefined}
            >
              Charges
            </li>
            <li
              onClick={() => setactiveMenu(7)}
              className={activeMenu === 7 ? "active" : undefined}
            >
              Returns
            </li>
            <li
              onClick={() => setactiveMenu(8)}
              className={activeMenu === 8 ? "active" : undefined}
            >
              FAQs
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Single_Listing_Tabs;
