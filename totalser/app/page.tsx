import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Truck, Wrench, Shield, Clock, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.totalservicesspa.cl"),
  title: "Arriendo Maquinaria Pesada Chile | Retroexcavadoras y Excavadoras",
  description: "Arriendo de maquinaria pesada en Chile con operador incluido. Retroexcavadoras, excavadoras 20 ton, grúas horquilla, camiones aspiradores 8,000 kg. Servicios en Quillota, Valparaíso y todo Chile. Cotiza ahora: +56 9 6158 2373",
  keywords: ["arriendo maquinaria pesada Chile", "servicios industriales", "retroexcavadoras arriendo", "excavadoras", "mantención plantas tratamiento", "traslado residuos resolución sanitaria", "piping HDPE aceros", "obras civiles", "transporte industrial"],
  alternates: {
    canonical: "https://www.totalservicesspa.cl/",
  },
  openGraph: {
    title: "Total Services SPA - Inicio | Arriendo de Maquinaria Pesada",
    description: "Servicios industriales completos: maquinaria pesada, plantas de tratamiento, traslado de residuos y más. Equipos modernos con operadores calificados.",
    url: "https://www.totalservicesspa.cl",
    siteName: "Total Services SPA",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
        width: 1200,
        height: 630,
        alt: "Total Services SPA - Servicios Industriales de Maquinaria Pesada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Services SPA - Arriendo de Maquinaria Pesada",
    description: "Servicios industriales completos: maquinaria pesada, plantas de tratamiento, traslado de residuos y más",
    images: ["https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg"],
  },
};

