import DaftarLapangan from "../components/elements/DaftarLapangan";
import Heading from "../components/elements/Heading";
import Footer from "../components/elements/footer";
import Navbar from "../components/elements/navbar/navbar";


const SewaLapangan = () => {
  return (
    <div className="bg-[#171830]">
      <Navbar />
      <Heading  />
      <DaftarLapangan />
      <Footer />
    </div>
  );
};

export default SewaLapangan;