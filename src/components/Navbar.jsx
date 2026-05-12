export default function Navbar({ page, setPage }) {
  const links = ['home', 'modules', 'advisor', 'admin']

  return (
    <nav className="sticky top-0 z-50 border-b border-[#0a4a30] shadow-md"
      style={{ background: 'linear-gradient(135deg, #0d3d28 0%, #1a5c3a 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <div className="bg-white rounded-xl p-1 shadow-sm">
            <img
              src="/kukaru.jpeg"
              alt="Kukaru Logo"
              className="w-11 h-11 object-contain"
            />
          </div>
          <div>
            <div className="text-lg font-bold text-white leading-tight tracking-wide">
              KUKARU
            </div>
            <div className="text-[9px] text-green-300 tracking-[3px] uppercase">
              Digital Farming
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button
              key={l}
              onClick={() => setPage(l)}
              className={`text-sm capitalize font-medium px-4 py-2 rounded-lg transition-all ${
                page === l
                  ? 'bg-white text-[#0d3d28] font-semibold'
                  : 'text-green-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* LOGIN BUTTON */}
        <button className="bg-white text-[#0d3d28] hover:bg-green-50 text-sm font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm">
          Login / Register
        </button>

      </div>
    </nav>
  )
}