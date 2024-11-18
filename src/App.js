import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <Navbar />
      <Routes>
        <Route path="/pay" element= { <PayymentGate />} />
        <Route path="/location" element= { <Location /> } />
        <Route path="/memberCard" element= { <MembersshipCard /> } />
        <Route path="/access" element={<AccessCode />} />
        <Route path="/" element={<RemoteLink />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
