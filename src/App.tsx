import Footer from "./components/Footer";
import KupPage from "./components/KupPage";
import LandingPage from "./components/LandingPage";
import MefaalenietylkoPage from "./components/MefaalenietylkoPage";
import MefoludkiPage from "./components/MefoludkiPage";

export default function App() {
  return (
    <div className="min-h-screen h-screen">
      <div className="container h-full mx-auto p-5">
        <LandingPage />
        <MefoludkiPage />
        <MefaalenietylkoPage />
        <KupPage />
        <Footer />
      </div>
    </div>
  );
}
