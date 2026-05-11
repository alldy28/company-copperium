import { Link } from 'react-router-dom'
import logoCopperium from './assets/logo-coppperium.png'
import './index.css'
import { motion } from 'framer-motion'

function App () {
  // --- FUNGSI SCROLL ---
  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // --- ANIMASI ---
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <div className='min-h-screen bg-darkBg text-white overflow-x-hidden font-sans'>
      {/* --- NAVBAR --- */}
      <nav className='fixed w-full top-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 bg-black/80 backdrop-blur-md border-b border-gray-800'>
        {/* BAGIAN LOGO */}
        <div
          className='flex items-center gap-3 cursor-pointer'
          onClick={() => scrollToSection('home')}
        >
          <img
            src={logoCopperium}
            alt='Logo Copperium'
            className='w-10 h-10 md:w-12 md:h-12 object-contain'
          />
          <div className='text-xl md:text-2xl font-extrabold text-copper tracking-[0.15em] hidden sm:block'>
            COPPERIUM
          </div>
        </div>

        {/* Menu Navigasi */}
        <div className='hidden md:flex gap-8 items-center'>
          <button
            onClick={() => scrollToSection('home')}
            className='text-gray-400 font-semibold hover:text-copper transition-colors'
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className='text-gray-400 font-semibold hover:text-copper transition-colors'
          >
            Keunggulan
          </button>
          <button
            onClick={() => scrollToSection('product')}
            className='text-gray-400 font-semibold hover:text-copper transition-colors'
          >
            Produk
          </button>
          <button
            onClick={() => scrollToSection('aplikasi')}
            className='text-gray-400 font-semibold hover:text-copper transition-colors'
          >
            Aplikasi
          </button>

          {/* MENU: STOKIS (Mengarahkan ke halaman terpisah) */}
          <Link
            to='/list-stokis'
            className='text-gray-400 font-semibold hover:text-copper transition-colors'
          >
            Jaringan Stokis
          </Link>

          <button
            onClick={() => scrollToSection('contact')}
            className='border border-copper text-copper px-5 py-2 rounded-full font-semibold hover:bg-copper/10 transition-colors'
          >
            Kontak
          </button>
        </div>
      </nav>

      {/* --- SECTION 1: BANNER / HERO --- */}
      <section
        id='home'
        className='min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 text-center bg-gradient-to-b from-[#1a1511] to-darkBg'
      >
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUpVariant}
          className='max-w-4xl'
        >
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight'>
            Presisi dalam Genggaman, <br />
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-copperDark via-copper to-copperLight'>
              Elegan dalam Desain.
            </span>
          </h1>
          <p className='text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed'>
            Tinggalkan pemindai biasa. Copperium Scanner menghadirkan kecepatan
            komputasi tinggi dalam balutan antarmuka yang mewah.
          </p>
          <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
            <button
              onClick={() => scrollToSection('product')}
              className='px-8 py-4 text-lg font-bold bg-gradient-to-r from-copperDark to-copper text-black rounded-full hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.3)] transition-all duration-300'
            >
              Lihat Produk Kami
            </button>
            <a
              href='https://play.google.com/store/apps/details?id=com.copperium.scanner'
              target='_blank'
              rel='noreferrer'
              className='hover:scale-105 transition-transform duration-300'
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
                alt='Unduh di Google Play'
                className='w-40 md:w-48'
              />
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 2: KEUNGGULAN --- */}
      <section
        id='features'
        className='min-h-screen flex justify-center items-center px-6 py-24 bg-[#080808]'
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'
        >
          {/* KOLOM KIRI: TEKS */}
          <div className='order-2 lg:order-1'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight'>
              7 Keistimewaan <br />
              <span className='text-copper'>"Phoenix" Copperium</span>
            </h2>

            <ul className='space-y-5 mb-8'>
              {[
                'Terbuat dari Fine Copper, Cu 999 yang memiliki nilai intrinsik & potensi kenaikan value.',
                'Dikemas exclusive menggunakan acrylic yang membuat penampilannya semakin cantik.',
                'Produk pertama dari brand Copperium, biasanya produk pertama dari suatu brand akan memiliki nilai historical yang tinggi. [Nilai Premium]',
                'Dilengkapi QR code dan aplikasi Copperium Scanner yang bisa di download via Google Playstore.',
                'Limited 6354 pcs sehingga hanya 0,0022% dari penduduk Indonesia yang bisa memiliki produk ini.',
                'Memiliki fundamental komunitas yang besar dan kuat, karena Copperium satu Holding Company dengan MiniGold & Silverium, tergabung dalam Goldverium.',
                'Memiliki 50 Jaringan Stockist yang akan membantu dalam edukasi, distribusi, hingga proses Buyback (disediakan tabel buyback resmi).'
              ].map((text, i) => (
                <li key={i} className='flex items-start gap-4 group'>
                  <span className='flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-copper/10 text-copper font-bold border border-copper/30 group-hover:bg-copper group-hover:text-black transition-colors duration-300'>
                    {i + 1}
                  </span>
                  <p className='text-gray-300 leading-relaxed text-sm md:text-base pt-1'>
                    {text}
                  </p>
                </li>
              ))}
            </ul>

            <div className='p-5 rounded-2xl bg-gradient-to-r from-copperDark/20 to-transparent border-l-4 border-copper'>
              <p className='text-copper font-semibold text-lg italic'>
                "7 Keistimewaan dalam 1 karya ini hanya dimiliki oleh produk
                Phoenix Copperium."
              </p>
            </div>
          </div>

          {/* KOLOM KANAN: GAMBAR 4:3 */}
          <div className='order-1 lg:order-2 w-full aspect-[3/4] bg-[#111] rounded-[2rem] border border-[#222] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.6)] group'>
            <img
              src='https://aynfa5yf4rzcovie.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-11%20at%2014.33.58.jpeg'
              alt='Phoenix Copperium Product'
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out'
            />
            <div className='absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-copper/10 pointer-events-none'></div>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 3: PRODUK FISIK --- */}
      <section
        id='product'
        className='min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-darkBg'
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className='max-w-7xl w-full'
        >
          <h2 className='text-3xl md:text-5xl font-bold mb-16 text-center text-white'>
            Produk <span className='text-copper'>Eksklusif</span>
          </h2>

          <div className='flex flex-col lg:flex-row gap-12 md:gap-20 items-center bg-[#0a0a0a] p-6 md:p-10 rounded-[3rem] border border-[#1f1f1f] shadow-2xl'>
            {/* Foto Produk di Kiri */}
            <div className='w-full lg:w-1/2 aspect-square md:aspect-[4/3] bg-[#111] rounded-[2rem] border border-[#222] overflow-hidden relative group'>
              <img
                src='https://aynfa5yf4rzcovie.public.blob.vercel-storage.com/copper%20phonix.jpeg'
                alt='Detail Phoenix Copperium'
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out'
              />
            </div>

            {/* Judul dan Deskripsi di Kanan */}
            <div className='w-full lg:w-1/2 text-left'>
              <div className='inline-block px-4 py-1 rounded-full bg-copper/10 border border-copper/30 text-copper text-sm font-bold tracking-widest mb-4'>
                LIMITED EDITION
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
                Phoenix <span className='text-copper'>Copperium</span>
              </h3>
              <p className='text-gray-400 text-lg leading-relaxed mb-8'>
                Sebuah mahakarya yang memadukan nilai historis, keindahan seni,
                dan keaslian material. Dicetak dengan tembaga murni
                bersertifikat, dikemas dengan elegan dalam akrilik premium, dan
                dilindungi oleh sistem keamanan QR Code terenkripsi. Koleksi
                wajib bagi Anda yang mengerti nilai sejati sebuah karya.
              </p>

              <ul className='space-y-4 mb-10'>
                <li className='flex items-center text-gray-300 font-medium'>
                  <span className='text-copper mr-3 text-xl'>✔</span> Fine
                  Copper Cu 999
                </li>
                <li className='flex items-center text-gray-300 font-medium'>
                  <span className='text-copper mr-3 text-xl'>✔</span> Eksklusif
                  Akrilik Packaging
                </li>
                <li className='flex items-center text-gray-300 font-medium'>
                  <span className='text-copper mr-3 text-xl'>✔</span> Dilengkapi
                  Sistem QR Code
                </li>
              </ul>

              <Link 
                to="/list-stokis" 
                className='inline-block w-full sm:w-auto px-10 py-4 text-lg font-bold bg-gradient-to-r from-copperDark to-copper text-black rounded-full text-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-copper/20'
              >
                Pesan Melalui Stokis
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 4: APLIKASI UNGGULAN --- */}
      <section
        id='aplikasi'
        className='min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-[#050505]'
      >
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className='text-3xl md:text-5xl font-bold mb-16 text-center'
        >
          Aplikasi <span className='text-copper'>Unggulan</span>
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          className='bg-[#0f0f0f] border border-[#1f1f1f] rounded-[3rem] p-8 md:p-14 max-w-5xl w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center shadow-2xl'
        >
          <div className='w-[240px] h-[500px] bg-[#1a1a1a] border-4 border-[#222] rounded-[2.5rem] flex justify-center items-center text-gray-600 font-bold flex-shrink-0 shadow-inner overflow-hidden'>
            <img
              src='https://aynfa5yf4rzcovie.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-27%20at%2017.20.29.jpeg'
              alt='Copperium Scanner App'
              className='w-full h-full object-cover'
            />
          </div>

          <div className='flex-1 text-center md:text-left'>
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Copperium <span className='text-copper'>Scanner</span>
            </h3>
            <p className='text-gray-400 leading-relaxed mb-8 text-lg'>
              Bukan sekadar aplikasi pemindai. Ini adalah alat kelas profesional
              yang mengubah ponsel Anda menjadi alat verifikasi keaslian produk
              berkinerja tinggi, dibalut dengan desain estetika yang menawan.
            </p>
            <ul className='space-y-4 text-left inline-block md:block mb-8'>
              <li className='flex items-center text-gray-300'>
                <span className='text-copper mr-3 text-xl'>✦</span> Mendukung
                semua format barcode standar
              </li>
              <li className='flex items-center text-gray-300'>
                <span className='text-copper mr-3 text-xl'>✦</span> Fokus
                otomatis yang cerdas
              </li>
              <li className='flex items-center text-gray-300'>
                <span className='text-copper mr-3 text-xl'>✦</span> Pencahayaan
                senter terintegrasi
              </li>
              <li className='flex items-center text-gray-300'>
                <span className='text-copper mr-3 text-xl'>✦</span> Riwayat
                pemindaian otomatis
              </li>
            </ul>
            <a
              href='https://play.google.com/store'
              target='_blank'
              rel='noreferrer'
              className='inline-block hover:scale-105 transition-transform duration-300'
            >
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
                alt='Unduh di Google Play'
                className='w-48'
              />
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 5: KONTAK --- */}
      <section
        id='contact'
        className='min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-t from-[#1a1511] to-darkBg text-center'
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          className='max-w-5xl w-full'
        >
          <h2 className='text-3xl md:text-5xl font-bold mb-6'>Hubungi Kami</h2>
          <p className='text-gray-400 mb-16 text-lg'>
            Ada pertanyaan atau butuh dukungan teknis? Tim kami siap membantu
            Anda.
          </p>

          <div className='flex flex-col md:flex-row flex-wrap justify-center gap-12 md:gap-20'>
            {/* 1. KANTOR PUSAT */}
            <div className='flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4'>
              <span className='text-4xl'>📍</span>
              <div>
                <h4 className='text-copper font-bold text-xl mb-2'>
                  Kantor Pusat
                </h4>
                <p className='text-gray-300 leading-relaxed'>
                  PT Berkah Sinergi Trilogam Imperium
                  <br />
                  Jakarta, Indonesia
                </p>
              </div>
            </div>

            {/* 2. EMAIL */}
            <div className='flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4'>
              <span className='text-4xl'>✉️</span>
              <div>
                <h4 className='text-copper font-bold text-xl mb-2'>
                  Email Dukungan
                </h4>
                <p className='text-gray-300 leading-relaxed'>
                  support@copperium.com
                </p>
              </div>
            </div>

            {/* 3. NOMOR TELEPON (BARU) */}
            <div className='flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4'>
              <span className='text-4xl'>📞</span>
              <div>
                <h4 className='text-copper font-bold text-xl mb-2'>
                  Layanan Pelanggan
                </h4>
                <p className='text-gray-300 leading-relaxed'>
                  <a 
                    href="https://wa.me/6282298525298" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-copper transition-colors"
                  >
                    0822-9852-5298
                  </a>
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className='text-center p-8 bg-[#020202] text-gray-500 border-t border-[#111] text-sm'>
        <p>
          &copy; 2026 PT Berkah Sinergi Trilogam Imperium. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
