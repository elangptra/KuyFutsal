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
      </div>
    </>
  );
};

export default Heading;
