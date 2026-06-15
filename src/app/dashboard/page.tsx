"use client";

import { Button } from "@/components/ui/button";
import { Send, Download, Zap, TrendingUp, Wallet, Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-honeydew">
      {/* Header */}
      <header className="bg-white border-b border-evergreen/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-evergreen" style={{ fontFamily: "var(--font-serif)" }}>
            Kenyan Wallet
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-600">Wallet Address</p>
              <p className="text-sm font-mono text-evergreen">0x1234...5678</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-evergreen text-honeydew flex items-center justify-center font-bold">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance Card */}
          <div className="bg-white rounded-lg border-2 border-evergreen/20 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-600">Total Balance</h3>
              <Wallet className="h-5 w-5 text-gold" />
            </div>
            <p className="text-3xl font-bold text-evergreen" style={{ fontFamily: "var(--font-serif)" }}>
              $12,450.50
            </p>
            <p className="text-xs text-gray-600 mt-2">≈ 0.35 BTC</p>
          </div>

          {/* 24h Change Card */}
          <div className="bg-white rounded-lg border-2 border-evergreen/20 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-600">24h Change</h3>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600" style={{ fontFamily: "var(--font-serif)" }}>
              +$245.30
            </p>
            <p className="text-xs text-gray-600 mt-2">+2.01%</p>
          </div>

          {/* Mining Earnings Card */}
          <div className="bg-white rounded-lg border-2 border-evergreen/20 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-600">Mining Earnings</h3>
              <Zap className="h-5 w-5 text-gold" />
            </div>
            <p className="text-3xl font-bold text-evergreen" style={{ fontFamily: "var(--font-serif)" }}>
              $156.80
            </p>
            <p className="text-xs text-gray-600 mt-2">This month</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border-2 border-evergreen/20 p-6 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-evergreen mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button className="bg-evergreen hover:bg-evergreen-dark text-honeydew font-semibold py-6 h-auto flex flex-col items-center gap-2">
              <Send className="h-6 w-6" />
              <span>Send</span>
            </Button>
            <Button className="bg-evergreen hover:bg-evergreen-dark text-honeydew font-semibold py-6 h-auto flex flex-col items-center gap-2">
              <Download className="h-6 w-6" />
              <span>Receive</span>
            </Button>
            <Button className="bg-gold hover:bg-gold-dark text-evergreen-dark font-semibold py-6 h-auto flex flex-col items-center gap-2">
              <Zap className="h-6 w-6" />
              <span>Mine</span>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border-2 border-evergreen/20 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-evergreen" style={{ fontFamily: "var(--font-serif)" }}>
              Recent Activity
            </h2>
            <Activity className="h-5 w-5 text-evergreen" />
          </div>
          <div className="space-y-3">
            {[
              { type: "Received", amount: "0.05 BTC", time: "2 hours ago", status: "completed" },
              { type: "Mining", amount: "+$45.20", time: "4 hours ago", status: "completed" },
              { type: "Sent", amount: "0.02 ETH", time: "1 day ago", status: "completed" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-semibold text-evergreen">{activity.type}</p>
                  <p className="text-xs text-gray-600">{activity.time}</p>
                </div>
                <p className="font-semibold text-evergreen">{activity.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
