import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header w-full h-[450px] mt-[-10px] py-9">
        <div className='container mx-auto pt-7'>
            <h3 className='text-white text-5xl font-bold mb-4'>Cinturato</h3>
            <p className='w-[300px] text-white mb-10'>CINTURATO WHEELS shinalarini SG959 promokodi orqali 50% chegirma bilan harid qiling!</p>
            <button className='py-[16px] px-[32px] bg-[#939EB4] rounded-full text-white border-[#939eb4] border-solid border-2 hover:bg-white hover:text-[#939eb4] hover:duration-75 ease-linear'>Batafsil</button>
        </div>
    </div>
  )
}

export default Header