import React, {useEffect, useState} from "react";
import axios from 'axios';
import './MarketPage.scss';
import {MarketCoin} from "./MarketCoin/MarketCoin";

export const MarketPage = () => {

  const [coins, setCoins] = useState<any>([])

  const fetchData = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')

    setCoins(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={'market-page'}>
      <div className="page__title">
        Market
      </div>
      {coins.map((coin: any) => {
        return (
          <MarketCoin
            coin={coin}
          />
        )
      })}
    </div>
  )
}