import React from 'react'

const CallCenter = () => {
  return (
    <div className='py-24'>
        <div className="container mx-auto">
            <div className='mx-auto w-[60%] rounded-lg bg-white py-10 pl-10 pr-5 flex items-start justify-between flex-wrap'>
                <h2 className='text-black text-2xl mb-4 leading-6 font-semibold w-[250px]'>Biznes uchun <span className='font-normal'>qo'ng'iroq</span></h2>
                <form className='flex flex-col gap-4'>
                    <input type="text" placeholder='F.I.Sh.' className='w-[400px] border-[1px] border-[#939EB4] py-3 px-5 rounded-md outline-none text-[#939EB4] text-base font-normal'/>
                    <input type="number" placeholder='Telefon raqami' className='w-[400px] border-[1px] border-[#939EB4] py-3 px-5 rounded-md outline-none text-[#939EB4] text-base font-normal sm:w-[100%]'/>
                    <select name="" id="" className='w-[400px] border-[1px] border-[#939EB4] py-3 px-5 rounded-md outline-none text-[#939EB4] text-base font-normal'>
                        <option value='Region'>Region</option>
                        <option value='Namangan'>Namangan</option>
                        <option value='Andijon'>Andijon</option>
                        <option value="Farg'ona">Farg'ona</option>
                    </select>
                    <input type="text" placeholder='Matn' className='w-[400px] border-[1px] border-[#939EB4] py-3 px-5 rounded-md outline-none text-[#939EB4] text-base font-normal'/>
                    <button className='w-[400px] bg-[#2C3E50] py-3 text-white rounded-md border-[1px] border-solid border-[#2c3e50] hover:bg-white hover:text-[#2c3e50] duration-200 '>Yuborish</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CallCenter