const panels = [
  { icon: '🏢', title: 'Branch Office',   sub: 'Collection Center (CC)', bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-800'  },
  { icon: '🌱', title: 'Farm Circle',     sub: 'District Farm → CFM',    bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-800'   },
  { icon: '🧑‍💼', title: 'Advisor Member', sub: 'Level 1 – 10',           bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800' },
]

export default function Admin() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Panel Structure</h2>
      <p className="text-gray-400 text-sm mb-8">
        Admin ke paas poora system control hota hai
      </p>

      {/* ADMIN BOX */}
      <div className="bg-[#1D9E75] text-white rounded-2xl px-6 py-4 text-center font-bold text-lg mb-4 shadow-md">
        🛡️ Admin — Super Control
      </div>

      <div className="flex justify-center mb-1">
        <div className="w-0.5 h-6 bg-[#1D9E75]" />
      </div>

      {/* 3 PANELS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {panels.map(p => (
          <div key={p.title} className={`${p.bg} border-2 ${p.border} rounded-2xl p-5`}>
            <div className={`font-bold text-sm mb-3 ${p.text}`}>{p.icon} {p.title}</div>
            <div className="bg-white rounded-xl px-4 py-3 text-xs text-gray-500 font-medium">
              {p.sub}
            </div>
          </div>
        ))}
      </div>

      {/* BRANCH REQUIREMENTS */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">Branch Minimum Requirements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { num: '150', lbl: 'CFM Farmers (Minimum)', icon: '👨‍🌾' },
          { num: '12',  lbl: 'Collection Centers',    icon: '🏢' },
        ].map(s => (
          <div key={s.lbl} className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
            <div className="text-4xl mb-2">{s.icon}</div>
            <div className="text-4xl font-bold text-[#1D9E75]">{s.num}</div>
            <div className="text-sm text-gray-500 mt-1">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* VENDOR TYPES */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">Vendor Types per Branch</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: '🏪', label: 'KUKARU Vendor (K)', desc: 'General product distribution',  bg: 'bg-amber-50 border-amber-200' },
          { icon: '🥛', label: 'Doodhwala (D)',     desc: 'Milk collection & distribution', bg: 'bg-sky-50   border-sky-200'   },
        ].map(v => (
          <div key={v.label} className={`${v.bg} border-2 rounded-2xl p-5 flex items-center gap-4`}>
            <div className="text-4xl">{v.icon}</div>
            <div>
              <div className="font-bold text-gray-800">{v.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{v.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}