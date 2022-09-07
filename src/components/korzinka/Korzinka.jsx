import React from "react";
import { Link } from "react-router-dom";
import { KorzinkaUse } from "../../contextHooks/KorzinkaUse";
import starActive from "../../assets/star-active.svg";
import starPassiv from "../../assets/star-passiv.svg";
import { FaTrash } from "react-icons/fa";
import { data } from "autoprefixer";
const korzinka = () => {
  const { choosenItem, deletedItem } = KorzinkaUse();

  const hanldeDelete = (id) => {
    deletedItem(id);
  };
  console.log(choosenItem);
  return (
    <div className="py-24">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col items-start">
        {choosenItem &&
          choosenItem.map((item) => {
            return (
              <div
                className="w-[65%] flex items-center border-t-2 border-b-2 border-solid border-[#E0E0E0] py-5 "
                key={item.id}
                 >
                <div className="flex items-center">
                  <img
                    className="w-[200px] h-[150px] object-cover rounded-lg mr-4"
                    src={item.img}
                    alt=""
                  />
                  <div>
                    <h2 className="text-xl font-medium text-[#2C3E50] mb-1">{item.name}</h2>
                    <p className="text-[#939EB4] mb-1">{item.bolim}</p>
                    <h4 className="text-2xl font-medium mb-2">{item.price}</h4>
                    <div className="flex items-center">
                      <img src={starActive} alt="" />
                      <img src={starActive} alt="" />
                      <img src={starActive} alt="" />
                      <img src={starActive} alt="" />
                      <img src={starPassiv} alt="" />
                    </div>
                    
                  </div>
                  <div className="flex items-center ml-12">
                    <div className="w-[180px] flex items-center">
                      <button className="w-1/3 py-2 border-solid border-[#939eb4] border-2 border-r rounded-l-full text-[#939EB4] font-medium">
                        -
                      </button>
                      <button className="w-1/3 py-2 border-solid border-[#939eb4] border-2 border-l border-r text-[#939EB4] font-medium">
                        1
                      </button>
                      <button className="w-1/3 py-2 border-solid border-[#939eb4] border-2 border-l rounded-r-full text-[#939EB4] font-medium">
                        +
                      </button>
                    </div>
                    <h4 className="text-2xl font-medium text-[#2C3E50] ml-2">{item.price}</h4>
                    <FaTrash className="text-[#2C3E50] text-3xl cursor-pointer" onClick={()=> {
                        hanldeDelete()
                    }}/>
                    </div>
                </div>
              </div>
            );
          })}
        </div>

          <div className="w-[30%] border-2 border-solid border-[#E0E0E0] rounded-2xl py-4 px-3">
           <div className="flex items-center justify-between">
            <div>
                <h2 className="text-lg mb-1 font-normal text-[#E0E0E0]">Mahsulot: {data.lenght}</h2>
                <h2 className="text-lg mb-1 font-normal text-[#E0E0E0]">Chegirma:</h2>
                <h2 className="text-lg  font-bold text-[#E0E0E0]">Barchasi:</h2>
            </div>
            <div>
                <h2 className="text-lg mb-1 text-[#2C3E50] font-medium">14 900 000</h2>
                <h2 className="text-lg mb-1 text-[#2C3E50] font-medium">0%</h2>
                <h2 className="text-lg text-[#2C3E50] font-medium">14 900 000</h2>
            </div>
           </div>
           <button className='w-full mt-4 rounded-lg bg-[#2C3E50] p-3 text-white font-medium border-2 mb-4 border-solid border-[#2c3e50] duration-150 hover:bg-white hover:text-[#2c3e50]'>Tolovga otish</button>
           <Link to='/' className='block text-center rounded-lg bg-[#e0e0e0] p-3 text-black font-medium border-2 border-solid border-[#e0e0e0] '>Bosh sahifa</Link>
          </div>
      </div>
    </div>
  );
};

export default korzinka;
