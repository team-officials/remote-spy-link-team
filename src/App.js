import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import PayymentGate from "./Components/PayymentGate";
import Location from "./Components/Location";
import MembersshipCard from "./Components/MembersshipCard";
import AccessCode from "./Components/AccessCode";
import RemoteLink from "./Components/Remotelink/RemoteLink";
import Navbar from "./Navbar/Navbar";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <BrowserRouter>
      <NavBarWrapper />
      <Routes>
        <Route path="/pay" element={<PayymentGate />} />
        <Route path="/location" element={<Location />} />
        <Route path="/memberCard" element={<MembersshipCard />} />
        <Route path="/access" element={<AccessCode />} />
        <Route path="/" element={<RemoteLink />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// A new component to handle the conditional rendering of Navbar
function NavBarWrapper() {
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Conditionally render Navbar only on routes other than '/' */}
      {location.pathname !== "/" && <Navbar />}
    </>
  );
}

export default App;
