import { Routes, Route } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import ChartsMapsPage from '../pages/ChartsMapsPage';
import Main from '../pages/Main';

// Define the All Routes
const AllRoutes = () => {
  return (
    <div className="flex-grow">
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/charts-maps" element={<ChartsMapsPage />} />
        </Routes>
    </div>
  )
}

export default AllRoutes
