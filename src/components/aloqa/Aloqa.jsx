import React from 'react'

const Aloqa = () => {
  return (
    <div className='py-20'>
       <div className="container mx-auto flex items-start justify-around">
        <div className=''>
            <h2 className='text-3xl font-bold mb-5'>Aloqa</h2>
            <p className='w-[450px] text-sm mb-20'>Bizga sharhlaringizni yuborish yoki veb-saytimizda ma'lumot qidirishda duch kelgan muammolar haqida xabar berish uchun quyidagi shakldan foydalaning. Biz barcha sharhlarni diqqat bilan o'qib chiqamiz, lekin siz yuborgan sharhlarga javob bera olmasligimizni unutmang.</p>


            <div>
                <h5 className='text-base font-bold'>Biz bilan aloqa</h5>
                <ul>
                    <li>+998xx-xxx-xx-xx</li>
                    <li>mail@domain.uz</li>
                    <li>Toshkent, Yakkasaroy, Alisher.N,12</li>
                    <li>Toshkent, Yakkasaroy, Alisher.N,12</li>
                    <li>Toshkent, Yakkasaroy, Alisher.N,12</li>
                    <li>Toshkent, Yakkasaroy, Alisher.N,12</li>
                </ul>
            </div>
        </div>
        <form className='p-8 ml-25 bg-white rounded-3xl mt-10 shadow-lg w-[40%] flex flex-col gap-4'>
           <input type="text" className='p-4 w-[100%] border-[1px] border-solid border-[#939EB4] rounded-lg outline-none text-[#939eb4] placeholder:text-[#939eb4]' placeholder='F.I.Sh'/>
           <input type="text" className='p-4 w-[100%] border-[1px] border-solid border-[#939EB4] rounded-lg outline-none text-[#939eb4] placeholder:text-[#939eb4]' placeholder='Telefon raqam'/>
           <input type="text" className='p-4 w-[100%] border-[1px] border-solid border-[#939EB4] rounded-lg outline-none text-[#939eb4] placeholder:text-[#939eb4]' placeholder='Matn'/>
           <button className='p-4 w-[100%] mt-5 bg-[#2C3E50] border-[1px] border-solid border-[#2C3E50] rounded-lg outline-none text-white hover:text-[#2c3e50] hover:bg-transparent duration-200 ease-linear'>Yuborish</button>
        </form>
       </div>
    </div>
  )
}

export default Aloqa