import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Total Service SPA - Arriendo de Maquinaria Pesada | Construcción y Minería",
  description: "Total Service SPA ofrece arriendo de maquinaria pesada para construcción, minería e infraestructura. Retroexcavadoras, excavadoras, grúas horquilla, camiones aspiradores. Servicios industriales, mantención de plantas de tratamiento, traslado de residuos. Contacto: +56 9 6158 2373",
  keywords: "arriendo maquinaria pesada, retroexcavadoras, excavadoras, grúas horquilla, maquinaria construcción, maquinaria minería, plantas tratamiento aguas, traslado residuos, piping HDPE, obras civiles, transporte industrial, Total Service SPA",
  authors: [{ name: "Total Service SPA" }],
  creator: "Total Service SPA",
  publisher: "Total Service SPA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://totalservicespa.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Total Service SPA - Arriendo de Maquinaria Pesada",
    description: "Arriendo de maquinaria pesada para construcción, minería e infraestructura. Retroexcavadoras, excavadoras, grúas horquilla y más equipos en excelente estado.",
    url: "https://totalservicespa.cl",
    siteName: "Total Service SPA",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/WhatsApp Image 2026-01-15 at 15.19.44.jpeg",
        width: 1200,
        height: 630,
        alt: "Total Service SPA - Maquinaria Pesada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Service SPA - Arriendo de Maquinaria Pesada",
    description: "Arriendo de maquinaria pesada para construcción, minería e infraestructura. Equipos modernos con operadores calificados.",
    images: ["/images/WhatsApp Image 2026-01-15 at 15.19.44.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Total Service SPA",
    "image": "https://totalservicespa.cl/images/WhatsApp Image 2026-01-15 at 15.19.44.jpeg",
    "@id": "https://totalservicespa.cl",
    "url": "https://totalservicespa.cl",
    "telephone": "+56961582373",
    "email": "TSERVICESSPA@GMAIL.COM",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL",
      "addressLocality": "Chile"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "",
      "longitude": ""
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "description": "Total Service SPA ofrece arriendo de maquinaria pesada para construcción, minería e infraestructura. Servicios industriales, mantención de plantas de tratamiento, traslado de residuos con resolución sanitaria, proyectos piping HDPE y aceros, obras civiles, transporte.",
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Maquinaria Pesada",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arriendo de Retroexcavadora",
            "description": "Arriendo de retroexcavadora con operador y combustible"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arriendo de Excavadora",
            "description": "Arriendo de excavadora 20 ton con operador y combustible"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arriendo de Grúa Horquilla",
            "description": "Arriendo de grúa horquilla diesel y gas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mantención de Plantas de Tratamiento",
            "description": "Mantenimiento preventivo y correctivo de plantas de tratamiento de aguas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traslado de Residuos",
            "description": "Traslado de residuos con resolución sanitaria"
          }
        }
      ]
    }
  };

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
