import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import {projextFireStore} from '../../firebase/config'

const Home = () => {
  const [market, setMarket] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


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





  
  
  useEffect(() => {
    console.log(market);

  }, [market])

  
  return (
    <div>
        <Header/>
        <Card market={market} isLoading={isLoading}/>
    </div>
  )
}

export default Home