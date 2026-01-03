'use client'

import { useState } from 'react'
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Scale, Users, Package, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('general')

  const sections = [
    { id: 'general', title: 'Ketentuan Umum', icon: FileText },
    { id: 'services', title: 'Layanan', icon: Package },
    { id: 'payment', title: 'Pembayaran', icon: CreditCard },
    { id: 'responsibility', title: 'Tanggung Jawab', icon: Scale },
    { id: 'dispute', title: 'Sengketa', icon: Users }
  ]

  const content = {
    general: {
      title: 'Ketentuan Umum Penggunaan',
      content: `
        <p class="mb-4">Selamat datang di website UFDR BAHARI JAYA. Dengan mengakses dan menggunakan website ini, Anda setuju untuk terikat oleh Syarat dan Ketentuan berikut.</p>
        
        <h3 class="text-lg font-semibold mt-6 mb-3">1. Penerimaan Syarat</h3>
        <p class="mb-4">Dengan mengakses website UFDR BAHARI JAYA, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini.</p>
        
        <h3 class="text-lg font-semibold mt-6 mb-3">2. Informasi Perusahaan</h3>
        <div class="bg-blue-50 p-4 rounded-lg mb-4">
          <ul class="space-y-2">
            <li><strong>Nama Perusahaan:</strong> UFDR BAHARI JAYA</li>
            <li><strong>Alamat:</strong> Jln. M. Yusuf Raya Ruko Blok B, No 7, Kel. Mekar Jaya, Kec. Sukmajaya, Kota Depok, Prop. Jawa Barat</li>
            <li><strong>Telepon:</strong> 0852-8570-3497</li>
            <li><strong>Email:</strong> info@ufdrbaharijaya.com</li>
            <li><strong>Bidang Usaha:</strong> Penangkapan Crustacea Di Perairan Umum</li>
          </ul>
        </div>

        <h3 class="text-lg font-semibold mt-6 mb-3">3. Kelayakan Pengguna</h3>
        <p class="mb-4">Website ini ditujukan untuk:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Individu yang berusia minimal 18 tahun</li>
          <li>Perusahaan atau badan usaha yang bergerak di bidang perikanan</li>
          <li>Pembeli atau distributor produk crustacea</li>
          <li>Pihak yang memiliki kapasitas hukum untuk membuat perjanjian</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">4. Perubahan Syarat</h3>
        <p class="mb-4">UFDR BAHARI JAYA berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif setelah dipublikasikan di website ini.</p>
      `
    },
    services: {
      title: 'Ketentuan Layanan',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">1. Deskripsi Layanan</h3>
        <p class="mb-4">UFDR BAHARI JAYA menyediakan layanan:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="border-l-4 border-blue-600 pl-4">
            <h4 class="font-semibold mb-2">Penangkapan Crustacea</h4>
            <ul class="text-sm space-y-1">
              <li>• Rajungan berkualitas</li>
              <li>• Kepiting segar</li>
              <li>• Udang laut</li>
              <li>• Hasil laut lainnya</li>
            </ul>
          </div>
          <div class="border-l-4 border-orange-500 pl-4">
            <h4 class="font-semibold mb-2">Layanan Tambahan</h4>
            <ul class="text-sm space-y-1">
              <li>• Pengolahan hasil</li>
              <li>• Pengemasan</li>
              <li>• Pengiriman</li>
              <li>• Konsultasi bisnis</li>
            </ul>
          </div>
        </div>

        <h3 class="text-lg font-semibold mt-6 mb-3">2. Kualitas Produk</h3>
        <p class="mb-4">Kami berkomitmen untuk menyediakan:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Produk crustacea segar dan berkualitas tinggi</li>
          <li>Standar kualitas yang sesuai dengan peraturan pemerintah</li>
          <li>Metode penangkapan yang ramah lingkungan</li>
          <li>Sertifikasi dan perizinan yang lengkap</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">3. Ketersediaan Layanan</h3>
        <p class="mb-4">Ketersediaan produk tergantung pada:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Musim penangkapan</li>
          <li>Kondisi cuaca dan laut</li>
          <li>Peraturan pemerintah terkait penangkapan</li>
          <li>Kapasitas produksi</li>
        </ul>

        <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-6">
          <div class="flex items-center space-x-2 mb-2">
            <CheckCircle class="h-5 w-5 text-green-500" />
            <h4 class="font-semibold text-green-800">Jaminan Layanan</h4>
          </div>
          <p class="text-green-700">Kami menjamin transparansi dalam informasi produk dan ketersediaan stok. Jika produk tidak tersedia, Kami akan memberikan alternatif terbaik.</p>
        </div>
      `
    },
    payment: {
      title: 'Ketentuan Pembayaran',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">1. Metode Pembayaran</h3>
        <p class="mb-4">UFDR BAHARI JAYA menerima metode pembayaran:</p>
        
        <div class="space-y-3 mb-6">
          <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <CreditCard class="h-5 w-5 text-blue-600" />
            <div>
              <h4 class="font-semibold">Transfer Bank</h4>
              <p class="text-sm text-gray-600">Transfer langsung ke rekening perusahaan Kami</p>
            </div>
          </div>
          <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Package class="h-5 w-5 text-green-600" />
            <div>
              <h4 class="font-semibold">Tunai</h4>
              <p class="text-sm text-gray-600">Pembayaran tunai saat pengiriman atau pickup</p>
            </div>
          </div>
          <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Users class="h-5 w-5 text-orange-600" />
            <div>
              <h4 class="font-semibold">Kredit (Untuk Mitra)</h4>
              <p class="text-sm text-gray-600">Syarat dan ketentuan khusus untuk mitra bisnis</p>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-semibold mt-6 mb-3">2. Syarat Pembayaran</h3>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Pembayaran harus dilakukan sebelum atau saat pengiriman produk</li>
          <li>Untuk pesanan besar, tersedia opsi DP 50%</li>
          <li>Pelunasan harus dilakukan sebelum produk dikirim</li>
          <li>Bukti pembayaran harus disimpan sebagai referensi</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">3. Harga dan Biaya</h3>
        <p class="mb-4">Harga produk mencakup:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Harga dasar produk per kilogram atau per unit</li>
          <li>Biaya pengolahan dan pengemasan standar</li>
          <li>Pajak yang berlaku sesuai peraturan</li>
          <li>Biaya pengiriman (jika berlaku)</li>
        </ul>

        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6">
          <div class="flex items-center space-x-2 mb-2">
            <AlertTriangle class="h-5 w-5 text-orange-500" />
            <h4 class="font-semibold text-orange-800">Penting</h4>
          </div>
          <p class="text-orange-700">Harga dapat berubah sewaktu-waktu tergantung kondisi pasar dan musim. Konfirmasi harga terbaru sebelum melakukan pemesanan.</p>
        </div>
      `
    },
    responsibility: {
      title: 'Tanggung Jawab dan Kewajiban',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">1. Tanggung Jawab UFDR BAHARI JAYA</h3>
        <p class="mb-4">Kami bertanggung jawab untuk:</p>
        
        <div class="space-y-3 mb-6">
          <div class="flex items-start space-x-3">
            <CheckCircle class="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 class="font-semibold">Kualitas Produk</h4>
              <p class="text-sm text-gray-600">Menjamin produk yang dikirim sesuai spesifikasi dan kualitas yang disepakati</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <CheckCircle class="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 class="font-semibold">Ketepatan Waktu</h4>
              <p class="text-sm text-gray-600">Mengirim produk sesuai jadwal yang telah disepakati</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <CheckCircle class="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 class="font-semibold">Legalitas</h4>
              <p class="text-sm text-gray-600">Memastikan semua produk memiliki perizinan yang lengkap dan sah</p>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-semibold mt-6 mb-3">2. Kewajiban Pelanggan</h3>
        <p class="mb-4">Pelanggan berkewajiban untuk:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Memberikan informasi yang akurat dan lengkap</li>
          <li>Melakukan pembayaran tepat waktu</li>
          <li>Memeriksa produk saat diterima</li>
          <li>Melaporkan masalah atau keluhan dalam waktu 24 jam</li>
          <li>Mematuhi syarat dan ketentuan yang berlaku</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">3. Batasan Tanggung Jawab</h3>
        <p class="mb-4">UFDR BAHARI JAYA tidak bertanggung jawab atas:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Keterlambatan karena force majeure (bencana alam, cuaca buruk)</li>
          <li>Kerusakan produk setelah diterima pelanggan</li>
          <li>Kehilangan produk karena penanganan yang salah oleh pihak ketiga</li>
          <li>Kerugian tidak langsung atau konsekuensial</li>
        </ul>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
          <div class="flex items-center space-x-2 mb-2">
            <Scale class="h-5 w-5 text-yellow-500" />
            <h4 class="font-semibold text-yellow-800">Klaim dan Garansi</h4>
          </div>
          <p class="text-yellow-700">Untuk klaim produk, pelanggan harus melaporkan dalam waktu 24 jam dengan bukti foto dan keterangan yang jelas. Klaim akan diproses sesuai prosedur yang berlaku.</p>
        </div>
      `
    },
    dispute: {
      title: 'Penyelesaian Sengketa',
      content: `
        <h3 class="text-lg font-semibold mt-6 mb-3">1. Prosedur Komplain</h3>
        <p class="mb-4">Jika Anda memiliki keluhan atau masalah:</p>
        
        <div class="space-y-4 mb-6">
          <div class="flex items-start space-x-3">
            <div class="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
            <div>
              <h4 class="font-semibold">Laporan Awal</h4>
              <p class="text-gray-600">Hubungi Kami melalui telepon atau email dalam waktu 24 jam</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
            <div>
              <h4 class="font-semibold">Dokumentasi</h4>
              <p class="text-gray-600">Sediakan bukti foto, video, atau dokumen pendukung</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
            <div>
              <h4 class="font-semibold">Investigasi</h4>
              <p class="text-gray-600">Tim Kami akan melakukan investigasi dalam 3 hari kerja</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="h-6 w-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
            <div>
              <h4 class="font-semibold">Resolusi</h4>
              <p class="text-gray-600">Kami akan memberikan solusi yang adil dan cepat</p>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-semibold mt-6 mb-3">2. Mediasi</h3>
        <p class="mb-4">Jika terjadi perselisihan:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Kedua belah pihak setuju untuk menyelesaikan secara musyawarah</li>
          <li>Dapat melibatkan pihak ketiga yang netral sebagai mediator</li>
          <li>Biaya mediasi dibagi rata antara kedua belah pihak</li>
          <li>Hasil mediasi bersifat final dan mengikat</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-3">3. Yurisdiksi Hukum</h3>
        <p class="mb-4">Syarat dan Ketentuan ini diatur oleh:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Hukum yang berlaku di Republik Indonesia</li>
          <li>Peraturan perundang-undangan terkait perikanan</li>
          <li>Ketentuan hukum perikatan dan perdagangan</li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6">
          <div class="flex items-center space-x-2 mb-2">
            <Users class="h-5 w-5 text-blue-600" />
            <h4 class="font-semibold text-blue-800">Kontak untuk Sengketa</h4>
          </div>
          <p class="text-blue-700">Untuk penyelesaian sengketa, hubungi:</p>
          <ul class="mt-2 space-y-1">
            <li><strong>Email:</strong> dispute@ufdrbaharijaya.com</li>
            <li><strong>Telepon:</strong> 0852-8570-3497</li>
            <li><strong>Alamat:</strong> Jln. M. Yusuf Raya Ruko Blok B, No 7, Kel. Mekar Jaya, Kec. Sukmajaya, Kota Depok, Prop. Jawa Barat</li>
          </ul>
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
                <FileText className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-blue-900">Terms & Conditions</span>
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
              Syarat dan Ketentuan
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

          {/* Agreement Section */}
          <div className="mt-12">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-orange-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Pernyataan Persetujuan
              </h3>
              <p className="text-gray-700 mb-6 text-center">
                Dengan menggunakan layanan UFDR BAHARI JAYA, Anda menyatakan bahwa Anda telah membaca, 
                memahami, dan menyetujui semua Syarat dan Ketentuan yang berlaku.
              </p>
              <div className="text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Saya Setuju dengan Syarat dan Ketentuan
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Pertanyaan tentang Syarat dan Ketentuan?
            </h3>
            <p className="text-gray-600 mb-6">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan Kami, 
              jangan ragu untuk menghubungi Kami.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg inline-block">
              <div className="space-y-2 text-left">
                <p><strong>Email:</strong> legal@ufdrbaharijaya.com</p>
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