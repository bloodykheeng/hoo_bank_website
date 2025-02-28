import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
