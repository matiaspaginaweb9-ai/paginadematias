import Image from "next/image";
import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.totalservicesspa.cl"),
  title: "Catálogo Maquinaria Pesada | Arriendo Retroexcavadoras y Excavadoras",
  description: "Catálogo completo de maquinaria pesada para arriendo en Chile. Retroexcavadoras, excavadoras, grúas horquilla, camiones aspiradores, camión ampliroll, rodillos, minicargadores y más. Contacto: +56 9 6158 2373",
  keywords: ["catálogo maquinaria pesada", "arriendo retroexcavadora", "arriendo excavadora", "grúa horquilla", "camión aspirador", "camión ampliroll", "rodillo tripulado", "minicargador", "dragado plantas tratamiento"],
  alternates: {
    canonical: "https://www.totalservicesspa.cl/catalogo",
  },
  openGraph: {
    title: "Catálogo de Maquinaria Pesada - Total Services SPA",
    description: "Catálogo completo de maquinaria pesada disponible para arriendo: retroexcavadoras, excavadoras, grúas horquilla, camiones aspiradores y más equipos",
    url: "https://www.totalservicesspa.cl/catalogo",
    siteName: "Total Services SPA",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
        width: 1200,
        height: 630,
        alt: "Catálogo de Maquinaria Pesada Total Services SPA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Maquinaria Pesada - Total Services SPA",
    description: "Catálogo completo de maquinaria pesada disponible para arriendo",
    images: ["https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg"],
  },
};

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const ContactBar = () => (
  <div className="bg-gray-800 text-white py-2.5 px-4 rounded-lg">
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <WhatsAppIcon />
        <span className="text-sm">+56 9 6158 2373</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        <span className="text-sm">TSERVICESSPA@GMAIL.COM</span>
      </div>
    </div>
  </div>
);

