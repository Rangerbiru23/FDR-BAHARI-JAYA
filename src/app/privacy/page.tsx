'use client'

import { useState } from 'react'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Ringkasan', icon: Shield },
    { id: 'collection', title: 'Pengumpulan Data', icon: Database },
    { id: 'usage', title: 'Penggunaan Data', icon: Eye },
    { id: 'protection', title: 'Perlindungan Data', icon: Lock },
    { id: 'rights', title: 'Hak Pengguna', icon: UserCheck }
  ]

  const content = {
    overview: {
      title: 'Ringkasan Kebijakan Privasi',
      content: `
        <p class="mb-4">UFDR BAHARI JAYA ("Kami") sangat memprioritaskan privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat menggunakan layanan Kami.</p>
        
        <h3 class="text-lg font-semibold mt-6 mb-3">Informasi yang Kami Kumpulkan</h3>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Informasi identitas pribadi (nama, alamat, nomor telepon, email)</li>
          <li>Informasi bisnis (nama perusahaan, jabatan, kebutuhan produk)</li>
          <li>Informasi teknis (alamat IP, browser, perangkat)</li>
          <li>Informasi penggunaan website (halaman yang dikunjungi, waktu kunjungan)</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">Tujuan Pengumpulan Data</h3>
        <p class="mb-4">Kami mengumpulkan data untuk:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Memberikan layanan yang terbaik</li>
          <li>Memproses permintaan bisnis Anda</li>
          <li>Menghubungi Anda terkait produk dan layanan</li>
          <li>Meningkatkan pengalaman pengguna</li>
          <li>Memenuhi kewajiban hukum dan peraturan</li>
        </ul>
      `
    },
    collection: {
      title: 'Pengumpulan Data Pribadi',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Metode Pengumpulan</h3>
        <p class="mb-4">Kami mengumpulkan informasi pribadi Anda melalui:</p>
        
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 class="font-semibold mb-2">1. Formulir Kontak</h4>
          <p>Saat Anda mengisi formulir kontak di website Kami, Kami mengumpulkan nama, email, nomor telepon, dan pesan Anda untuk merespons pertanyaan atau permintaan bisnis.</p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 class="font-semibold mb-2">2. Komunikasi Langsung</h4>
          <p>Saat Anda menghubungi Kami melalui telepon atau email, Kami mencatat informasi komunikasi untuk memberikan layanan yang lebih baik.</p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 class="font-semibold mb-2">3. Data Otomatis</h4>
          <p>Kami secara otomatis mengumpulkan data teknis seperti alamat IP, tipe browser, sistem operasi, dan data analitik website untuk meningkatkan layanan.</p>
        </div>

        <h3 class="text-lg font-semibold mt-6 mb-3">Informasi yang Dikumpulkan</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="border-l-4 border-blue-600 pl-4">
            <h4 class="font-semibold mb-2">Data Pribadi</h4>
            <ul class="text-sm space-y-1">
              <li>• Nama lengkap</li>
              <li>• Alamat email</li>
              <li>• Nomor telepon</li>
              <li>• Alamat perusahaan</li>
            </ul>
          </div>
          <div class="border-l-4 border-orange-500 pl-4">
            <h4 class="font-semibold mb-2">Data Bisnis</h4>
            <ul class="text-sm space-y-1">
              <li>• Nama perusahaan</li>
              <li>• Jabatan</li>
              <li>• Kebutuhan produk</li>
              <li>• Volume pesanan</li>
            </ul>
          </div>
        </div>
      `
    },
    usage: {
      title: 'Penggunaan Data Pribadi',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Bagaimana Kami Menggunakan Data Anda</h3>
        <p class="mb-4">UFDR BAHARI JAYA menggunakan informasi pribadi Anda untuk:</p>
        
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <div class="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
            <div>
              <h4 class="font-semibold">Layanan Pelanggan</h4>
              <p class="text-gray-600">Merpons pertanyaan, memproses permintaan, dan memberikan informasi produk crustacea yang Anda butuhkan.</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
            <div>
              <h4 class="font-semibold">Pengembangan Bisnis</h4>
              <p class="text-gray-600">Menghubungi Anda terkait penawaran produk baru, promosi, dan informasi bisnis yang relevan.</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
            <div>
              <h4 class="font-semibold">Analisis dan Peningkatan</h4>
              <p class="text-gray-600">Menganalisis pola penggunaan untuk meningkatkan website dan layanan Kami.</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
            <div>
              <h4 class="font-semibold">Kepatuhan Hukum</h4>
              <p class="text-gray-600">Memenuhi kewajiban hukum, peraturan, atau permintaan dari pihak berwenang.</p>
            </div>
          </div>
        </div>

        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6">
          <div class="flex items-center space-x-2 mb-2">
            <AlertCircle class="h-5 w-5 text-orange-500" />
            <h4 class="font-semibold text-orange-800">Penting untuk Diketahui</h4>
          </div>
          <p class="text-orange-700">Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali sebagaimana diatur dalam kebijakan ini.</p>
        </div>
      `
    },
    protection: {
      title: 'Perlindungan Data Pribadi',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Keamanan Data</h3>
        <p class="mb-4">UFDR BAHARI JAYA berkomitmen untuk melindungi data pribadi Anda dengan:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <div class="flex items-center space-x-3 mb-2">
              <Lock class="h-5 w-5 text-blue-600" />
              <h4 class="font-semibold">Enkripsi Data</h4>
            </div>
            <p class="text-sm text-gray-600">Semua data pribadi dienkripsi menggunakan teknologi SSL/TLS saat transmisi.</p>
          </Card>

          <Card className="p-4">
            <div class="flex items-center space-x-3 mb-2">
              <Shield class="h-5 w-5 text-green-600" />
              <h4 class="font-semibold">Akses Terbatas</h4>
            </div>
            <p class="text-sm text-gray-600">Hanya personel yang berwenang yang dapat mengakses data pribadi Anda.</p>
          </Card>

          <Card className="p-4">
            <div class="flex items-center space-x-3 mb-2">
              <Database class="h-5 w-5 text-orange-600" />
              <h4 class="font-semibold">Backup Aman</h4>
            </div>
            <p class="text-sm text-gray-600">Data secara rutin di-backup dengan prosedur keamanan yang ketat.</p>
          </Card>

          <Card className="p-4">
            <div class="flex items-center space-x-3 mb-2">
              <UserCheck class="h-5 w-5 text-purple-600" />
              <h4 class="font-semibold">Audit Rutin</h4>
            </div>
            <p class="text-sm text-gray-600">Sistem Kami diaudit secara berkala untuk memastikan keamanan data.</p>
          </Card>
        </div>

        <h3 class="text-lg font-semibold mt-6 mb-3">Retensi Data</h3>
        <p class="mb-4">Kami menyimpan data pribadi Anda hanya selama diperlukan untuk:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Memenuhi tujuan pengumpulan data</li>
          <li>Memenuhi kewajiban hukum dan peraturan</li>
          <li>Menyelesaikan perselisihan</li>
          <li>Menegakkan perjanjian Kami</li>
        </ul>

        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Penghapusan Data</h4>
          <p>Setelah periode retensi berakhir, data pribadi Anda akan dihapus secara permanen atau dianonimkan sesuai dengan kebijakan Kami.</p>
        </div>
      `
    },
    rights: {
      title: 'Hak Privasi Pengguna',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">Hak Anda sebagai Pengguna</h3>
        <p class="mb-4">Sebagai pengguna layanan Kami, Anda memiliki hak-hak berikut:</p>
        
        <div class="space-y-4">
          <div class="border-l-4 border-blue-600 pl-4">
            <h4 class="font-semibold mb-2">1. Hak Akses</h4>
            <p class="text-gray-600">Anda berhak mengetahui data pribadi apa yang Kami miliki tentang Anda.</p>
          </div>

          <div class="border-l-4 border-green-600 pl-4">
            <h4 class="font-semibold mb-2">2. Hak Koreksi</h4>
            <p class="text-gray-600">Anda dapat memperbarui atau memperbaiki data pribadi yang tidak akurat.</p>
          </div>

          <div class="border-l-4 border-orange-600 pl-4">
            <h4 class="font-semibold mb-2">3. Hak Penghapusan</h4>
            <p class="text-gray-600">Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu.</p>
          </div>

          <div class="border-l-4 border-purple-600 pl-4">
            <h4 class="font-semibold mb-2">4. Hak Pembatasan</h4>
            <p class="text-gray-600">Anda dapat membatasi pengolahan data pribadi Anda.</p>
          </div>

          <div class="border-l-4 border-red-600 pl-4">
            <h4 class="font-semibold mb-2">5. Hak Portabilitas</h4>
            <p class="text-gray-600">Anda dapat meminta transfer data pribadi Anda dalam format terstruktur.</p>
          </div>
        </div>

        <h3 class="text-lg font-semibold mt-6 mb-3">Cara Menjalankan Hak Anda</h3>
        <p class="mb-4">Untuk menjalankan hak-hak Anda, silakan hubungi Kami melalui:</p>
        <div class="bg-gray-50 p-4 rounded-lg">
          <ul class="space-y-2">
            <li><strong>Email:</strong> privacy@ufdrbaharijaya.com</li>
            <li><strong>Telepon:</strong> 0852-8570-3497</li>
            <li><strong>Alamat:</strong> Jln. M. Yusuf Raya Ruko Blok B, No 7, Kel. Mekar Jaya, Kec. Sukmajaya, Kota Depok, Prop. Jawa Barat</li>
          </ul>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
          <div class="flex items-center space-x-2 mb-2">
            <AlertCircle class="h-5 w-5 text-yellow-500" />
            <h4 class="font-semibold text-yellow-800">Waktu Respons</h4>
          </div>
          <p class="text-yellow-700">Kami akan merespons permintaan Anda dalam waktu 14 hari kerja sejak menerima permintaan yang valid.</p>
        </div>
      `
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-blue-900">Privacy Policy</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              UFDR BAHARI JAYA
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              UFDR BAHARI JAYA
            </p>
            <p className="text-gray-500">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveSection(section.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{section.title}</span>
                </Button>
              )
            })}
          </div>

          {/* Content */}
          <Card className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content[activeSection].content }}
            />
          </Card>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Pertanyaan tentang Privasi?
            </h3>
            <p className="text-gray-600 mb-6">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi Kami, 
              jangan ragu untuk menghubungi Kami.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg inline-block">
              <div className="space-y-2 text-left">
                <p><strong>Email:</strong> privacy@ufdrbaharijaya.com</p>
                <p><strong>Telepon:</strong> 0852-8570-3497</p>
                <p><strong>Alamat:</strong> Jln. M. Yusuf Raya Ruko Blok B, No 7, Kel. Mekar Jaya, Kec. Sukmajaya, Kota Depok, Prop. Jawa Barat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">© 2024 UFDR BAHARI JAYA. All rights reserved.</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}