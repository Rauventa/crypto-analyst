import React, {useEffect} from "react";
import axios from 'axios'

export const MarketPage = () => {

  const fetchData = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

    console.log(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      MarketPage
    </div>
  )
}