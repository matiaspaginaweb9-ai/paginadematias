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
  title: {
    default: "Total Service SPA - Arriendo de Maquinaria Pesada | Construcción y Minería",
    template: "%s | Total Service SPA",
  },
  description: "Total Service SPA ofrece arriendo de maquinaria pesada para construcción, minería e infraestructura. Retroexcavadoras, excavadoras, grúas horquilla, camiones aspiradores. Servicios industriales, mantención de plantas de tratamiento, traslado de residuos. Contacto: +56 9 6158 2373",
  keywords: ["arriendo maquinaria pesada", "retroexcavadoras Chile", "excavadoras arriendo", "grúas horquilla", "maquinaria construcción", "maquinaria minería", "plantas tratamiento aguas", "traslado residuos", "piping HDPE", "obras civiles", "transporte industrial", "Total Service SPA", "arriendo equipos construcción", "maquinaria pesada Quillota", "servicios industriales Chile"],
  authors: [{ name: "Total Service SPA", url: "https://totalservicespa.cl" }],
  creator: "Total Service SPA",
  publisher: "Total Service SPA",
  applicationName: "Total Service SPA",
  category: "Maquinaria Pesada",
  classification: "Servicios Industriales",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://totalservicespa.cl"),
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "https://totalservicespa.cl",
      "es": "https://totalservicespa.cl",
    },
  },
  openGraph: {
    title: "Total Service SPA - Arriendo de Maquinaria Pesada | Construcción y Minería",
    description: "Arriendo de maquinaria pesada para construcción, minería e infraestructura. Retroexcavadoras, excavadoras, grúas horquilla y más equipos en excelente estado. Operadores calificados, servicio de traslado incluido.",
    url: "https://totalservicespa.cl",
    siteName: "Total Service SPA",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://totalservicespa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
        width: 1200,
        height: 630,
        alt: "Total Service SPA - Maquinaria Pesada para Construcción y Minería",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Service SPA - Arriendo de Maquinaria Pesada",
    description: "Arriendo de maquinaria pesada para construcción, minería e infraestructura. Equipos modernos con operadores calificados. Contacto: +56 9 6158 2373",
    images: ["https://totalservicespa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg"],
    creator: "@totalservicespa",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "verification_token_google",
    yandex: "verification_token_yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://totalservicespa.cl/#organization",
    "name": "Total Service SPA",
    "url": "https://totalservicespa.cl",
    "logo": "https://totalservicespa.cl/images/logo%20web.png",
    "image": "https://totalservicespa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
    "description": "Total Service SPA ofrece arriendo de maquinaria pesada para construcción, minería e infraestructura. Servicios industriales, mantención de plantas de tratamiento, traslado de residuos con resolución sanitaria, proyectos piping HDPE y aceros, obras civiles, transporte.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+56961582373",
      "contactType": "customer service",
      "availableLanguage": ["es", "Spanish"],
      "areaServed": "CL",
    },
    "sameAs": [],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://totalservicespa.cl/#localbusiness",
    "name": "Total Service SPA",
    "image": [
      "https://totalservicespa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
      "https://totalservicespa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.43.jpeg",
    ],
    "url": "https://totalservicespa.cl",
    "telephone": "+56961582373",
    "email": "TSERVICESSPA@GMAIL.COM",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "O'HIGGINS 480 OF 5",
      "addressLocality": "Quillota",
      "addressRegion": "Valparaíso",
      "addressCountry": "CL",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-32.8836",
      "longitude": "-71.2489",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "priceRange": "$$",
    "description": "Total Service SPA ofrece arriendo de maquinaria pesada para construcción, minería e infraestructura. Servicios industriales, mantención de plantas de tratamiento, traslado de residuos con resolución sanitaria, proyectos piping HDPE y aceros, obras civiles, transporte.",
    "areaServed": {
      "@type": "Country",
      "name": "Chile",
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
            "description": "Arriendo de retroexcavadora con operador y combustible incluido",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Total Service SPA",
            },
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arriendo de Excavadora",
            "description": "Arriendo de excavadora 20 ton con operador y combustible incluido",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Total Service SPA",
            },
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arriendo de Grúa Horquilla",
            "description": "Arriendo de grúa horquilla diesel 3 ton y gas-bencina 2.5 ton",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Total Service SPA",
            },
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mantención de Plantas de Tratamiento",
            "description": "Mantenimiento preventivo y correctivo de plantas de tratamiento de aguas",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Total Service SPA",
            },
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traslado de Residuos",
            "description": "Traslado de residuos con resolución sanitaria. Camión aspirador 8,000 kg capacidad",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Total Service SPA",
            },
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dragado de Plantas de Tratamiento",
            "description": "Servicio especializado en dragado y limpieza de plantas de tratamiento de aguas",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Total Service SPA",
            },
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://totalservicespa.cl",
      },
    ],
  };

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
