import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import starActive from "../../assets/star-active.svg";
import starPassiv from "../../assets/star-passiv.svg";

const Card = ({market, isLoading}) => {
    const [more, setMore] = useState(false)
    console.log(market);

    const handleClick = () =>{
        setMore(!more)
    }

    

    
  return (
    <div className='py-14'>
        <div className="container mx-auto">
           <h2 className='text-3xl font-semibold mb-7'>Mashxur <span className='font-normal'>mahsulotlar</span> </h2>
           <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-4 sm:grid-cols-2'>
           {isLoading && <div className='text-3xl font-medium text-[#2c3e50]'>Loading...</div>}
            {market && market.map((item) => {
                console.log(item);
                return(
                    <div className='bg-[#f5f5f6] pt-2 h-[450px] px-3 rounded-lg' key={item.id}>
                        <img src={item.img} className='w-[100%] h-[60%] rounded-lg object-cover mb-3' alt="" />
                       <h2 className='font-medium list-inside text-[17px] leading-[21px] tracking-tight text-[#2C3E50] mb-1'>{item.name}</h2>    
                      <p className='text-xs text-[#939EB4] mb-2'>{item.bolim}</p>
                      <h6 className='text-base text-[#2c3e50] mb-1'>{item.price}</h6>
                       <div className='flex items-center mb-6'>
                        <img src={starActive} alt={starActive} />
                        <img src={starActive} alt={starActive} />
                        <img src={starActive} alt={starActive} />
                        <img src={starActive} alt={starActive} />
                        <img src={starPassiv} alt={starPassiv} />
                       </div>
                       <Link to={`/batafsil/${item.id}`} className=' bg-[#2c3e50] border-[#2c3e50] border-solid border-[1px] text-white font-medium text-sm py-[15px] px-[85px] rounded-full hover:bg-transparent duration-200 hover:text-[#2c3e50]'>Batafsil</Link>
                  </div>
                )
            })}

            {more && market.map((item) => {
                const {id, data} = item
                return(
                    <div className='bg-[#f5f5f6] pt-2 h-[450px] px-3 rounded-lg' key={id}>
                        <img src={data.img} className='w-[100%] h-[60%] rounded-lg object-cover mb-3' alt="" />
                       <h2 className='font-medium list-inside text-[17px] leading-[21px] tracking-tight text-[#2C3E50] mb-1'>{data.name}</h2>    
                      <p className='text-xs text-[#939EB4] mb-2'>{data.bolim}</p>
                      <h6 className='text-base text-[#2c3e50] mb-1'>{data.price}</h6>
                       <div className='flex items-center mb-6'>
                        <img src={starActive} alt={starActive} />
                        <img src={starActive} alt={starActive} />
                        <img src={starActive} alt={starActive} />
                        <img src={starActive} alt={starActive} />
                        <img src={starPassiv} alt={starPassiv} />
                       </div>
                       <Link to={`/batafsil:${id}`} className=' bg-[#2c3e50] border-[#2c3e50] border-solid border-[1px] text-white font-medium text-sm py-[15px] px-[85px] rounded-full hover:bg-transparent duration-200 hover:text-[#2c3e50]'>Batafsil</Link>
                  </div>
                )
            })}
           </div>
            {!more ? 
               <button onClick={handleClick} className=' bg-[#2c3e50] border-[#2c3e50] border-solid border-[1px] text-white font-medium text-sm py-[15px] px-[85px] rounded-full hover:bg-transparent duration-200 hover:text-[#2c3e50] mx-auto mt-5 flex'>Ko'proq ko'rish</button> 
               :
                <button onClick={handleClick} className=' bg-[#2c3e50] border-[#2c3e50] border-solid border-[1px] text-white font-medium text-sm py-[15px] px-[85px] rounded-full hover:bg-transparent duration-200 hover:text-[#2c3e50] flex mx-auto mt-5'>Orqaga</button>}
        </div>
    </div>
  )
}

export default Card