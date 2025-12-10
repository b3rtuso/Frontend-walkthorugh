import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import TourPage from "./pages/ToursPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full pb-10 px-4">
        <Routes>
          <Route path="/" element={<TourPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
