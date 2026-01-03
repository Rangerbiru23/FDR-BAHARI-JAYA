'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Fish, Waves, Anchor, Users, Target, Shield, Facebook, Instagram, Twitter, Menu, X, ChevronRight, Clock, Award, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    quantity: '',
    budget: ''
  })
  const [showLeadForm, setShowLeadForm] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLeadInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLeadData({
      ...leadData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        alert('Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.')
        setFormData({ name: '', email: '', phone: '', message: '' })
        
        // Meta Ads conversion tracking
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Contact Form',
            content_category: 'Lead Generation'
          })
        }
      } else {
        alert(result.error || 'Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Terjadi kesalahan server. Silakan coba lagi.')
    }
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Get URL parameters for Meta Ads tracking
      const urlParams = new URLSearchParams(window.location.search)
      
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...leadData,
          utm_source: urlParams.get('utm_source') || '',
          utm_medium: urlParams.get('utm_medium') || '',
          utm_campaign: urlParams.get('utm_campaign') || '',
          utm_content: urlParams.get('utm_content') || '',
          utm_term: urlParams.get('utm_term') || ''
        }),
      })

      const result = await response.json()

      if (response.ok) {
        alert('Terima kasih! Tim kami akan segera menghubungi Anda dalam 1x24 jam.')
        setLeadData({ name: '', email: '', phone: '', company: '', product_interest: '', quantity: '', budget: '' })
        setShowLeadForm(false)
        
        // Meta Ads conversion tracking
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Quick Quote Form',
            content_category: 'Lead Generation',
            value: 1.0,
            currency: 'USD'
          })
        }
      } else {
        alert(result.error || 'Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Lead form submission error:', error)
      alert('Terjadi kesalahan server. Silakan coba lagi.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Anchor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-900">UFDR BAHARI JAYA</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#layanan" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-500/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
                <Fish className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">Penangkapan Crustacea Terpercaya</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">UFDR BAHARI JAYA</span>
                <br />
                Mitra Laut Nusantara
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Perusahaan terkemuka dalam penangkapan crustacea di perairan umum Indonesia. 
                Menyediakan hasil laut berkualitas tinggi dengan standar profesional dan keberlanjutan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => setShowLeadForm(true)}
                >
                  Dapatkan Penawaran Cepat
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  Pelajari Lebih Lanjut
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-gray-600">Ton Produksi</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Mitra Bisnis</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <Waves className="h-96 w-96 text-blue-500/20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-blue-600">UFDR BAHARI JAYA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesional dalam penangkapan crustacea dengan komitmen terhadap kualitas dan keberlanjutan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-l-4 border-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Target className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Visi Kami</h3>
                      <p className="text-gray-600">
                        Menjadi perusahaan terdepan dalam industri perikanan Indonesia 
                        dengan standar kualitas internasional dan keberlanjutan lingkungan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Misi Kami</h3>
                      <p className="text-gray-600">
                        Menyediakan produk crustacea berkualitas tinggi, 
                        mendukung perekonomian lokal, dan menjaga kelestarian sumber daya laut.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Award className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Nilai Kami</h3>
                      <p className="text-gray-600">
                        Integritas, profesionalisme, kualitas, dan keberlanjutan 
                        menjadi fondasi setiap aspek bisnis kami.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Keunggulan Kami</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Perizinan lengkap dan resmi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Teknologi penangkapan modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Kualitas produk terjamin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Pengiriman tepat waktu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Harga kompetitif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-gradient-to-b from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-orange-600">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan crustacea berkualitas tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Fish className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Penangkapan Rajungan</h3>
                <p className="text-gray-600 mb-4">
                  Penangkapan rajungan berkualitas dengan metode yang ramah lingkungan 
                  dan standar kualitas tertinggi.
                </p>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  Pelajari Lebih Lanjut →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Package className="h-8 w-8 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pengolahan Hasil Laut</h3>
                <p className="text-gray-600 mb-4">
                  Pengolahan dan pengemasan crustacea dengan teknologi modern 
                  untuk menjaga kesegaran dan kualitas.
                </p>
                <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0">
                  Pelajari Lebih Lanjut →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <Users className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kemitraan Bisnis</h3>
                <p className="text-gray-600 mb-4">
                  Program kemitraan untuk pengembangan bisnis crustacea 
                  dengan dukungan penuh dari tim profesional.
                </p>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                  Pelajari Lebih Lanjut →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-blue-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap memenuhi kebutuhan crustacea berkualitas tinggi untuk bisnis Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telepon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08xx-xxxx-xxxx"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Jelaskan kebutuhan Anda..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Kirim Pesan
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-blue-600">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Alamat</h3>
                    <p className="text-gray-600">
                      Jln. M. Yusuf Raya Ruko Blok B, No 7<br />
                      Kel. Mekar Jaya, Kec. Sukmajaya<br />
                      Kota Depok, Prop. Jawa Barat
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-orange-500">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h3>
                    <p className="text-gray-600">0852-8570-3497</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-green-600">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@ufdrbaharijaya.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-purple-600">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 12:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Dapatkan produk crustacea berkualitas tinggi dengan harga kompetitif 
            dan layanan terbaik untuk kebutuhan bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Download Katalog
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Generation Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Dapatkan Penawaran Cepat</h3>
                <button
                  onClick={() => setShowLeadForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="lead_name">Nama Lengkap *</Label>
                  <Input
                    id="lead_name"
                    name="name"
                    value={leadData.name}
                    onChange={handleLeadInputChange}
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="lead_email">Email *</Label>
                  <Input
                    id="lead_email"
                    name="email"
                    type="email"
                    value={leadData.email}
                    onChange={handleLeadInputChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="lead_phone">Telepon *</Label>
                  <Input
                    id="lead_phone"
                    name="phone"
                    value={leadData.phone}
                    onChange={handleLeadInputChange}
                    placeholder="08xx-xxxx-xxxx"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="lead_company">Perusahaan</Label>
                  <Input
                    id="lead_company"
                    name="company"
                    value={leadData.company}
                    onChange={handleLeadInputChange}
                    placeholder="Nama perusahaan (opsional)"
                  />
                </div>

                <div>
                  <Label htmlFor="lead_product">Produk yang Diminati</Label>
                  <select
                    id="lead_product"
                    name="product_interest"
                    value={leadData.product_interest}
                    onChange={handleLeadInputChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih produk</option>
                    <option value="rajungan">Rajungan</option>
                    <option value="kepiting">Kepiting</option>
                    <option value="udang">Udang Laut</option>
                    <option value="campuran">Produk Campuran</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="lead_quantity">Estimasi Kuantitas</Label>
                  <select
                    id="lead_quantity"
                    name="quantity"
                    value={leadData.quantity}
                    onChange={handleLeadInputChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih kuantitas</option>
                    <option value="1-10">1-10 kg</option>
                    <option value="11-50">11-50 kg</option>
                    <option value="51-100">51-100 kg</option>
                    <option value="101-500">101-500 kg</option>
                    <option value="500+">500+ kg</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="lead_budget">Estimasi Budget</Label>
                  <select
                    id="lead_budget"
                    name="budget"
                    value={leadData.budget}
                    onChange={handleLeadInputChange}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih budget</option>
                    <option value="1-5jt">Rp 1-5 juta</option>
                    <option value="5-10jt">Rp 5-10 juta</option>
                    <option value="10-25jt">Rp 10-25 juta</option>
                    <option value="25-50jt">Rp 25-50 juta</option>
                    <option value="50jt+">Rp 50+ juta</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Gratis Konsultasi!</strong> Tim kami akan menghubungi Anda dalam 1x24 jam untuk memberikan penawaran terbaik.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Penawaran
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Anchor className="h-6 w-6" />
                <span className="text-lg font-bold">UFDR BAHARI JAYA</span>
              </div>
              <p className="text-gray-400">
                Mitra terpercaya dalam industri perikanan Indonesia 
                untuk produk crustacea berkualitas tinggi.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Penangkapan Rajungan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengolahan Hasil Laut</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kemitraan Bisnis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UFDR BAHARI JAYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}