export default function Catalogo() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.totalservicesspa.cl/catalogo#itemlist",
    "name": "Catálogo de Maquinaria Pesada - Total Services SPA",
    "description": "Catálogo completo de maquinaria pesada disponible para arriendo",
    "url": "https://www.totalservicesspa.cl/catalogo",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Camión Aspirador",
          "description": "Arriendo de camión aspirador para traslado de residuos",
        },
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Camión Ampliroll",
          "description": "Arriendo de camión ampliroll para transporte de residuos no peligrosos",
        },
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Retro Excavadora",
          "description": "Arriendo de retro excavadoras con operador y combustible incluido",
        },
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Excavadora",
          "description": "Arriendo de excavadoras con operador, combustible y traslado incluido",
        },
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Grúa Horquilla Diesel",
          "description": "Arriendo de grúa horquilla diesel con traslado incluido",
        },
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "Grúa Horquilla Gas-Bencina",
          "description": "Arriendo de grúa horquilla gas-bencina con traslado incluido",
        },
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Product",
          "name": "Rodillo Tripulado",
          "description": "Arriendo de rodillo tripulado para compactación",
        },
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Product",
          "name": "Minicargador",
          "description": "Arriendo de minicargador con operador, combustible y traslado incluido",
        },
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Product",
          "name": "Dragado de Plantas de Tratamiento",
          "description": "Servicio especializado en dragado y limpieza de plantas de tratamiento",
        },
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Product",
          "name": "Mantención de Plantas de Tratamiento",
          "description": "Mantenimiento preventivo y correctivo de plantas de tratamiento",
        },
      },
    ],
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
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Catálogo",
        "item": "https://www.totalservicesspa.cl/catalogo",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-200">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-base font-semibold">Catálogo de Arriendo de Maquinaria Pesada - Total Services SPA</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <ContactBar />

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden">
                <video 
                  src="/images/WhatsApp Video 2026-01-15 at 15.09.39.mp4" 
                  controls
                  className="w-full h-full object-contain"
                >
                  Tu navegador no soporta el elemento video.
                </video>
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Dragado de Plantas de Tratamiento de Aguas</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Servicio especializado en dragado y limpieza de plantas de tratamiento de aguas. Soluciones completas para mantenimiento de plantas industriales.</p>
                  <p>Equipos especializados para trabajos en plantas de tratamiento. Maquinaria pesada adaptada para operaciones de dragado profesional.</p>
                  <p>Personal capacitado en operaciones de dragado. Operadores con experiencia certificada en plantas de tratamiento.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20dragado%20de%20plantas%20de%20tratamiento%20de%20aguas.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/Mantención de Plantas.png" 
                  alt="Mantención de plantas de tratamiento de aguas - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Mantención de Plantas de Tratamiento de Aguas</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Mantenimiento preventivo y correctivo de plantas de tratamiento de aguas. Servicios especializados para industrias y municipios.</p>
                  <p>Servicios de limpieza y desinfección profesional. Equipos especializados y productos certificados.</p>
                  <p>Inspección y diagnóstico completo de equipos. Evaluación técnica detallada de sistemas de tratamiento.</p>
                  <p>Reparación y reemplazo de componentes. Repuestos originales y técnicos especializados.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20mantenci%C3%B3n%20de%20plantas%20de%20tratamiento%20de%20aguas.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/camion aspirador.png" 
                  alt="Camión aspirador - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Camión Aspirador</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Arriendo de camión aspirador para traslado de residuos industriales. Servicio certificado con resolución sanitaria vigente.</p>
                  <p>Equipos modernos disponibles para industrias, plantas de tratamiento y proyectos de construcción.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20arriendo%20del%20cami%C3%B3n%20aspirador.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/camion%20ampliroll.jpeg" 
                  alt="Camión ampliroll - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Camión Ampliroll</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Arriendo de camión ampliroll para transporte de residuos no peligrosos. Contenedores intercambiables para escombros, residuos industriales y construcción.</p>
                  <p>Servicio con resolución sanitaria vigente. Disponible para Quillota, Valparaíso y todo Chile.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20arriendo%20del%20cami%C3%B3n%20ampliroll.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/retroescavadora.jpg" 
                  alt="Retro excavadoras - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Retro Excavadoras</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Arriendo de retro excavadoras incluye operador calificado y combustible. Equipos modernos en excelente estado para construcción y minería.</p>
                  <p>Incluye traslado en valor mensual. Servicio disponible en Quillota, Valparaíso y toda la región. Cotización personalizada según tus necesidades.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20arriendo%20de%20retro%20excavadora.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/excavadora.png" 
                  alt="Excavadora - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Excavadora</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Arriendo de excavadora incluye operador calificado, combustible y servicio de traslado en valor mensual. Ideal para obras de gran envergadura en construcción y minería.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20arriendo%20de%20excavadora.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/grudisiel.jpg" 
                  alt="Grúa horquilla Diesel - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Grúa Horquilla Diesel</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Arriendo de grúa horquilla diesel para manejo de carga en almacenes y construcción.</p>
                  <p>Incluye traslado en valor mensual.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20arriendo%20de%20gr%C3%BAa%20horquilla%20diesel.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/bencinagrua.jpg" 
                  alt="Grúa horquilla Gas-Bencina - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Grúa Horquilla Gas-Bencina</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Arriendo de grúa horquilla gas-bencina para manejo de carga en almacenes y construcción.</p>
                  <p>Sin operador sin combustible. Incluye traslado en valor mensual.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20arriendo%20de%20gr%C3%BAa%20horquilla%20gas-bencina.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/rodillo.jpeg" 
                  alt="Rodillo tripulado - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Rodillo Tripulado</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Arriendo de rodillo tripulado para compactación de suelos en obras civiles.</p>
                  <p>Incluye traslado en valor mensual. Sin operador sin combustible.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20arriendo%20del%20rodillo%20tripulado.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5">
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src="/images/minicargador.jpg" 
                  alt="Minicargador - Total Services SPA" 
                  fill
                  className="object-contain"
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">Minicargador</h2>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>Arriendo de minicargador incluye operador calificado, combustible y servicio de traslado en valor mensual. Ideal para espacios reducidos y trabajos de precisión.</p>
                </div>
              </div>
              <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20arriendo%20del%20minicargador.%20¿Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <ContactBar />
      </div>
      </div>
    </>
  );
}
