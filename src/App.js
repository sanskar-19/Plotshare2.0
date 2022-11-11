import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Listings from "./pages/listings";
import Single_Listing from "./pages/single_listing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/properties/:propertyid" element={<Single_Listing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
