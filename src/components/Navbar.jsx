export default function Navbar({ page, setPage }) {
  const links = ['home', 'modules', 'advisor', 'admin']

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <div className="w-10 h-10 bg-[#1D9E75] rounded-xl flex items-center justify-center text-xl">
            🌿
          </div>
          <div>
            <div className="text-xl font-bold text-[#1D9E75] leading-tight">
              KUKARU
            </div>
            <div className="text-[9px] text-gray-400 tracking-[3px] uppercase">
              Digital Farming
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <button
              key={l}
              onClick={() => setPage(l)}
              className={`text-sm capitalize font-medium transition-colors ${
                page === l
                  ? 'text-[#1D9E75] border-b-2 border-[#1D9E75] pb-0.5'
                  : 'text-gray-500 hover:text-[#1D9E75]'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* LOGIN BUTTON */}
        <button className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
          Login / Register
        </button>

      </div>
    </nav>
  )
}