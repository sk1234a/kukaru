import { useState } from 'react'

const modules = [
  { icon: '🌱', title: 'CFM Member',        desc: 'Contract Farming, animal buy/sell',  color: 'bg-green-50  border-green-200', tags: ['Hen','Duck','Broiler','Goat','Cow','Buffalo','Register','Buy/Sell'] },
  { icon: '🧑‍💼', title: 'Advisor',           desc: 'Guidance + commission levels',       color: 'bg-blue-50   border-blue-200',  tags: ['10 Levels','Up to 25%','CC Link','Retail Counter','Commission'] },
  { icon: '🏪', title: 'Vendor',             desc: 'KUKARU Vendor & Doodhwala',          color: 'bg-amber-50  border-amber-200', tags: ['KUKARU Vendor','Doodhwala','Branch Connected','Distribution'] },
  { icon: '🛒', title: 'Customer',           desc: 'Products aur milk purchase',         color: 'bg-pink-50   border-pink-200',  tags: ['Milk Purchase','Animal Products','Direct Delivery','Orders'] },
  { icon: '🏢', title: 'Collection Center', desc: 'Central product collection point',    color: 'bg-purple-50 border-purple-200',tags: ['CC per Branch','12 Minimum','Product Aggregation','State-wise'] },
  { icon: '📍', title: 'Branch',             desc: 'State-wise operations hub',          color: 'bg-teal-50   border-teal-200',  tags: ['State Level','K Vendors','D Vendors','150 CFM Min','Retail'] },
  { icon: '🚐', title: 'Van Tracking',       desc: 'Collection vehicle live tracking',   color: 'bg-orange-50 border-orange-200',tags: ['Live GPS','Route Management','Schedule','Real-time'] },
]

export default function Modules() {
  const [active, setActive] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">System Modules</h2>
      <p className="text-gray-400 text-sm mb-8">
        Har module KUKARU platform ka ek important hissa hai — click karke detail dekho
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m, i) => (
          <div
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            className={`rounded-2xl border-2 p-5 cursor-pointer transition-all hover:shadow-md ${
              active === i
                ? 'border-[#1D9E75] bg-[#E1F5EE] shadow-md'
                : `${m.color}`
            }`}
          >
            <div className="text-4xl mb-3">{m.icon}</div>
            <h3 className="font-bold text-gray-800 mb-1">{m.title}</h3>
            <p className="text-xs text-gray-500">{m.desc}</p>

            {active === i && (
              <div className="mt-4 flex flex-wrap gap-2">
                {m.tags.map(t => (
                  <span key={t} className="bg-white text-[#0F6E56] text-xs font-medium px-3 py-1 rounded-full border border-[#5DCAA5]">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}