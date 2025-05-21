
import CommentPage from "../Sections/HomePage/CommentPage";
import Features from "../Sections/HomePage/Features";
import FunctionPage from "../Sections/HomePage/FunctionPage";
import HeroSection from "../Sections/HomePage/HeroSection";
import NavBar from "../Sections/HomePage/NavBar";
import Footer from "../Sections/HomePage/Footer";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <CommentPage />
      <FunctionPage />
      <Footer />
    </>
  );
};

export default Homepage;
