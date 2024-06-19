import { useState } from "react";

const RiwayatPemesanan = () => {
  const [showNotification, setShowNotification] = useState(false);

  const Riwayat = [
    {
      id: 1,
      tanggal: "4 Mei 2024",
      title: "Jala Futsal",
      waktu: "16.00 - 17.00",
    },
    {
      id: 2,
      tanggal: "10 Mei 2024",
      title: "Karawaci Futsal Center",
      waktu: "20:00 - 21.00",
    },
  ];

  const handleClickSchedule = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="lg:w-[100px] md:w-[200px] bg-blue sm:w-[200px] max-h-0 absolute top-[110px] right-[-70px] ">
      {showNotification && (
        <div className="bg-white border border-black-200 p-5 rounded-md absolute top-9 right-10 ">
          <div className="">
            <h1 className="text-center text-lg font-semibold">
              Riwayat Pemesanan
            </h1>
            <div className="flex justify-center">
              <div className="">
                {Riwayat.map((riwayat) => (
                  <div
                    key={riwayat.id}
                    className="w-full flex justify-center border-gray-400 my-3"
                  >
                    <p className="text-center">{riwayat.id}</p>
                    <div className="w-[300px] border-2 rounded-md ms-3 border-black-200">
                      <div className="flex border-b-2 border-black m-3">
                        <div className="me-3">
                          <p className="font-semibold text-sm">
                            {" "}
                            Tanggal <br />
                          </p>
                          <p className="text-[14px]">{riwayat.tanggal}</p>
                        </div>
                        <div className="border-l-2 border-black">
                          <p className="text-sm font-semibold ms-2">
                            {" "}
                            Lapangan <br />
                          </p>
                          <p className="ms-2 text-[14px]">{riwayat.title}</p>
                        </div>
                      </div>

                      <div className="flex justify-between m-3">
                        <p className="text-sm font-semibold">
                          {" "}
                          Durasi Waktu <br />
                        </p>
                        <p className="text-[14px]">{riwayat.waktu}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Icon */}
      <div>
        <img
          src="/images/schedule.png"
          alt=""
          className="w-6 mb-2 me-3 cursor-pointer"
          onClick={handleClickSchedule}
        />
      </div>
    </div>
  );
};

export default RiwayatPemesanan;
