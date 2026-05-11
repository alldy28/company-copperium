import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ListStokis = () => {
  const [stockists, setStockists] = useState([])
  const [search, setSearch] = useState('')

  // Mengambil data dari API dashboard app.copperium
  useEffect(() => {
    const fetchStockists = async () => {
      try {
        const response = await fetch('https://app.copperium.id/api/stockists')
        const data = await response.json()

        if (Array.isArray(data)) {
          setStockists(data)
        }
      } catch (error) {
        console.error('Gagal load data stokis:', error)
      }
    }

    fetchStockists()
  }, [])

  // Filter pencarian berdasarkan nama atau domisili (kota)
  const filteredData = stockists.filter(
    s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.domicile.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='min-h-screen bg-[#050505] text-white font-sans'>
      {/* --- NAVBAR MINI --- */}
      <nav className='p-6 border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <Link
            to='/'
            className='text-[#d4af37] font-bold flex items-center gap-2 hover:opacity-80 transition-opacity'
          >
            ← <span>Kembali ke Beranda</span>
          </Link>
          <div className='text-xl md:text-2xl font-extrabold text-[#d4af37] tracking-[0.15em]'>
            COPPERIUM
          </div>
        </div>
      </nav>

      {/* --- KONTEN UTAMA --- */}
      <main className='max-w-7xl mx-auto px-6 py-16'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-6xl font-bold mb-6 text-white leading-tight'
          >
            Jaringan <span className='text-[#d4af37]'>Stokis Resmi</span>
          </motion.h1>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Cari agen terdekat di kota Anda untuk kemudahan edukasi, transaksi,
            dan layanan buyback resmi Copperium.
          </p>
        </div>

        {/* Search Bar */}
        <div className='max-w-md mx-auto mb-16'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Cari Kota atau Nama Agen...'
              className='w-full bg-[#111] border border-gray-800 p-4 pl-12 rounded-2xl focus:border-[#d4af37] outline-none transition-all text-white placeholder-gray-600 shadow-xl'
              onChange={e => setSearch(e.target.value)}
            />
            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl'>
              🔍
            </span>
          </div>
        </div>

        {/* Grid Stockist */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredData.map(s => (
            <motion.div
              key={s.id}
              whileHover={{ y: -5 }}
              className='bg-[#0a0a0a] border border-gray-800 p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#d4af37]/30 transition-all group relative overflow-hidden flex flex-col'
            >
              <div className='flex items-center gap-5 mb-6'>
                <div className='w-20 h-20 rounded-2xl overflow-hidden bg-black border border-gray-800 flex-shrink-0'>
                  {s.profile_picture ? (
                    <img
                      src={s.profile_picture}
                      alt={s.name}
                      className='w-full h-full object-cover'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center text-gray-700 text-xs font-bold'>
                      NO IMG
                    </div>
                  )}
                </div>
                <div>
                  <div className='text-xs font-mono mb-2 bg-[#d4af37]/10 text-[#d4af37] px-2 py-0.5 rounded inline-block border border-[#d4af37]/20'>
                    {s.stockist_id || 'STK-XXX'}
                  </div>
                  <h3 className='text-xl font-bold text-white line-clamp-1'>
                    {s.name}
                  </h3>
                </div>
              </div>

              <div className='space-y-3 text-gray-400 text-sm mb-8 flex-1'>
                <div className='flex items-center gap-3'>
                  <span>📍</span> <span>{s.domicile}</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span>✉️</span> <span className='truncate'>{s.email}</span>
                </div>
              </div>

              {/* Tombol WhatsApp */}
              <a
                href={`https://wa.me/${(s.phone || '').replace(/\D/g, '')}`}
                target='_blank'
                rel='noreferrer'
                className='block w-full py-4 bg-[#111] border border-gray-700 text-white font-bold text-center rounded-xl hover:bg-gradient-to-r hover:from-[#b87333] hover:to-[#d4af37] hover:text-black hover:border-transparent transition-all duration-300'
              >
                Hubungi via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        {/* Jika Data Kosong / Tidak Ketemu */}
        {filteredData.length === 0 && (
          <div className='text-center py-20'>
            <div className='text-6xl mb-4 opacity-20'>🔍</div>
            <p className='text-gray-500 text-lg'>
              Tidak ada stokis yang sesuai dengan pencarian Anda.
            </p>
          </div>
        )}
      </main>

      {/* --- FOOTER --- */}
      <footer className='p-10 border-t border-gray-900 text-center text-gray-600 text-sm bg-black'>
        © 2026 PT Berkah Sinergi Trilogam Imperium. All Rights Reserved.
      </footer>
    </div>
  )
}

export default ListStokis
