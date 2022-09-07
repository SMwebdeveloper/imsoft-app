import React, { useEffect, useState } from 'react'
import CarouselReact from '../carousel/CarouselReact'
import {FaEye} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'
import { projextFireStore } from '../../firebase/config'
import { KorzinkaUse } from '../../contextHooks/KorzinkaUse'
const Batafsil = () => {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [market, setMarket] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const { addToChoosen } = KorzinkaUse()    

    const handleClick = (data) => {
        addToChoosen(data)
    }

    useEffect(()=> {
      setIsLoading(true)

      projextFireStore.collection('market').doc(id).get().then((doc)=>{
        if (doc.exists) {
            setIsLoading(false)
            setData(doc.data())
        } else {
            setIsLoading(false)
            setError(`Not found`)
        }
      })
    },[])

    //  card data

    useEffect(()=> {
        setIsLoading(true)
     
        projextFireStore.collection('market').get().then((snapshot) => {
         if (snapshot.empty) {
           setError('Not found')
           setIsLoading(false)
         } else{
           const result = []
           snapshot.docs.forEach((doc) => {
             // console.log(doc);
             result.push({...doc.data(), id: doc.id})
           })
           setMarket(result)
           setIsLoading(false)
         }
        })
       }, [])
    console.log(data);

  return (
    <div className='py-20'>
        <div className="container mx-auto">
            <div className='flex items-start justify-around'>
                <CarouselReact/>
                <div className='w-[50%]'>
                    <div className=' flex items-center mb-11'>
                        <div className='mr-28'>
                            <h2 className='text-3xl font-bold w-[250px] mb-4'>{data.name}</h2>
                            <p className='w-[450px] font-medium text-[#2C3E50]'>{data.info}</p>
                        </div>
                       <h6 className='flex items-center font-medium text-[#939EB4]'>
                        <FaEye className='text-xl text-[#2C3E50] mr-2'/>
                        068554889
                       </h6>
                    </div>
                    <div>
                        <h5 className='font-medium text-[#2C3E50] mb-2'>Ранги</h5>
                        <div className='flex items-center gap-x-4 mb-8'>
                            <button className='flex flex-col items-center py-[10px] w-[43%] border-2 border-solid border-[#2C3E50] rounded-2xl'>
                                <span className='block w-[26px] h-[26px] rounded-full bg-black'></span>
                                <p className='text-sm text-black font-medium'>Черная</p>
                            </button>
                            <button className='flex flex-col items-center py-[10px] w-[43%] border-2 border-solid border-[#939EB4] rounded-2xl'>
                                <span className='block w-[26px] h-[26px] rounded-full bg-[#939EB4]'></span>
                                 <p className='text-sm text-black font-medium'>Стальная</p>
                            </button>
                        </div>
                        <div className='w-[180px] flex items-center mb-8'>
                            <button className='w-1/3 py-2 border-solid border-[#939eb4] border-2 border-r rounded-l-full text-[#939EB4] font-medium'>-</button>
                            <button className='w-1/3 py-2 border-solid border-[#939eb4] border-2 border-l border-r text-[#939EB4] font-medium'>1</button>
                            <button className='w-1/3 py-2 border-solid border-[#939eb4] border-2 border-l rounded-r-full text-[#939EB4] font-medium'>+</button>
                        </div>

                        <h4 className=' text-[32px] font-semibold text-[#2C3E50] mb-[-8px]'>{data.price}</h4>
                        <h6 className='text-[22px] font-medium text-[#939EB4] line-through mb-4'>8 000 000</h6>

                        <button onClick={()=> {
                            handleClick(data)
                        }} className='w-full rounded-lg bg-[#2C3E50] p-3 text-white font-medium border-2 border-solid border-[#2c3e50] duration-150 hover:bg-white hover:text-[#2c3e50]'>Korzinkaga qoshish</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center mt-16 bg-[#f2f2f2] py-3 rounded-2xl font-medium text-[#2C3E50] mb-[77px]'>
                <h3 className='w-1/2 text-center'>Tafsil</h3>
                <h3 className='w-[49%] rounded-xl bg-white text-center py-4'>Batafsil</h3>
            </div>
             
             <h2 className='font-bold mb-3 text-base'>Batafsil</h2>
             <table className='w-full flex items-start border-[1px] border-solid border-[#939EB4]'>
                <thead className='w-[25%] bg-[#e7efff] border-r-[1px] border-solid border-[#939eb4]
                '>
                    <tr className='flex flex-col items-start '>
                        <th className='pl-3 py-2 border-b-[1px] border-solid border-[#939eb4] w-full text-left text-base font-normal'>Ishlab chiqaruvchi:</th>
                        <th className='pl-3 py-2 border-b-[1px] border-solid border-[#939eb4] w-full text-left text-base font-normal'>Turi:</th>
                        <th className='pl-3 py-2  w-full text-left text-base font-normal'>Status:</th>
                    </tr>
                </thead>
                <tbody className='w-[75%]'>
                    <tr className='flex flex-col items-start'>
                        <td className='w-full py-2 pl-2 border-b-[1px] border-solid border-[#939eb4]'>FONDMETAL</td>
                        <td className='w-full py-2 pl-2 border-b-[1px] border-solid border-[#939eb4]'>Alloy, литой</td>
                        <td className='w-full py-2 pl-2'>под заказ 3-4 дня</td>
                    </tr>
                </tbody>
             </table>
            <Card market={market} isLoading={isLoading}/>
        </div>
    </div>
  )
}

export default Batafsil