import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import BookingPage from "./pages/BookingPage";
import { useState } from "react";

function App() {
  const [bookingDetails, setBookingDetails] = useState([]);

  console.log(bookingDetails.length);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            path="/search/:state/:city"
            element={<SearchPage setBookingDetails={setBookingDetails} />}
          />
          <Route
            path="/booking-page"
            element={<BookingPage bookingDetails={bookingDetails} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
