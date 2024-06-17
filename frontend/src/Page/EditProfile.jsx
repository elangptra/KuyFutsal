import React from "react";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import Button from "../components/elements/button/index";
import Input from "../components/elements/input";

const EditProfile = () => {

  return (
    <div className="top-0 bg-[#171830]">
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      {/* Body Start */}
        <img src="/images/profile/edit-profile-banner.png" className="w-full" alt="edit-proifle-banner" />
        <div className="container">
            <div className="w-full flex flex-wrap items-center -mt-32 justify-between">
                <div className="flex flex-wrap text-white items-center">
                    <img src="/images/profile/avatar.jpeg" className="rounded-full mr-10" alt="avatar-icon" />
                    <h3 className="font-semibold text-2xl m-1 mt-32">El Satoru Manuk</h3>
                </div>
                <div className="flex flex-wrap mt-32">
                    <Button classname="text-base font-normal text-white bg-slate-500 mr-5">Ubah Foto</Button>
                    <Button classname="text-base font-normal text-white bg-blue-500">Simpan</Button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between items-start py-24">
                <div className="w-[48%]">
                    <h3 className="font-normal text-lg text-white m-1 mb-5">Nama Lengkap</h3>
                    <Input
                        type="text"
                        name="nama"
                        placeholder="Masukkan Nama Anda"
                      ></Input>
                    <h3 className="font-normal text-lg text-white m-1 mb-5">Email</h3>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Masukkan Email Anda"
                      ></Input>
                    <h3 className="font-normal text-lg text-white m-1 mb-5">Nomor Telepon</h3>
                    <Input
                        type="telp"
                        name="no_telp"
                        placeholder="Masukkan Nomor Telepon Anda"
                      ></Input>
                </div>
                <div className="w-[48%]">
                    <h3 className="font-normal text-lg text-white m-1 mb-5">Tanggal Lahir</h3>
                        <Input
                            type="date"
                            name="tgl_lahir"
                            placeholder="Masukkan Tanggal Lahir Anda"
                      ></Input>
                    <h3 className="font-normal text-lg text-white m-1 mb-5">\buat kebutuhan\</h3>
                    <Input
                        type="text"
                        name="nama"
                        placeholder="Masukkan apa ini nanti Anda"
                      ></Input>
                </div>
            </div>
        </div>
      {/* Body End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default EditProfile;
