import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2C3E50] py-10">
      <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-1 ">
        <div>
          <div className="mb-14">
            <Link
              to="/"
              className="text-white cursor-pointer "
              style={{ fontSize: "22px", fontWeight: "800" }}
            >
              Online <span className="font-light">savdo</span>
            </Link> <br />
            <p className="text-[#AAAAAA] text-xs font-medium">onlayn do'koni</p>
          </div>
          <div className="mb-5 xs:hidden">
            <p className="text-[#aaaaaa] text-xs font-medium">
              Savollar bo’yicha murojat uchun:
            </p>
            <a href="#" className="text-[#aaaaaa] text-xl font-medium">
              info@imsoft.uz
            </a>
          </div>
          <ul className="flex items-center xs:hidden">
            <li className="text-[#aaaaaa] text-2xl mr-5 cursor-pointer">
              <FaFacebook />
            </li>
            <li className="text-[#aaaaaa] text-2xl mr-5 cursor-pointer">
              <FaInstagram />
            </li>
            <li className="text-[#aaaaaa] text-2xl mr-5 cursor-pointer">
              <FaTelegram />
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white text-sm font-bold mb-4">Kompaniya</h5>
          <ul>
            <li className="mb-2">
              <Link to="/" className="text-[#aaaa] text-sm">
                Yangiliklar
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/bizHaqimizda" className="text-[#aaaa] text-sm">
                Kompaniya haqida
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/bizningOffis" className="text-[#aaaa] text-sm">
                Bizning ofislar
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/callCenter" className="text-[#aaaa] text-sm">
                Biznes uchun
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white text-sm font-bold mb-4">Ma'lumotlar</h5>
          <ul>
            <li className="mb-2">
              <Link to="/tolovRejasi" className="text-[#aaaa] text-sm">
                To'lov rejasi (Рассрочка)
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/yetkazibBerish" className="text-[#aaaa] text-sm">
                Yetkazib berish
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/aloqa" className="text-[#aaaa] text-sm">
                Aloqa
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white text-sm font-bold mb-4">
            Biz bilan bog'lanish
          </h5>
          <ul>
            <li className="mb-1 text-[#aaaa] text-sm">
                Manzil:<span className="text-white"> 100096, Toshkent, Muqumiy, 13</span>
            </li>
            <li className="mb-1 text-[#aaaa] text-sm">
                Qisqa raqam:<span className="text-white">1216</span>
            </li>
            <li className="mb-1 text-[#aaaa] text-sm">
                Faks:<span className="text-white">+998 71 150 53 95</span>
            </li>
            <li className="mb-1 text-[#aaaa] text-sm">
                Email:<span className="text-white underline decoration-white">company@imsoft.uz</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
