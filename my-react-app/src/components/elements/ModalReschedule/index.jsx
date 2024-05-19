import {X} from "lucide-react";

const ModalReschedule = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8">
                <div className="flex flex-wrap justify-between mb-4">
                    <h2 className="text-xl font-bold">Detail Reschedule & Pembatalan</h2>
                    <button onClick={onClose} className="ml-4">
                        <X />
                    </button>
                </div>
                <div className="flex flex-wrap">
                    <div className="border border-black rounded-md bg-transparent p-2 mr-2">
                        <p className="text-base">Reschedule hingga 3 hari sebelum jadwal sewa.</p>
                    </div>
                    <div className="border border-black rounded-md bg-transparent p-2 ml-2">
                        <p className="text-base mb-4">Reservasi tidak dapat dibatalkan dan tidak berlaku refund.</p>
                        <p className="text-red-500">Tidak ada refund</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalReschedule;