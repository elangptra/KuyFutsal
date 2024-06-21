import { useState } from "react";
import Button from "../elements/button/index";

const UploadPhotoButton = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
  };

  return (
    <div className="flex flex-col text-center items-center justify-center border p-10 border-black rounded-md bg-slate-400">
      <div className="relative">
        {photo ? (
          <>
            <img src={photo} alt="Uploaded" className="mb-4 rounded-lg" style={{ maxHeight: "300px" }} />
            <Button classname="text-base font-normal text-white bg-blue-500" onClick={handleRemovePhoto}>
              Hapus Foto
            </Button>
          </>
        ) : (
          <>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handlePhotoChange}
            />
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mb-4">Upload foto disini</p>
              <Button classname="text-base font-normal text-white bg-blue-500">
                Pilih Foto
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadPhotoButton;
