const levels = [
  { l: '1',    c: '10%',     w: 100 },
  { l: '2',    c: '5%',      w: 50  },
  { l: '3',    c: '2.5%',    w: 25  },
  { l: '4',    c: '1.5%',    w: 15  },
  { l: '5–10', c: '1% each', w: 10  },
]

const marketing = [
  { role: 'Company Core Coordinator', short: 'CCC', pct: '2.5%', color: 'bg-purple-100 text-purple-800' },
  { role: 'Regional Core Coordinator', short: 'RCC', pct: '5%',   color: 'bg-blue-100   text-blue-800'   },
  { role: 'State Core Coordinator',   short: 'SCC', pct: '5%',   color: 'bg-teal-100   text-teal-800'   },
  { role: 'Advisor Member',           short: 'AM',  pct: 'Multi', color: 'bg-green-100  text-green-800'  },
]

export default function Advisor() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Advisor Commission System</h2>
      <p className="text-gray-400 text-sm mb-8">
        Multi-level commission — jitne zyada level, utna zyada earn karo
      </p>

      {/* COMMISSION TABLE */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {['Level', 'Commission', 'Progress Bar'].map(h => (
                <th key={h} className="text-left px-5 py-3 text-gray-400 font-medium text-xs uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {levels.map((r, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-semibold text-gray-700">Level {r.l}</td>
                <td className="px-5 py-4 font-bold text-[#1D9E75] text-base">{r.c}</td>
                <td className="px-5 py-4 w-48">
                  <div className="bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-[#1D9E75] h-2 rounded-full transition-all"
                      style={{ width: r.w + '%' }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-[#E1F5EE] px-5 py-4 flex justify-between items-center border-t border-[#5DCAA5]">
          <span className="font-bold text-[#0F6E56]">Total Commission</span>
          <span className="text-2xl font-bold text-[#1D9E75]">≈ 25%</span>
        </div>
      </div>

      {/* MARKETING HIERARCHY */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">Marketing Hierarchy</h3>
      <div className="flex flex-col gap-3">
        {marketing.map((m, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 px-5 py-4 flex items-center justify-between shadow-sm hover:border-[#1D9E75] transition-colors">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${m.color}`}>
                {m.short}
              </span>
              <span className="font-medium text-gray-700 text-sm">{m.role}</span>
            </div>
            <span className="font-bold text-[#1D9E75] text-base">{m.pct}</span>
          </div>
        ))}
      </div>
    </div>
  )
}