export default function Navbar({ page, setPage }) {
  const links = ['home', 'modules', 'advisor', 'admin']

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#1D9E75] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <img
            src="/kukaru.jpeg"
            alt="Kukaru Logo"
            className="w-20 h-20 object-contain"
          />
          <div>
            <div className="text-xl font-bold text-[#0d3d28] leading-tight tracking-widest">
              KUKARU
            </div>
            <div className="text-[9px] text-[#1D9E75] tracking-[3px] uppercase font-medium">
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
                  ? 'bg-[#1D9E75] text-white font-semibold'
                  : 'text-[#0d3d28] hover:bg-[#e6f5ee] hover:text-[#0d3d28]'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* LOGIN BUTTON */}
        <button className="bg-[#1D9E75] hover:bg-[#0d3d28] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm">
          Login / Register
        </button>

      </div>
    </nav>
  )
}