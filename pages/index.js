import Contents from "../components/Contents";
import FixContent from "../components/FixContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Contents />
      <FixContent />
      <Footer />
    </>
  );
}
