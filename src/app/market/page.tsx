"use client";

import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MarketPage() {
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  const cryptoData = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$25,000.00",
      change24h: "+5.2%",
      change7d: "+12.5%",
      marketCap: "$487.5B",
      volume: "$18.2B",
      trend: "up",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "$1,300.00",
      change24h: "+3.8%",
      change7d: "+8.3%",
      marketCap: "$156.2B",
      volume: "$7.5B",
      trend: "up",
    },
    {
      symbol: "KES",
      name: "Kenyan Shilling",
      price: "$1.00",
      change24h: "0.0%",
      change7d: "0.0%",
      marketCap: "$50M",
      volume: "$2.1M",
      trend: "neutral",
    },
    {
      symbol: "BNB",
      name: "Binance Coin",
      price: "$320.00",
      change24h: "+2.1%",
      change7d: "+5.7%",
      marketCap: "$48.5B",
      volume: "$1.8B",
      trend: "up",
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "$65.00",
      change24h: "-1.2%",
      change7d: "+3.2%",
      marketCap: "$28.3B",
      volume: "$1.2B",
      trend: "down",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      price: "$0.52",
      change24h: "+1.5%",
      change7d: "+4.1%",
      marketCap: "$18.7B",
      volume: "$450M",
      trend: "up",
    },
  ];

  const handleRefresh = () => {
    setLastUpdated(new Date().toLocaleTimeString());
  };

  return (
    <div className="min-h-screen bg-honeydew">
      {/* Header */}
      <header className="bg-white border-b border-evergreen/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-evergreen" style={{ fontFamily: "var(--font-serif)" }}>
            Market Overview
          </h1>
          <Button
            onClick={handleRefresh}
            className="bg-evergreen hover:bg-evergreen-dark text-honeydew font-semibold"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Last Updated */}
        <div className="mb-6 text-sm text-gray-600">
          Last updated: <span className="font-semibold text-evergreen">{lastUpdated}</span>
        </div>

        {/* Crypto Ticker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cryptoData.map((crypto) => (
            <div
              key={crypto.symbol}
              className="bg-white rounded-lg border-2 border-evergreen/20 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-evergreen" style={{ fontFamily: "var(--font-serif)" }}>
                    {crypto.symbol}
                  </h3>
                  <p className="text-xs text-gray-600">{crypto.name}</p>
                </div>
                {crypto.trend === "up" && (
                  <TrendingUp className="h-6 w-6 text-green-600" />
                )}
                {crypto.trend === "down" && (
                  <TrendingDown className="h-6 w-6 text-red-600" />
                )}
                {crypto.trend === "neutral" && (
                  <div className="h-6 w-6 text-gray-400">—</div>
                )}
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-3xl font-bold text-evergreen" style={{ fontFamily: "var(--font-serif)" }}>
                  {crypto.price}
                </p>
              </div>

              {/* Changes */}
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-600">24h Change</p>
                  <p
                    className={`font-semibold ${
                      crypto.change24h.startsWith("+") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {crypto.change24h}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">7d Change</p>
                  <p
                    className={`font-semibold ${
                      crypto.change7d.startsWith("+") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {crypto.change7d}
                  </p>
                </div>
              </div>

              {/* Market Data */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-600">Market Cap</p>
                  <p className="font-semibold text-evergreen text-sm">{crypto.marketCap}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">24h Volume</p>
                  <p className="font-semibold text-evergreen text-sm">{crypto.volume}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Info */}
        <div className="mt-8 bg-white rounded-lg border-2 border-evergreen/20 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-evergreen mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Market Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-evergreen mb-2">Global Market Cap</h3>
              <p className="text-2xl font-bold text-gold" style={{ fontFamily: "var(--font-serif)" }}>
                $1.2T
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-evergreen mb-2">24h Volume</h3>
              <p className="text-2xl font-bold text-gold" style={{ fontFamily: "var(--font-serif)" }}>
                $45.8B
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-evergreen mb-2">BTC Dominance</h3>
              <p className="text-2xl font-bold text-gold" style={{ fontFamily: "var(--font-serif)" }}>
                42.5%
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
