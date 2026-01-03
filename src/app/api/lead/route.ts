import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      phone, 
      company, 
      product_interest, 
      quantity, 
      budget, 
      source = 'website',
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term
    } = body

    // Validasi input yang diperlukan
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Nama, email, dan telepon harus diisi' },
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

    // Validasi nomor telepon
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      )
    }

    // Data lead untuk Meta Ads tracking
    const leadData = {
      personal_info: {
        name,
        email,
        phone,
        company: company || 'Personal'
      },
      business_info: {
        product_interest: product_interest || 'general',
        quantity: quantity || 'not_specified',
        budget: budget || 'not_specified'
      },
      marketing_info: {
        source,
        utm_source: utm_source || 'direct',
        utm_medium: utm_medium || 'none',
        utm_campaign: utm_campaign || 'none',
        utm_content: utm_content || 'none',
        utm_term: utm_term || 'none',
        landing_page: request.headers.get('referer') || 'unknown',
        user_agent: request.headers.get('user-agent') || 'unknown',
        ip_address: request.ip || 'unknown'
      },
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // Simpan lead data
    console.log('New Lead Generated:', leadData)

    // Di sini Anda bisa:
    // 1. Menyimpan ke database leads
    // 2. Mengirim ke Meta Ads Conversions API
    // 3. Mengirim email notifikasi ke sales team
    // 4. Mengirim ke CRM system
    // 5. Mengirim WhatsApp notification

    // Contoh integrasi dengan Meta Ads Conversions API
    // await sendMetaConversion(leadData)

    // Contoh pengiriman notifikasi ke sales
    // await notifySalesTeam(leadData)

    // Response dengan data untuk Meta Ads pixel
    const response = {
      success: true,
      message: 'Terima kasih! Tim kami akan segera menghubungi Anda.',
      lead_id: `LEAD_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      next_steps: [
        'Tim kami akan menghubungi Anda dalam 1x24 jam',
        'Anda akan menerima email konfirmasi',
        'Konsultasi gratis akan dijadwalkan'
      ]
    }

    return NextResponse.json(response, { status: 200 })

  } catch (error) {
    console.error('Lead generation error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Lead Generation API endpoint' },
    { status: 200 }
  )
}