export default function Home() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.totalservicesspa.cl/#webpage",
    "url": "https://www.totalservicesspa.cl",
    "name": "Total Services SPA - Arriendo de Maquinaria Pesada",
    "description": "Total Services SPA ofrece servicios industriales: arriendo de maquinaria pesada, mantención de plantas de tratamiento, traslado de residuos, proyectos piping HDPE, obras civiles y transporte.",
    "inLanguage": "es-CL",
    "isPartOf": {
      "@id": "https://www.totalservicesspa.cl/#website",
    },
    "about": {
      "@id": "https://www.totalservicesspa.cl/#organization",
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
    },
    "breadcrumb": {
      "@id": "https://www.totalservicesspa.cl/#breadcrumb",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.totalservicesspa.cl/#website",
    "url": "https://www.totalservicesspa.cl",
    "name": "Total Services SPA - Arriendo de Maquinaria Pesada en Chile",
    "description": "Arriendo de maquinaria pesada para construcción, minería e infraestructura. Retroexcavadoras, excavadoras 20 ton, grúas horquilla, camiones aspiradores. Operadores calificados, servicio en Quillota, Valparaíso y todo Chile",
    "publisher": {
      "@id": "https://www.totalservicesspa.cl/#organization",
    },
    "inLanguage": "es-CL",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.totalservicesspa.cl/catalogo?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta arrendar una retroexcavadora en Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo del arriendo de retroexcavadora incluye operador calificado y combustible. Los precios varían según el tiempo de arriendo (mensual o diario). Contacta con nosotros por WhatsApp al +56 9 6158 2373 para una cotización personalizada según tus necesidades."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen arriendo de excavadora con operador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Total Services SPA ofrece arriendo de excavadora con operador calificado, combustible y servicio de traslado incluido en el valor mensual. Nuestros operadores tienen años de experiencia en construcción y minería."
        }
      },
      {
        "@type": "Question",
        "name": "¿Tienen grúas horquilla disponibles para arriendo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos grúas horquilla para arriendo. Todas incluyen traslado en el valor mensual. Consulta disponibilidad por WhatsApp al +56 9 6158 2373."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen servicio de traslado de residuos con resolución sanitaria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Total Services SPA ofrece traslado de residuos con resolución sanitaria vigente. Contamos con camión aspirador. Certificaciones y autorizaciones al día para servicio en toda la región de Valparaíso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde están ubicados? ¿Atienden en Quillota?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Estamos ubicados en O'Higgins 480, Dpto. Oficina 5, Quillota, Región de Valparaíso. Atendemos proyectos en Quillota y toda la región, además de proyectos a nivel nacional. Contacta con nosotros al +56 9 6158 2373."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué servicios de mantención ofrecen para plantas de tratamiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos mantención preventiva y correctiva de plantas de tratamiento de aguas, dragado especializado, limpieza y desinfección. Personal capacitado y equipos especializados para trabajos en plantas de tratamiento."
        }
      }
    ]
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.totalservicesspa.cl/#localbusiness",
    "name": "Total Services SPA",
    "url": "https://www.totalservicesspa.cl",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image 
            src="/images/Mantención de Plantas.png" 
            alt="Servicios industriales Total Services SPA" 
            fill
            className="object-cover opacity-30"
            priority
            fetchPriority="high"
            unoptimized
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight px-4">
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF5722] bg-clip-text text-transparent">
                Arriendo de Maquinaria Pesada en Chile
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
              Total Services SPA: Líderes en arriendo de maquinaria pesada para construcción, minería e infraestructura. Retroexcavadoras, excavadoras, grúas horquilla, camiones aspiradores, rodillos y más equipos modernos con operadores calificados. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF5722] text-white text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Link href="/catalogo" className="flex items-center justify-center">
                  Ver Catálogo
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Link href="/acerca-de">Conocer Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">Nuestros Servicios</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">Soluciones completas para construcción, minería e infraestructura. Equipos modernos con operadores calificados y servicio de traslado incluido.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/Mantención de Plantas.png" 
                    alt="Mantención de plantas de tratamiento de aguas - Total Services SPA" 
                    fill
                    className="object-cover"
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Mantención de Plantas de Tratamiento de Aguas</CardTitle>
                  <CardDescription className="text-sm">
                    Servicios especializados de mantenimiento preventivo y correctivo para plantas de tratamiento de aguas. Personal capacitado y equipos especializados.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.02.19.jpeg" 
                    alt="Traslado de residuos con resolución sanitaria - Total Services SPA" 
                    fill
                    className="object-cover"
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Traslado de Residuos con Resolución Sanitaria</CardTitle>
                  <CardDescription className="text-sm">
                    Transporte seguro y certificado de residuos con resolución sanitaria vigente. Camión aspirador de capacidad. Certificaciones al día.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.02.56.jpeg" 
                    alt="Proyectos piping HDPE y aceros - Total Services SPA" 
                    fill
                    className="object-cover"
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Proyectos Piping HDPE y Aceros</CardTitle>
                  <CardDescription className="text-sm">
                    Instalación y mantenimiento profesional de sistemas de tuberías en HDPE y acero. Proyectos completos de piping industrial.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.03.38.jpeg" 
                    alt="Obras civiles e infraestructura - Total Services SPA" 
                    fill
                    className="object-cover"
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Obras Civiles e Infraestructura</CardTitle>
                  <CardDescription className="text-sm">
                    Construcción y desarrollo de proyectos de infraestructura civil. Maquinaria pesada para obras de gran envergadura en construcción y minería.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.04.17.jpeg" 
                    alt="Arriendo de maquinaria pesada - Retroexcavadoras y excavadoras" 
                    fill
                    className="object-cover"
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Arriendo de Maquinaria Pesada</CardTitle>
                  <CardDescription className="text-sm">
                    Amplia flota de maquinaria pesada disponible para arriendo: retroexcavadoras, excavadoras, grúas horquilla, rodillos, minicargadores. Con operadores calificados.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.05.57.jpeg" 
                    alt="Transporte industrial y logística - Total Services SPA" 
                    fill
                    className="object-cover"
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Transporte Industrial</CardTitle>
                  <CardDescription className="text-sm">
                    Servicios de transporte especializado para construcción, minería e industria. Logística completa para tus proyectos.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold px-4">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 px-4">
              Contáctanos por WhatsApp o email y obtén una cotización personalizada para arriendo de maquinaria pesada. Servicio disponible en Quillota y toda la región de Valparaíso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF5722] text-white text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <a href="https://wa.me/56961582373">
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Link href="/catalogo">Ver Catálogo Completo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
