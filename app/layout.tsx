import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "¡Felicidades Luc & Loli! | Camino Celebration",
  description:
    "A heartfelt celebration of Luc's journey as founder and Chair of The Constellation as well as his current Camino pilgrimage in Spain with Loli. From Burgos to Santiago - following their amazing adventure!🚶‍♂️✨",
  keywords: [
    "Luc",
    "Loli",
    "The Constellation",
    "Camino de Santiago",
    "Spain",
    "pilgrimage",
    "celebration",
    "founding member",
    "leadership",
  ],
  authors: [{ name: "The Constellation Community" }],
  creator: "The Constellation Community",
  publisher: "The Constellation Community",

  // Open Graph metadata for social sharing (WhatsApp, Facebook, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Replace with actual domain
    title: "¡Felicidades Luc & Loli! 🌟 Camino Celebration",
    description:
       "A heartfelt celebration of Luc's journey as founder and Chair of The Constellation as well as his current Camino pilgrimage in Spain with Loli. From Burgos to Santiago - following their amazing adventure!🚶‍♂️✨",
    siteName: "Luc & Loli Camino Celebration",
    images: [
      {
        url: "/images/luc-portrait.png", // This will show Luc's photo in the preview
        width: 1200,
        height: 630,
        alt: "Luc smiling - Founding Chair of The Constellation on his Camino journey",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "¡Felicidades Luc & Loli! 🌟 Camino Celebration",
    description:
      "A heartfelt celebration of Luc's journey as founder and Chair of The Constellation as well as his current Camino pilgrimage in Spain with Loli. From Burgos to Santiago - following their amazing adventure!🚶‍♂️✨",
    images: ["/images/luc-portrait.png"],
    creator: "@TheConstellation", // Replace with actual Twitter handle if available
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Verification and other meta tags
  verification: {
    // Add verification codes if needed
  },

  // App-specific metadata
  applicationName: "Luc & Loli Camino Celebration",
  category: "celebration",

  // Favicon and icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Manifest for PWA (optional)
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better social sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />

        {/* WhatsApp specific meta tags */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:rich_attachment" content="true" />

        {/* Additional structured data for better sharing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Luc & Loli Camino Celebration",
              description: "A heartfelt celebration of Luc's journey as founder and Chair of The Constellation as well as his current Camino pilgrimage in Spain with Loli. From Burgos to Santiago - following their amazing adventure!🚶‍♂️✨",
              startDate: "2024-05-18",
              location: {
                "@type": "Place",
                name: "Camino de Santiago",
                address: "Spain",
              },
              organizer: {
                "@type": "Organization",
                name: "The Constellation",
              },
              image: "/images/luc-portrait.png",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
