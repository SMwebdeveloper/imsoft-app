import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import settings from "../../assets/settings.svg";
import ring from "../../assets/ring.svg";
import korzinka from "../../assets/korzinka.svg";
import accaunt from "../../assets/akkaunt.svg";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [navList, setNavList] = useState([
    { text: "Elektronika", to: "/" },
    { text: "Ehtiyot qismlari", to: "/" },
    { text: "Gildiraklar", to: "/" },
    { text: "Akustikalar", to: "/" },
    { text: "Qurilmalar", to: "/" },
    { text: "Gadjetlar", to: "/" },
    { text: "Aksesuarlar", to: "/" },
    { text: "Boshqalar", to: "/" },
  ]);

  const urlParams = useLocation().pathname;
  
  const handleSubmit = (e) => {
   e.preventDefault()
   navigate(`?q=${search}`)
  }
  return (
    <div className="bg-[#2c3e50] py-7">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white  mr-[48px] cursor-pointer"
          style={{ fontSize: "22px", fontWeight: "800" }}
        >
          Online <span className="font-light">savdo</span>
        </Link>

        {urlParams === "/" ? (
          <>
          <form onSubmit={handleSubmit} className="flex justify-between items-center mx-3 bg-[#354B61] py-3 px-3 w-[60%] rounded-3xl mr-[12px]">
            <input
              type="text"
              placeholder="Qidiruv"
              className="w-[90%] text-white placeholder:text-white bg-transparent outline-none border-none"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            <FaSearch className="text-white" />
          </form>
        <div className="bg-[rgb(53,75,97)] p-4 mr-[44px] cursor-pointer rounded-3xl">
          <img src={settings} alt="" />
        </div>
          </>
        ) : (
          <ul className="flex items-center">
            {navList.map((item) => {
              return (
                <Link
                  to={item.to}
                  key={item.text}
                  className="text-sm text-white mx-2 duration-200 hover:text-[#939EB4]"
                >
                  {item.text}
                </Link>
              );
            })}
          </ul>
        )}


        <div className="flex items-center justify-evenly">
          <h6 className="text-[#939EB4] text-sm mr-[18px] cursor-pointer font-medium">
            UZ
          </h6>

          <img src={ring} className="cursor-pointer mr-[21px] w-4" alt="" />
          <Link to='/korzinka'>
          <img
            src={korzinka}
            className="mr-[21px] cursor-pointer w-[18px]"
            alt=""
          />
          </Link>
          <div className="bg-[#445f7a] rounded-full cursor-pointer">
            <img src={accaunt} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
