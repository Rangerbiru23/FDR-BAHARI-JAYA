import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UFDR BAHARI JAYA - Penangkapan Crustacea Terpercaya | Mitra Laut Nusantara",
  description: "UFDR BAHARI JAYA adalah perusahaan terkemuka dalam penangkapan crustacea di perairan umum Indonesia. Menyediakan rajungan, kepiting, dan udang laut berkualitas tinggi dengan standar profesional dan keberlanjutan.",
  keywords: ["UFDR BAHARI JAYA", "crustacea", "rajungan", "kepiting", "udang laut", "perikanan", "hasil laut", "penangkapan ikan", "Depok", "Jawa Barat", "Indonesia"],
  authors: [{ name: "UFDR BAHARI JAYA" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "UFDR BAHARI JAYA - Penangkapan Crustacea Terpercaya",
    description: "Perusahaan terkemuka dalam penangkapan crustacea di Indonesia. Kualitas terjamin, harga kompetitif.",
    url: "https://ufdrbaharijaya.com",
    siteName: "UFDR BAHARI JAYA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UFDR BAHARI JAYA - Penangkapan Crustacea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UFDR BAHARI JAYA - Penangkapan Crustacea Terpercaya",
    description: "Perusahaan terkemuka dalam penangkapan crustacea di Indonesia. Kualitas terjamin, harga kompetitif.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Meta Ads Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID'); // Ganti dengan Pixel ID Anda
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID'); // Ganti dengan GA Measurement ID Anda
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
