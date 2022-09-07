import React from 'react'
import {FaCar} from 'react-icons/fa'
import {FaTruck} from 'react-icons/fa'

const YetkazibBerish = () => {
  return (
    <div className='pt-10 pb-20'>
        <div className='container mx-auto'>
            <h2 className='text-gray-900 text-[28px] font-normal mb-8'>
                <span className='font-bold'>Onlayn savdo</span> turli xil yuqori sifatli yetkazib berish xizmatlarini taklif etadi.
            </h2>
            <ul>
                <li className='flex  items-center mb-8'>
                    <FaTruck className='text-2xl text-[#2C3E50] mr-11'/>
                    <div>
                        <h4 className='text-[#2C3E50] text-2xl font-semibold mb-2'>Yetkazib berish</h4>
                        <p className='w-[831px] text-base font-normal text-[#2C3E50]'>O'zbekiston bo'ylab yetkazib berish (1 500 000 so'mdan yuqori xaridlar uchun) - Bepul Aksessuarlarni yetkazib berish (g'iloflar, naushniklar, klaviaturalar, sichqonlar va boshqalar) - 30 000 so'm</p>
                    </div>
                </li>
                <li className='flex  items-center'>
                    <FaCar className='text-2xl text-[#2C3E50] mr-11'/>
                    <div>
                        <h4 className='text-[#2C3E50] text-2xl font-semibold mb-2'>Ekspres yetkazib berish</h4>
                        <p className='w-[831px] text-base font-normal text-[#2C3E50]'>Tezlashtirilgan yetkazib berish buyurtma tasdiqlangan paytdan boshlab 1,5 soat ichida amalga oshiriladi. Toshkent shahri ichida tez yetkazib berish narxi 50 000 so‘m. Batafsil ma'lumotni MacBro do'konining call-markaziga +998 (xx) xxx-xx-xx raqamiga qo'ng'iroq qilib olishingiz mumkin.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default YetkazibBerish