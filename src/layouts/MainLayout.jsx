import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ hasHero }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <Navbar hasHero={hasHero}/>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}