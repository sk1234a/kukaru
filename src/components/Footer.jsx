export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1D9E75] rounded-lg flex items-center justify-center text-sm">
            🌿
          </div>
          <div>
            <div className="font-bold text-[#1D9E75] text-sm">KUKARU</div>
            <div className="text-[9px] text-gray-400 tracking-widest uppercase">Digital Farming</div>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center">
          © 2025 KUKARU – Digital Farming & Distribution System. All rights reserved.
        </p>

        <div className="flex gap-4 text-xs text-gray-400">
          <span className="hover:text-[#1D9E75] cursor-pointer">Privacy</span>
          <span className="hover:text-[#1D9E75] cursor-pointer">Terms</span>
          <span className="hover:text-[#1D9E75] cursor-pointer">Contact</span>
        </div>

      </div>
    </footer>
  )
}