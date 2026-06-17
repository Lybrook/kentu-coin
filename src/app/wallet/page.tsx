"use client";

import { Button } from "@/components/ui/button";
import { Send, Download, Copy, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true);

  const assets = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      balance: "0.35",
      value: "$8,750.00",
      change: "+2.5%",
      icon: "₿",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      balance: "2.45",
      value: "$3,087.50",
      change: "+1.8%",
      icon: "Ξ",
    },
    {
      symbol: "KES",
      name: "Kenyan Shilling (Pegged)",
      balance: "612.50",
      value: "$612.50",
      change: "0.0%",
      icon: "ₖ",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-[#D8BFD8]/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#003153]" style={{ fontFamily: "var(--font-serif)" }}>
            My Wallet
          </h1>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {showBalance ? (
              <Eye className="h-5 w-5 text-[#003153]" />
            ) : (
              <EyeOff className="h-5 w-5 text-[#003153]" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Wallet Address Card */}
        <div className="bg-white rounded-lg border-2 border-[#003153]/20 p-6 shadow-sm mb-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-4">Wallet Address</h2>
          <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
            <code className="flex-1 text-sm font-mono text-[#003153]">
              0x1234567890abcdef1234567890abcdef12345678
            </code>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#003153] hover:bg-white"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button className="bg-[#003153] hover:bg-[#001a2e] text-white font-semibold py-6 h-auto flex flex-col items-center gap-2">
            <Send className="h-6 w-6" />
            <span>Send</span>
          </Button>
          <Button className="bg-[#003153] hover:bg-[#001a2e] text-white font-semibold py-6 h-auto flex flex-col items-center gap-2">
            <Download className="h-6 w-6" />
            <span>Receive</span>
          </Button>
        </div>

        {/* Assets */}
        <h2 className="text-lg font-bold text-[#003153] mb-4" style={{ fontFamily: "var(--font-serif)" }}>
          Your Assets
        </h2>
        <div className="space-y-4">
          {assets.map((asset) => (
            <div
              key={asset.symbol}
              className="bg-white rounded-lg border-2 border-[#003153]/20 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl font-bold text-[#FFC72C]">
                    {asset.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003153]">{asset.symbol}</h3>
                    <p className="text-xs text-gray-600">{asset.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  {showBalance ? (
                    <>
                      <p className="font-bold text-[#003153]">{asset.balance} {asset.symbol}</p>
                      <p className="text-sm text-gray-600">{asset.value}</p>
                    </>
                  ) : (
                    <p className="font-bold text-[#003153]">••••••</p>
                  )}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <p className={`text-sm font-semibold ${asset.change.startsWith("+") ? "text-green-600" : "text-gray-600"}`}>
                  {asset.change}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-[#003153] border-[#003153]/30">
                    <Send className="h-4 w-4 mr-1" />
                    Send
                  </Button>
                  <Button variant="outline" size="sm" className="text-[#003153] border-[#003153]/30">
                    <Download className="h-4 w-4 mr-1" />
                    Receive
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
