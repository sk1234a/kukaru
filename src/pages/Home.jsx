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

const eggProducts = [
  {
    icon: '🥚',
    emoji2: '🐔',
    title: 'Hen Eggs',
    hindiName: 'मुर्गी के अंडे',
    desc: 'Desi murgi ke taaze ande — poshtik, swadisht aur bilkul asli.',
    badge: 'Taaza',
    badgeColor: 'bg-[#E1F5EE] text-[#0F6E56]',
    border: 'border-[#1D9E75]',
  },
  {
    icon: '🥚',
    emoji2: '🦆',
    title: 'Duck Eggs',
    hindiName: 'बतख के अंडे',
    desc: 'Desi batakh ke ande — zyada protein, bade aur mazedaar.',
    badge: 'Desi',
    badgeColor: 'bg-[#e8f4fb] text-[#185FA5]',
    border: 'border-[#378ADD]',
  },
]

const chickProducts = [
  {
    icon: '🐤',
    emoji2: '🐔',
    title: 'Hen Chicks',
    hindiName: 'मुर्गी के चूजे',
    desc: 'Swasth desi murgi ke bachche — palane ke liye bilkul taiyar.',
    badge: 'New Batch',
    badgeColor: 'bg-[#FAEEDA] text-[#854F0B]',
    border: 'border-[#EF9F27]',
  },
  {
    icon: '🐥',
    emoji2: '🦆',
    title: 'Duck Chicks',
    hindiName: 'बतख के चूजे',
    desc: 'Desi batakh ke bachche — farm ke liye behtareen nasl.',
    badge: 'New Batch',
    badgeColor: 'bg-[#FAEEDA] text-[#854F0B]',
    border: 'border-[#EF9F27]',
  },
]

// ── SVG Logo Components ──────────────────────────────────────────────────────

function KukaruLogo({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#EAF3DE" stroke="#639922" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#97C459" strokeWidth="1" />
      {/* rooster silhouette simplified */}
      <ellipse cx="50" cy="60" rx="13" ry="14" fill="#3B6D11" />
      <ellipse cx="50" cy="44" rx="9" ry="10" fill="#3B6D11" />
      {/* comb */}
      <path d="M44 36 Q46 30 48 36 Q50 28 52 36 Q54 30 56 36" fill="#639922" stroke="none" />
      {/* beak */}
      <polygon points="59,45 63,47 59,49" fill="#97C459" />
      {/* tail feathers */}
      <path d="M37 48 Q28 36 33 46" fill="#27500A" stroke="none" />
      <path d="M37 52 Q26 44 33 52" fill="#27500A" stroke="none" />
      {/* legs */}
      <line x1="45" y1="74" x2="43" y2="84" stroke="#639922" strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="74" x2="57" y2="84" stroke="#639922" strokeWidth="2" strokeLinecap="round" />
      {/* egg in nest at bottom */}
      <ellipse cx="50" cy="89" rx="7" ry="4" fill="none" stroke="#639922" strokeWidth="1.2" />
      <ellipse cx="50" cy="87" rx="3.5" ry="4" fill="#C0DD97" />
      {/* text arc top */}
      <path id="topArc" d="M 18,50 A 32,32 0 0,1 82,50" fill="none" />
      <text fontSize="9" fontWeight="700" fill="#27500A" letterSpacing="2">
        <textPath href="#topArc" startOffset="12%">ONLY DESHI</textPath>
      </text>
      {/* text arc bottom */}
      <path id="botArc" d="M 20,55 A 30,30 0 0,0 80,55" fill="none" />
      <text fontSize="8" fontWeight="600" fill="#3B6D11" letterSpacing="1.5">
        <textPath href="#botArc" startOffset="8%">SINCE 2026</textPath>
      </text>
    </svg>
  )
}

