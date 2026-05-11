 import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home    from './pages/Home'
import Modules from './pages/Modules'
import Advisor from './pages/Advisor'
import Admin   from './pages/Admin'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar page={page} setPage={setPage} />

      <main className="flex-1">
        {page === 'home'    && <Home    setPage={setPage} />}
        {page === 'modules' && <Modules />}
        {page === 'advisor' && <Advisor />}
        {page === 'admin'   && <Admin   />}
      </main>

      <Footer />
    </div>
  )
}

export default App