import { useState } from "react";
import { Link } from "react-router-dom";

const Heading = (props) => {
  const { img = "images/sewaLapangan.png" } = props;



  const handleChangeKecamatan = (event) => {
    const selectedKecamatan = event.target.value;
    window.location.href = `/sewaLapangan/${selectedKecamatan}`;
  };

  return (
    <>
      <div className="w-full mt-[-80px]">
        <img src={img} alt="" className="w-full h-vh object-cover" />
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold italic absolute lg:top-[220px] md:top-[150px] sm:top-[100px] lg:left-[250px] md:left-[100px] sm:left-[50px] text-white ">
          RASAKAN SENSASI BERMAIN YANG TAK TERLUPAKAN !
        </h1>
      </div>
    </>
  );
};

export default Heading;