function DoodhWalaLogo({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#E8F4FB" stroke="#185FA5" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#378ADD" strokeWidth="1" />
      {/* cow face */}
      <ellipse cx="50" cy="56" rx="18" ry="16" fill="#f0f0f0" stroke="#aaa" strokeWidth="1" />
      {/* black patches */}
      <ellipse cx="58" cy="50" rx="9" ry="8" fill="#3a3f5c" />
      <ellipse cx="44" cy="48" rx="5" ry="4" fill="#3a3f5c" />
      {/* ears */}
      <ellipse cx="30" cy="52" rx="5" ry="7" fill="#f0f0f0" stroke="#aaa" strokeWidth="1" />
      <ellipse cx="70" cy="52" rx="5" ry="7" fill="#f0f0f0" stroke="#aaa" strokeWidth="1" />
      {/* horns */}
      <path d="M34 44 Q30 34 38 38" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      <path d="M66 44 Q70 34 62 38" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      {/* snout */}
      <ellipse cx="50" cy="64" rx="9" ry="6" fill="#f4a9a8" />
      <circle cx="46" cy="64" r="2" fill="#d97070" />
      <circle cx="54" cy="64" r="2" fill="#d97070" />
      {/* eyes */}
      <circle cx="44" cy="54" r="3" fill="white" />
      <circle cx="56" cy="53" r="3" fill="white" />
      <circle cx="44.5" cy="54" r="1.5" fill="#222" />
      <circle cx="56.5" cy="53" r="1.5" fill="#222" />
      {/* text arc top */}
      <path id="dTopArc" d="M 16,50 A 34,34 0 0,1 84,50" fill="none" />
      <text fontSize="8.5" fontWeight="700" fill="#0C447C" letterSpacing="2">
        <textPath href="#dTopArc" startOffset="8%">DOODH WALA</textPath>
      </text>
      {/* banner bar */}
      <rect x="18" y="76" width="64" height="13" rx="3" fill="#185FA5" />
      <text x="50" y="86" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="white" letterSpacing="1">HAR GHAR DESHI DOODH</text>
      {/* EST / 2026 */}
      <text x="24" y="75" fontSize="6" fontWeight="600" fill="#185FA5">EST</text>
      <text x="70" y="75" fontSize="6" fontWeight="600" fill="#185FA5">2026</text>
    </svg>
  )
}

// ── ProductCard ───────────────────────────────────────────────────────────────

function ProductCard({ product }) {
  return (
    <div className={`bg-white rounded-2xl p-5 border-2 ${product.border} hover:shadow-lg transition-all group`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-[#f9fafb] border border-gray-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
          {product.icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-sm leading-tight">{product.title}</h3>
          <p className="text-xs text-gray-400">{product.hindiName}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed mb-3">{product.desc}</p>
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${product.badgeColor}`}>
        {product.badge}
      </span>
    </div>
  )
}

// ── Main Home Component ───────────────────────────────────────────────────────

export default function Home({ setPage }) {
  return (
    <div>

      {/* ── BRAND LOGOS STRIP ── */}
      <section className="bg-white border-b border-gray-100 py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <KukaruLogo size={52} />
            <div>
              <p className="font-bold text-[#27500A] text-sm leading-tight">KUKARU</p>
              <p className="text-[10px] text-[#639922] tracking-wide">Only Deshi • Since 2026</p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden md:block" />
          <div className="flex items-center gap-3">
            <DoodhWalaLogo size={52} />
            <div>
              <p className="font-bold text-[#0C447C] text-sm leading-tight">DOODH WALA</p>
              <p className="text-[10px] text-[#378ADD] tracking-wide">Har Ghar Deshi Doodh • Est 2026</p>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden md:block" />
          <span className="text-xs text-gray-400 text-center">
            India's Digital Agriculture Platform
          </span>
        </div>
      </section>

      {/* ── HERO ── */}
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

      {/* ── STATS ── */}
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

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-14 px-6 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#EAF3DE] text-[#3B6D11] text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wide">
              🐔 KUKARU Products
            </span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Hamare Desi Products</h2>
            <p className="text-gray-400 text-sm">100% desi nasl — bilkul taaze, bilkul asli</p>
          </div>

          {/* Eggs */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🥚</span>
              <h3 className="text-base font-bold text-gray-700">Eggs Category — अंडे</h3>
              <div className="flex-1 h-px bg-gray-200 ml-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eggProducts.map(p => <ProductCard key={p.title} product={p} />)}
            </div>
          </div>

          {/* Chicks */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🐣</span>
              <h3 className="text-base font-bold text-gray-700">Chicks Category — चूजे</h3>
              <div className="flex-1 h-px bg-gray-200 ml-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {chickProducts.map(p => <ProductCard key={p.title} product={p} />)}
            </div>
          </div>

          {/* Doodh Wala banner */}
          <div className="mt-8 bg-gradient-to-r from-[#E8F4FB] to-[#EAF3DE] rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row items-center gap-5">
            <DoodhWalaLogo size={64} />
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-[#0C447C] text-base mb-1">Doodh Wala — Desi Dairy</p>
              <p className="text-sm text-gray-500 mb-3">
                Shuddh gaay ka doodh, bina milawat, seedha farm se aapke ghar tak.
              </p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="text-xs bg-[#e8f4fb] text-[#185FA5] font-semibold px-3 py-1 rounded-full">🥛 Desi Doodh</span>
                <span className="text-xs bg-[#EAF3DE] text-[#3B6D11] font-semibold px-3 py-1 rounded-full">✅ No Adulteration</span>
                <span className="text-xs bg-[#FAEEDA] text-[#854F0B] font-semibold px-3 py-1 rounded-full">🚚 Home Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-14 px-6 bg-white">
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

      {/* ── FARM HIERARCHY ── */}
      <section className="py-14 px-6 bg-[#f9fafb]">
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
                <div className={`${h.ml} text-gray-300 text-xs pl-2 mb-1`}>↓</div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}