import React from 'react'
import diagramma from '../../assets/diagramma.svg'
import location from '../../assets/location.svg'
import clock from '../../assets/clock.svg'

const BizningOffis = () => {
  return (
    <div className='py-28'>
        <div className="container mx-auto">
            <h2 className='text-black text-3xl mb-5 font-normal'><span className='font-semibold'>Bizning</span> ofislarimiz</h2>
            <div className="grid grid-cols-3">
            <table className='border-collapse  border-[1px] border-solid border-[#2c3e50] border-r-white'>
                <thead className='bg-[#2C3E50] '>
                    <tr>
                        <th className='flex items-start py-3 pl-3 text-white font-normal text-1xl'>
                        <img src={diagramma} alt="" className='mr-4'/>
                        Filiallar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Filial nomi:
                        </td>
                    </tr>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Filial nomi:
                        </td>
                    </tr>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Filial nomi:
                        </td>
                    </tr>
                </tbody>
            </table>    
            <table className='border-collapse  border-[1px] border-solid border-[#2c3e50] border-r-white'>
                <thead className='bg-[#2C3E50] '>
                    <tr>
                        <th className='flex items-start py-3 pl-3 text-white font-normal text-1xl'>
                        <img src={location} alt={location} className='mr-4'/>
                        Lokatsiya
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Lokatsiya
                        </td>
                    </tr>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Lokatsiya
                        </td>
                    </tr>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Lokatsiya
                        </td>
                    </tr>
                </tbody>
            </table>    
            <table className='border-collapse  border-[1px] border-solid border-[#2c3e50]'>
                <thead className='bg-[#2C3E50] '>
                    <tr>
                        <th className='flex items-start py-3 pl-3 text-white font-normal text-1xl'>
                        <img src={clock} alt={clock} className='mr-4'/>
                        Ish vaqti
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Ish vaqti
                        </td>
                    </tr>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Ish vaqti
                        </td>
                    </tr>
                    <tr className='border-b-[1px] border-[#2c3e50] '>
                        <td className='bg-white py-3 pl-3'>
                            Ish vaqti
                        </td>
                    </tr>
                </tbody>
            </table>    
            </div>
        </div>
    </div>
  )
}

export default BizningOffis