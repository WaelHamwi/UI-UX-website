import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Model from "./components/Model";
import HighLights from "./components/HighLights";
import ItsFunctionality from "./components/ItsFunctionality";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Features />
        <Model />
        <HighLights />
        <ItsFunctionality />
        <Footer />
      </main>
    </>
  );
};

export default App;
