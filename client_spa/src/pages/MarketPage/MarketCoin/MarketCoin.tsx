import React from "react";

interface MarketCoinProps {
  coin: any
}

export const MarketCoin = ({
  coin
}: MarketCoinProps) => {
  return (
    <div className={'market-page__coin'}>
      <div className="market-page__coin_title">
        <div className="market-page__coin_title-img">
          <img src={coin.image} alt={coin.name} />
        </div>
        <div className={'market-page__coin_title-main'}>
          {coin.name}
        </div>
        <div className={'market-page__coin_title-symbol'}>
          {coin.symbol}
        </div>
      </div>
      <div className="market-page__coin_price">
        <div className="market-page__coin_price-coin">
          usd
        </div>
        <div className="market-page__coin_price-count">
          ${coin.current_price}
        </div>
      </div>
      <div className={`market-page__coin_grow ${Math.sign(coin.market_cap_change_percentage_24h) < 0 ? 'status-warning' : 'status-success'}`}>
        {parseFloat(coin.market_cap_change_percentage_24h.toFixed(3))}%
      </div>
      <div className="market-page__coin_chart">
        chart data
      </div>
    </div>
  )
}