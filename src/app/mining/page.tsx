"use client";

import { Button } from "@/components/ui/button";
import { Power, Zap, Thermometer, Cpu, TrendingUp } from "lucide-react";

export default function MiningPage() {
  const rigs = [
    {
      id: 1,
      name: "Rig Alpha",
      status: "active",
      hashRate: "125.5 MH/s",
      power: "850W",
      temp: "62°C",
      earnings: "$45.20",
    },
    {
      id: 2,
      name: "Rig Beta",
      status: "active",
      hashRate: "98.3 MH/s",
      power: "720W",
      temp: "58°C",
      earnings: "$35.80",
    },
    {
      id: 3,
      name: "Rig Gamma",
      status: "inactive",
      hashRate: "0 MH/s",
      power: "0W",
      temp: "28°C",
      earnings: "$0.00",
    },
  ];

  return (
    <div className=\"min-h-screen bg-slate-50\">
      {/* Header */}
      <header className=\"bg-white border-b border-[#D8BFD8]/30 sticky top-0 z-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center\">
          <h1 className=\"text-2xl font-bold text-[#003153]\" style={{ fontFamily: \"var(--font-serif)\" }}>
            Mining Dashboard
          </h1>
          <div className=\"flex items-center gap-2\">
            <Zap className=\"h-5 w-5 text-[#FFC72C]\" />
            <span className=\"text-sm font-semibold text-[#003153]\">Active: 2/3</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mining Stats */}
        <div className=\"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8\">
          <div className=\"bg-white rounded-lg border-2 border-[#003153]/20 p-6 shadow-sm\">
            <h3 className=\"text-xs font-semibold text-gray-600 mb-2\">Total Hash Rate</h3>
            <p className=\"text-2xl font-bold text-[#003153]\" style={{ fontFamily: \"var(--font-serif)\" }}>
              223.8 MH/s
            </p>
          </div>
          <div className=\"bg-white rounded-lg border-2 border-[#003153]/20 p-6 shadow-sm\">
            <h3 className=\"text-xs font-semibold text-gray-600 mb-2\">Total Power</h3>
            <p className=\"text-2xl font-bold text-[#003153]\" style={{ fontFamily: \"var(--font-serif)\" }}>
              1,570W
            </p>
          </div>
          <div className=\"bg-white rounded-lg border-2 border-[#003153]/20 p-6 shadow-sm\">
            <h3 className=\"text-xs font-semibold text-gray-600 mb-2\">Daily Earnings</h3>
            <p className=\"text-2xl font-bold text-[#FFC72C]\" style={{ fontFamily: \"var(--font-serif)\" }}>
              $81.00
            </p>
          </div>
          <div className=\"bg-white rounded-lg border-2 border-[#003153]/20 p-6 shadow-sm\">
            <h3 className=\"text-xs font-semibold text-gray-600 mb-2\">Avg Efficiency</h3>
            <p className=\"text-2xl font-bold text-green-600\" style={{ fontFamily: \"var(--font-serif)\" }}>
              94.2%
            </p>
          </div>
        </div>

        {/* Mining Rigs */}
        <div className=\"space-y-4\">
          <h2 className=\"text-lg font-bold text-[#003153]\" style={{ fontFamily: \"var(--font-serif)\" }}>
            Active Mining Rigs
          </h2>
          {rigs.map((rig) => (
            <div key={rig.id} className=\"bg-white rounded-lg border-2 border-[#003153]/20 p-6 shadow-sm\">
              <div className=\"grid grid-cols-1 md:grid-cols-6 gap-4 items-center\">
                <div>
                  <h3 className=\"font-bold text-[#003153]\">{rig.name}</h3>
                  <p className={`text-xs font-semibold ${rig.status === \"active\" ? \"text-green-600\" : \"text-gray-600\"}`}>
                    {rig.status === \"active\" ? \"🟢 Active\" : \"🔴 Inactive\"}
                  </p>
                </div>

                <div className=\"flex items-center gap-2\">
                  <Cpu className=\"h-4 w-4 text-[#003153]\" />
                  <div>
                    <p className=\"text-xs text-gray-600\">Hash Rate</p>
                    <p className=\"font-semibold text-[#003153]\">{rig.hashRate}</p>
                  </div>
                </div>

                <div className=\"flex items-center gap-2\">
                  <Zap className=\"h-4 w-4 text-[#FFC72C]\" />
                  <div>
                    <p className=\"text-xs text-gray-600\">Power</p>
                    <p className=\"font-semibold text-[#003153]\">{rig.power}</p>
                  </div>
                </div>

                <div className=\"flex items-center gap-2\">
                  <Thermometer className=\"h-4 w-4 text-red-500\" />
                  <div>
                    <p className=\"text-xs text-gray-600\">Temperature</p>
                    <p className=\"font-semibold text-[#003153]\">{rig.temp}</p>
                  </div>
                </div>

                <div className=\"flex items-center gap-2\">
                  <TrendingUp className=\"h-4 w-4 text-green-600\" />
                  <div>
                    <p className=\"text-xs text-gray-600\">Today</p>
                    <p className=\"font-semibold text-[#FFC72C]\">{rig.earnings}</p>
                  </div>
                </div>

                <Button
                  className={`${
                    rig.status === \"active\"
                      ? \"bg-red-600 hover:bg-red-700\"
                      : \"bg-[#003153] hover:bg-[#001a2e]\"
                  } text-white font-semibold h-10`}
                >
                  <Power className=\"h-4 w-4 mr-2\" />
                  {rig.status === \"active\" ? \"Stop\" : \"Start\"}
                </Button>\n              </div>\n            </div>\n          ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
