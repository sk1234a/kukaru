const stats = [
  { num: '7',    label: 'Modules' },
  { num: '5+',   label: 'Animal Types' },
  { num: '25%',  label: 'Total Commission' },
  { num: '150+', label: 'CFM Farmers' },
  { num: '12',   label: 'Collection Centers' },
]

const features = [
  { icon: '🌱', title: 'CFM Farming',       desc: 'Farmers ko digital platform pe connect karo' },
  { icon: '🥛', title: 'Milk Distribution', desc: 'Doodhwala vendors se seedha customer tak' },
  { icon: '🧑‍💼', title: 'Advisor Network',  desc: 'Multi-level commission system with 10 levels' },
  { icon: '🚐', title: 'Van Tracking',      desc: 'Real-time collection vehicle tracking' },
]

export default function Home({ setPage }) {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E1F5EE] to-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#1D9E75] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            🌾 India's Digital Agriculture Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
            Kisan, Vendor aur Customer <br />
            <span className="text-[#1D9E75]">ek KUKARU platform par</span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Contract farming, milk distribution, aur advisor network —
            sab kuch ek centralized system mein. Har farmer profitable,
            har vendor connected.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setPage('modules')}
              className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white font-semibold px-7 py-3 rounded-xl transition-colors text-sm"
            >
              📦 Modules Dekho
            </button>
            <button
              onClick={() => setPage('advisor')}
              className="border-2 border-[#1D9E75] text-[#1D9E75] hover:bg-[#E1F5EE] font-semibold px-7 py-3 rounded-xl transition-colors text-sm"
            >
              🧑‍💼 Advisor System
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map(s => (
            <div key={s.label} className="text-center bg-[#f9fafb] rounded-xl p-4 border border-gray-100">
              <div className="text-3xl font-bold text-[#1D9E75]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 px-6 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Kyun choose karein KUKARU?
          </h2>
          <p className="text-center text-gray-400 text-sm mb-10">
            Har feature kisan aur vendor ke liye design kiya gaya hai
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#1D9E75] hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FARM HIERARCHY */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Farm Structure
          </h2>
          {[
            { icon: '🏢', label: 'Head Office Farm', ml: 'ml-0',  border: 'border-[#1D9E75]', bg: 'bg-[#E1F5EE]', text: 'text-[#0F6E56]' },
            { icon: '🏛️', label: 'State Farm',       ml: 'ml-6',  border: 'border-[#5DCAA5]', bg: 'bg-[#f0faf6]', text: 'text-gray-700' },
            { icon: '🏘️', label: 'District Farm',    ml: 'ml-12', border: 'border-[#9FE1CB]', bg: 'bg-[#f9fafb]', text: 'text-gray-700' },
            { icon: '👨‍🌾', label: 'CFM (Farmers)',   ml: 'ml-16', border: 'border-[#1D9E75]', bg: 'bg-[#E1F5EE]', text: 'text-[#0F6E56]' },
          ].map((h, i) => (
            <div key={i}>
              <div className={`${h.ml} ${h.bg} border-l-4 ${h.border} rounded-r-xl px-4 py-3 mb-1`}>
                <span className={`font-semibold text-sm ${h.text}`}>{h.icon} {h.label}</span>
              </div>
              {i < 3 && (
                <div className={`${h.ml} ml-${parseInt(h.ml.replace('ml-',''))+6} text-gray-300 text-xs pl-2 mb-1`}>↓</div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}