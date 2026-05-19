import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ListStokis = () => {
  const [stockists, setStockists] = useState([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('num-asc') // State untuk urutan

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

  // LOGIKA FILTER & SORTING
  const filteredData = stockists
    .filter(
      s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.domicile.toLowerCase().includes(search.toLowerCase()) ||
        (s.stockist_id &&
          s.stockist_id.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      // Ambil 3 digit terakhir sebagai angka untuk pengurutan numerik
      const idA = a.stockist_id ? parseInt(a.stockist_id.slice(-3)) : 0
      const idB = b.stockist_id ? parseInt(b.stockist_id.slice(-3)) : 0

      if (sortBy === 'num-asc') return idA - idB // Stokis Awal (001, 002...)
      if (sortBy === 'num-desc') return idB - idA // Stokis Akhir (...999)
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name)
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name)

      return 0
    })

  return (
    <div className='min-h-screen bg-[#050505] text-white font-sans'>
      {/* Navbar tetap sama */}

      <main className='max-w-7xl mx-auto px-4 md:px-6 py-12'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl md:text-6xl font-bold mb-4'>
            Jaringan <span className='text-[#d4af37]'>Stokis</span>
          </h1>
        </div>

        {/* --- TOOLS: SEARCH & SORT --- */}
        <div className='flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto'>
          <div className='relative flex-1'>
            <input
              type='text'
              placeholder='Cari Nama, Kota, atau ID...'
              className='w-full bg-[#111] border border-gray-800 p-4 pl-12 rounded-2xl focus:border-[#d4af37] outline-none text-sm'
              onChange={e => setSearch(e.target.value)}
            />
            <span className='absolute left-4 top-1/2 -translate-y-1/2'>🔍</span>
          </div>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className='bg-[#111] border border-gray-800 p-4 rounded-2xl outline-none focus:border-[#d4af37] text-sm font-semibold cursor-pointer w-full md:w-auto'
          >
            <option value='num-asc'>Stokis: Awal (001...)</option>{' '}
            {/* Ini akan terpilih otomatis */}
            <option value='num-desc'>Stokis: Akhir (...999)</option>
            <option value='name-asc'>Abjad: A - Z</option>
            <option value='name-desc'>Abjad: Z - A</option>
          </select>
        </div>

        {/* Grid 2 Kolom Mobile */}
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
          <AnimatePresence>
            {filteredData.map(s => (
              <motion.div
                layout
                key={s.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className='bg-[#0a0a0a] border border-gray-800 p-3 md:p-6 rounded-2xl hover:border-[#d4af37]/40 transition-all flex flex-col justify-between'
              >
                <div>
                  <div className='flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 mb-4'>
                    <div className='w-14 h-14 md:w-20 md:h-20 rounded-xl overflow-hidden bg-black border border-gray-800 flex-shrink-0'>
                      {s.profile_picture ? (
                        <img
                          src={s.profile_picture}
                          alt={s.name}
                          className='w-full h-full object-cover'
                        />
                      ) : (
                        <div className='w-full h-full flex items-center justify-center text-[10px] text-gray-700 font-bold uppercase'>
                          No Image
                        </div>
                      )}
                    </div>
                    <div className='text-center md:text-left'>
                      <div className='text-[8px] md:text-xs font-mono font-bold bg-[#d4af37]/10 text-[#d4af37] px-2 py-0.5 rounded border border-[#d4af37]/20 inline-block mb-1 uppercase'>
                        {s.stockist_id || 'PRO-STK'}
                      </div>
                      <h3 className='text-xs md:text-lg font-bold text-white line-clamp-1 uppercase tracking-tight'>
                        {s.name}
                      </h3>
                    </div>
                  </div>

                  <div className='space-y-1.5 text-gray-400 text-[10px] md:text-sm mb-6'>
                    <div className='flex items-center gap-2'>
                      <span className='grayscale'>📍</span>{' '}
                      <span className='truncate'>{s.domicile}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='grayscale'>✉️</span>
                      <span className='truncate lowercase opacity-80'>
                        {s.email || 'n/a'}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${(s.phone || '').replace(/\D/g, '')}`}
                  target='_blank'
                  rel='noreferrer'
                  className='block w-full py-2.5 md:py-4 bg-[#111] border border-gray-800 text-white text-[9px] md:text-sm font-bold text-center rounded-xl hover:bg-[#d4af37] hover:text-black transition-all uppercase'
                >
                  Hubungi Via Whatsapp
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer tetap sama */}
    </div>
  )
}

export default ListStokis
