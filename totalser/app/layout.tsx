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
    default: "Arriendo Maquinaria Pesada Chile | Total Services SPA",
    template: "%s | Total Services SPA",
  },
  description: "Arriendo de maquinaria pesada en Chile con operador. Retroexcavadoras, excavadoras 20 ton, grúas horquilla, camiones aspiradores. Servicios industriales, mantención plantas tratamiento, traslado residuos, piping HDPE. Quillota, Valparaíso. +56 9 6158 2373",
  keywords: ["arriendo maquinaria pesada", "arriendo maquinaria pesada Chile", "retroexcavadoras Chile", "retroexcavadoras arriendo", "excavadoras arriendo", "excavadora 20 ton", "grúas horquilla", "grúa horquilla diesel", "grúa horquilla gas", "maquinaria construcción", "maquinaria minería", "plantas tratamiento aguas", "mantención plantas tratamiento", "traslado residuos", "traslado residuos resolución sanitaria", "camión aspirador", "piping HDPE", "piping aceros", "obras civiles", "transporte industrial", "Total Services SPA", "arriendo equipos construcción", "maquinaria pesada Quillota", "maquinaria pesada Valparaíso", "servicios industriales Chile", "rodillo tripulado", "minicargador bobcat", "dragado plantas tratamiento"],
  authors: [{ name: "Total Services SPA", url: "https://www.totalservicesspa.cl" }],
  creator: "Total Services SPA",
  publisher: "Total Services SPA",
  applicationName: "Total Services SPA",
  category: "Maquinaria Pesada",
  classification: "Servicios Industriales",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.totalservicesspa.cl"),
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "https://www.totalservicesspa.cl",
      "es": "https://www.totalservicesspa.cl",
    },
  },
  openGraph: {
    title: "Total Services SPA - Arriendo de Maquinaria Pesada | Construcción y Minería",
    description: "Arriendo de maquinaria pesada para construcción, minería e infraestructura. Retroexcavadoras, excavadoras, grúas horquilla y más equipos en excelente estado. Operadores calificados, servicio de traslado incluido.",
    url: "https://www.totalservicesspa.cl",
    siteName: "Total Services SPA",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
        width: 1200,
        height: 630,
        alt: "Total Services SPA - Maquinaria Pesada para Construcción y Minería",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Services SPA - Arriendo de Maquinaria Pesada",
    description: "Arriendo de maquinaria pesada para construcción, minería e infraestructura. Equipos modernos con operadores calificados. Contacto: +56 9 6158 2373",
    images: ["https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg"],
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
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
  verification: {
    google: "verification_token_google",
    yandex: "verification_token_yandex",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Total Services SPA",
    "theme-color": "#FF6B35",
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
    "@id": "https://www.totalservicesspa.cl/#organization",
    "name": "Total Services SPA",
    "url": "https://www.totalservicesspa.cl",
    "logo": "https://www.totalservicesspa.cl/images/logo%20web.png",
    "image": "https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
    "description": "Total Services SPA es una empresa especializada en terminación y acabado de edificios, servicios industriales y arriendo de maquinaria pesada. Iniciamos operaciones en 2017. Ofrecemos retroexcavadoras, excavadoras 20 ton, grúas horquilla, camiones aspiradores, rodillos y minicargadores. Servicios industriales, mantención de plantas de tratamiento, traslado de residuos con resolución sanitaria, proyectos piping HDPE y aceros, obras civiles, transporte. Ubicados en Quillota, Región de Valparaíso.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+56961582373",
        "contactType": "customer service",
        "availableLanguage": ["es", "Spanish"],
        "areaServed": "CL",
      },
      {
        "@type": "ContactPoint",
        "email": "TSERVICESSPA@GMAIL.COM",
        "contactType": "customer service",
        "availableLanguage": ["es", "Spanish"],
        "areaServed": "CL",
      },
    ],
    "sameAs": [],
    "foundingDate": "2017-06-01",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "O'Higgins 480, Dpto. Oficina 5",
      "addressLocality": "Quillota",
      "addressRegion": "Valparaíso",
      "addressCountry": "CL",
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Chile",
      },
      {
        "@type": "State",
        "name": "Valparaíso",
      },
      {
        "@type": "City",
        "name": "Quillota",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.totalservicesspa.cl/#localbusiness",
    "name": "Total Services SPA",
    "image": [
      "https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
      "https://www.totalservicesspa.cl/images/Mantenci%C3%B3n%20de%20Plantas.png",
    ],
    "url": "https://www.totalservicesspa.cl",
    "telephone": "+56961582373",
    "email": "TSERVICESSPA@GMAIL.COM",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "O'Higgins 480, Dpto. Oficina 5",
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
    "description": "Total Services SPA es una empresa especializada en terminación y acabado de edificios, servicios industriales y arriendo de maquinaria pesada. Iniciamos operaciones en 2017. Ofrecemos servicios industriales, mantención de plantas de tratamiento, traslado de residuos con resolución sanitaria, proyectos piping HDPE y aceros, obras civiles, transporte y arriendo de maquinaria pesada.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Chile",
      },
      {
        "@type": "State",
        "name": "Valparaíso",
      },
      {
        "@type": "City",
        "name": "Quillota",
      },
    ],
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
              "name": "Total Services SPA",
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
              "name": "Total Services SPA",
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
              "name": "Total Services SPA",
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
              "name": "Total Services SPA",
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
              "name": "Total Services SPA",
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
              "name": "Total Services SPA",
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
        "item": "https://www.totalservicesspa.cl",
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#FF6B35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Total Services SPA" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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
