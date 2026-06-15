"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, Zap, Search } from "lucide-react";
import { useState } from "react";

export default function TransactionsPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = [
    {
      id: 1,
      type: "sent",
      asset: "BTC",
      amount: "0.05",
      value: "$1,250.00",
      to: "0xabc...def",
      date: "2024-06-15",
      time: "14:30",
      status: "completed",
    },
    {
      id: 2,
      type: "received",
      asset: "ETH",
      amount: "1.5",
      value: "$1,950.00",
      from: "0x123...456",
      date: "2024-06-14",
      time: "09:15",
      status: "completed",
    },
    {
      id: 3,
      type: "mining",
      asset: "BTC",
      amount: "+0.002",
      value: "$50.00",
      description: "Mining Reward",
      date: "2024-06-14",
      time: "06:00",
      status: "completed",
    },
    {
      id: 4,
      type: "sent",
      asset: "KES",
      amount: "100.00",
      value: "$100.00",
      to: "0xdef...abc",
      date: "2024-06-13",
      time: "16:45",
      status: "completed",
    },
    {
      id: 5,
      type: "received",
      asset: "BTC",
      amount: "0.1",
      value: "$2,500.00",
      from: "0x789...012",
      date: "2024-06-13",
      time: "11:20",
      status: "completed",
    },
  ];

  const filteredTransactions = transactions.filter((tx) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "sent" && tx.type === "sent") ||
      (filter === "received" && tx.type === "received") ||
      (filter === "mining" && tx.type === "mining");

    const matchesSearch =
      tx.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.amount.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-honeydew">
      {/* Header */}
      <header className="bg-white border-b border-evergreen/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-evergreen" style={{ fontFamily: "var(--font-serif)" }}>
            Transaction History
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg border-2 border-evergreen/20 p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by asset or amount..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-evergreen/30 rounded-md focus:outline-none focus:border-evergreen"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {["all", "sent", "received", "mining"].map((f) => (
                <Button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`capitalize ${
                    filter === f
                      ? "bg-evergreen text-honeydew"
                      : "bg-gray-100 text-evergreen hover:bg-gray-200"
                  }`}
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg border-2 border-evergreen/20 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-honeydew border-b border-evergreen/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-evergreen">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-evergreen">Asset</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-evergreen">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-evergreen">Address</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-evergreen">Date & Time</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-evergreen">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-honeydew/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {tx.type === "sent" && (
                            <ArrowUpRight className="h-5 w-5 text-red-600" />
                          )}
                          {tx.type === "received" && (
                            <ArrowDownLeft className="h-5 w-5 text-green-600" />
                          )}
                          {tx.type === "mining" && (
                            <Zap className="h-5 w-5 text-gold" />
                          )}
                          <span className="font-semibold text-evergreen capitalize">{tx.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-evergreen">{tx.asset}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-evergreen">{tx.amount}</p>
                          <p className="text-xs text-gray-600">{tx.value}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-gray-600">
                        {tx.type === "sent" && tx.to}
                        {tx.type === "received" && tx.from}
                        {tx.type === "mining" && tx.description}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <p>{tx.date}</p>
                        <p className="text-xs">{tx.time}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                          ✓ {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-600">
                      No transactions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
