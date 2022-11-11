const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src="/plotshare.png" alt="" srcSet="" />
            </div>
            <div className="menu">
              <ul>
                <li>My Orders</li>
                <li>My Holdings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
