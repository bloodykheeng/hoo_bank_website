import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";
import ScrollTopButton, { ScrollToTopOnRoute } from "./site/ScrollTop";

const App = () => (
  <Router>
    <ScrollToTopOnRoute />
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ScrollTopButton />
  </Router>
);

export default App;
