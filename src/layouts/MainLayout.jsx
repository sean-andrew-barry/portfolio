import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
