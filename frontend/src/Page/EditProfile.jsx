import React, { useState, useEffect } from "react";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import Button from "../components/elements/button";
import SimpleModal from "../components/elements/simplemodal";
import axios from "axios";

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [inputNama, setInputNama] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNoTelp, setInputNoTelp] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        const user = JSON.parse(jsonPayload).user;
        fetchUserData(user.id_pengguna);
      } catch (error) {
        console.error("Invalid token");
      }
    }
  }, []);

  const fetchUserData = async (id_pengguna) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pengguna/${id_pengguna}`
      );
      const userData = response.data.payload[0];
      setUser(userData);
      setInputNama(userData.nama);
      setInputEmail(userData.email);
      setInputNoTelp(userData.no_telp);
      const userDataWithDefaults = {
        ...userData,
        fotoUrl: userData.foto
          ? `/images/profile/${userData.foto}`
          : "/images/profile/avatar.jpeg",
      };
      setUser(userDataWithDefaults);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data");
    }
  };

  const handleEditProfile = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:3001/pengguna/${user.id_pengguna}`, {
        nama: inputNama,
        email: inputEmail,
        no_telp: inputNoTelp,
      })
      .then((response) => {
        setUser({
          ...user,
          nama: inputNama,
          email: inputEmail,
          no_telp: inputNoTelp,
        });
        setIsModalOpen(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setImagePreviewUrl(URL.createObjectURL(file));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.reload(); // Refresh the website
  };

  return (
    <div className="top-0 bg-[#171830]">
      <Navbar />
      <img
        src="/images/profile/edit-profile-banner.png"
        className="w-full"
        alt="edit-profile-banner"
      />
      <div className="container">
        <form onSubmit={handleEditProfile}>
          <div className="w-full flex flex-wrap items-center -mt-24 justify-between">
            <div className="flex flex-wrap text-white items-center">
              <img
                src={user?.fotoUrl || "/images/profile/avatar.jpeg"}
                className="w-[130px] h-[130px] rounded-full mr-10"
                alt="avatar-icon"
              />
              <h3 className="font-semibold text-2xl m-1 mt-28">{user?.nama}</h3>
            </div>
            <div className="flex flex-wrap mt-28">
              <Button
                classname="text-base font-normal text-white bg-blue-500"
                type="submit"
              >
                Simpan
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-start py-20">
            <div className="w-[48%]">
              <h3 className="font-normal text-lg text-white m-1 mb-5">
                Nama Lengkap
              </h3>
              <input
                type="text"
                name="nama"
                value={inputNama}
                onChange={(e) => setInputNama(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                placeholder="Masukkan Nama Anda"
              />
              <h3 className="font-normal text-lg text-white m-1 mb-5">Email</h3>
              <input
                type="email"
                name="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                placeholder="Masukkan Email Anda"
              />
              <h3 className="font-normal text-lg text-white m-1 mb-5">
                Nomor Telepon
              </h3>
              <input
                type="text"
                name="no_telp"
                value={inputNoTelp}
                onChange={(e) => setInputNoTelp(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                placeholder="Masukkan Nomor Telepon Anda"
              />
            </div>
            <div className="w-[48%] rounded shadow-lg">
              <h3 className="font-normal text-lg text-white m-1 mb-5">
                Foto Profil
              </h3>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm rounded bg-white p-2 text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-300"
              />
              {selectedFile && (
                <div className="mt-4">
                  <h3 className="text-white font-medium">Selected File:</h3>
                  <p className="text-white text-sm">{selectedFile.name}</p>
                  <img
                    src={imagePreviewUrl}
                    alt="Selected"
                    className="mt-4 w-full h-64 object-cover rounded"
                  />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      <Footer />
      <SimpleModal
        isOpen={isModalOpen}
        image="/images/icons/success-icon.png"
        message="Profile updated successfully!"
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EditProfile;
