import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import FormContact from "../components/Fragments/FormContact";
import {
    faEnvelope,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactPage = ()=>{

    return (
        <div className="mt-[-80px] bg-[#171830]">
            {/* Header Start */}
            <Navbar />
            {/* Header End */}

            {/* Mini Image Header Start */}
            <div className="w-full py-2">
                <div className="flex flex-wrap relative items-center justify-center">
                    <img src="images/Contact/contact-banner.png" alt="Mini-Contact-banner" className="w-full top-0 -ml-2 object-cover"/>
                    <h1 className="text-3xl font-semibold absolute text-white">Pertanyaan Tentang KuyFutsal</h1>
                </div>
            </div>
            {/* Mini Image Header End */}

            {/* Social Media Start */}
            <div className="container">
                <div className="flex flex-col w-full px-2 py-5 mt-10 items-center justify-center">
                    <h3 className="font-semibold text-base text-white text-center w-2/3">Terima kasih sudah mengunjungi website KuyFutsal. 
                        Apakah Kamu memiliki pertanyaan seputar platform ChoiceSport? Sampaikan pertanyaan Anda di sini. 
                        Tim kami akan menghubungi Anda secepatnya
                    </h3>
                    <div className="flex w-2/5 px-2 py-10 justify-between items-center">
                        <div className="flex flex-col w-1/3 justify-center items-center text-center">
                            <a href="#" className="w-20 h-20 rounded-full flex justify-center items-center bg-blue-300">
                                <div className=" w-[4rem] h-[4rem] flex justify-center items-center rounded-full border border-slate-800 text-slate-800 hover:text-white transition">
                                <FontAwesomeIcon icon={faEnvelope} className="size-10"/>
                                </div>
                            </a>
                            <h3 className="font-bold mt-2 text-white">Email Address</h3>
                            <p className="text-base text-white">marketing@kuyfutsal.com</p>
                        </div>
                        <div className="flex flex-col w-1/3 justify-center items-center text-center">
                            <a href="#" className="w-20 h-20 rounded-full flex justify-center items-center bg-blue-300">
                                <div className=" w-[4rem] h-[4rem] flex justify-center items-center rounded-full border border-slate-800 text-slate-800 hover:text-white transition">
                                <img src="images/icons/instagram.png" alt="Icon-Instagram" className="size-10" />
                                </div>
                            </a>
                            <h3 className="font-bold mt-2 text-white">Instagram</h3>
                            <p className="text-base text-white">@kuyfutsal</p>
                        </div>
                        <div className="flex flex-col w-1/3 justify-center items-center text-center">
                            <a href="#" className="w-20 h-20 rounded-full flex justify-center items-center bg-blue-300">
                                <div className=" w-[4rem] h-[4rem] flex justify-center items-center rounded-full border border-slate-800 text-slate-800 hover:text-white transition">
                                <FontAwesomeIcon icon={faPhone} className="size-10"/>
                                </div>
                            </a>
                            <h3 className="font-bold mt-2 text-white">Phone</h3>
                            <p className="text-base text-white">+62xxxxxxxxx</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Social Media End */}

            {/* Contact Start */}
            <div className="container">
                <div className="flex flex-wrap justify-center items-center -mt-20">
                    <div className="w-1/3">
                        <img src="images/Contact/contact-img.png" alt="Bapak-bapak contact" />
                    </div>
                    <div className="w-2/3">
                        <FormContact/>
                    </div>
                </div>
            </div>
            {/* Contact End */}

            {/* Footer Start */}
            <Footer />
            {/* Footer End */}
        </div>
    )
}
export default ContactPage;