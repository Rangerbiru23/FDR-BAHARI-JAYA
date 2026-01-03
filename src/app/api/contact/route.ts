import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validasi input
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // Validasi nomor telepon (minimal 10 digit)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      )
    }

    // Simpan data ke database atau kirim email
    // Untuk sekarang, kita simpan ke console log
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    })

    // Di sini Anda bisa:
    // 1. Menyimpan ke database menggunakan Prisma
    // 2. Mengirim email notifikasi
    // 3. Mengirim ke sistem CRM
    // 4. Mengirim notifikasi ke Slack/Telegram

    // Contoh pengiriman email (dengan asumsi Anda memiliki email service)
    // await sendNotificationEmail({ name, email, phone, message })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  )
}