import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Booking from "./pages/Booking/Booking";
import Seat from "./pages/Seat/Seat";
import Dining from "./pages/Dining/Dining";
import VirtualTour from "./pages/VirtualTour/VirtualTour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/seat" element={<Seat />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/virtualexperience" element={<VirtualTour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
