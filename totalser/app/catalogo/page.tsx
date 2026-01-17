import Image from "next/image";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Maquinaria Pesada",
  description: "Catálogo completo de maquinaria pesada disponible: camión aspirador, retro excavadoras, excavadoras, grúas horquillas. Contacto: +56 9 6158 2373",
  keywords: ["catálogo maquinaria pesada", "arriendo retroexcavadora", "arriendo excavadora 20 ton", "grúa horquilla diesel", "camión aspirador", "rodillo tripulado", "minicargador bobcat", "dragado plantas tratamiento"],
  alternates: {
    canonical: "https://totalservicespa.cl/catalogo",
  },
  openGraph: {
    title: "Catálogo de Maquinaria Pesada - Total Service SPA",
    description: "Catálogo completo de maquinaria pesada disponible para arriendo: retroexcavadoras, excavadoras, grúas horquilla, camiones aspiradores y más equipos",
    url: "https://totalservicespa.cl/catalogo",
    siteName: "Total Service SPA",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://totalservicespa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
        width: 1200,
        height: 630,
        alt: "Catálogo de Maquinaria Pesada Total Service SPA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Maquinaria Pesada - Total Service SPA",
    description: "Catálogo completo de maquinaria pesada disponible para arriendo",
    images: ["https://totalservicespa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg"],
  },
};

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const ContactBar = () => (
  <div className="bg-gray-800 text-white py-2.5 px-4">
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
    "name": "Catálogo de Maquinaria Pesada - Total Service SPA",
    "description": "Catálogo completo de maquinaria pesada disponible para arriendo",
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
          "name": "Retro Excavadoras",
          "description": "Arriendo de retro excavadoras con operador y combustible incluido",
        },
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Excavadoras",
          "description": "Arriendo de excavadoras con operador, combustible y traslado incluido",
        },
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Grúas Horquillas",
          "description": "Arriendo de grúas horquillas con traslado incluido",
        },
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Dragado de Plantas de Tratamiento",
          "description": "Servicio especializado en dragado y limpieza de plantas de tratamiento",
        },
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "Mantención de Plantas de Tratamiento",
          "description": "Mantenimiento preventivo y correctivo de plantas de tratamiento",
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
        "item": "https://totalservicespa.cl",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Catálogo",
        "item": "https://totalservicespa.cl/catalogo",
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
      <div className="min-h-screen bg-stone-200" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Cpath d='M0 0h60v60H0z' fill='%23f5f5f5'/%3E%3Cpath d='M0 0h60v60H0z' fill='%23e5e5e5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E")`}}>
      <div className="bg-gray-800 text-white py-2.5 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-base font-semibold">Catálogo de Arriendo de Maquinaria Pesada - Total Service SPA</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
        <ContactBar />

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-40 sm:h-48 md:h-52">
              <video 
                src="/images/WhatsApp Video 2026-01-15 at 15.09.39.mp4" 
                controls
                className="w-full h-full object-contain"
              >
                Tu navegador no soporta el elemento video.
              </video>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Dragado de Plantas de Tratamiento de Aguas</h2>
            <div className="space-y-1 text-gray-800 text-sm">
              <p>Servicio especializado en dragado y limpieza de plantas de tratamiento de aguas. Soluciones completas para mantenimiento de plantas industriales.</p>
              <p>Equipos especializados para trabajos en plantas de tratamiento. Maquinaria pesada adaptada para operaciones de dragado profesional.</p>
              <p>Personal capacitado en operaciones de dragado. Operadores con experiencia certificada en plantas de tratamiento.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-40 sm:h-48 md:h-52">
              <Image 
                src="/images/WhatsApp Image 2026-01-15 at 15.19.43.jpeg" 
                alt="Mantención de plantas de tratamiento de aguas - Total Service SPA" 
                fill
                className="object-contain"
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Mantención de Plantas de Tratamiento de Aguas</h2>
            <div className="space-y-1 text-gray-800 text-sm">
              <p>Mantenimiento preventivo y correctivo de plantas de tratamiento de aguas. Servicios especializados para industrias y municipios.</p>
              <p>Servicios de limpieza y desinfección profesional. Equipos especializados y productos certificados.</p>
              <p>Inspección y diagnóstico completo de equipos. Evaluación técnica detallada de sistemas de tratamiento.</p>
              <p>Reparación y reemplazo de componentes. Repuestos originales y técnicos especializados.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-40 sm:h-48 md:h-52">
              <Image 
                src="/images/WhatsApp Image 2026-01-15 at 15.19.44.jpeg" 
                alt="Camión aspirador - Total Service SPA" 
                fill
                className="object-contain"
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Camión Aspirador</h2>
            <div className="space-y-1 text-gray-800 text-sm">
              <p>Arriendo de camión aspirador para traslado de residuos industriales. Servicio certificado con resolución sanitaria vigente.</p>
              <p>Equipos modernos disponibles para industrias, plantas de tratamiento y proyectos de construcción.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-40 sm:h-48 md:h-52">
              <Image 
                src="/images/WhatsApp Image 2026-01-15 at 15.19.44.jpeg" 
                alt="Retro excavadoras - Total Service SPA" 
                fill
                className="object-contain"
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Retro Excavadoras</h2>
            <div className="space-y-1 text-gray-800 text-sm">
              <p>Arriendo de retro excavadoras incluye operador calificado y combustible. Equipos modernos en excelente estado para construcción y minería.</p>
              <p>Incluye traslado en valor mensual. Servicio disponible en Quillota, Valparaíso y toda la región. Cotización personalizada según tus necesidades.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-40 sm:h-48 md:h-52">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                alt="Excavadoras - Total Service SPA" 
                fill
                className="object-contain"
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Excavadoras</h2>
            <div className="space-y-1 text-gray-800 text-sm">
              <p>Arriendo de excavadoras incluye operador calificado, combustible y servicio de traslado en valor mensual. Ideal para obras de gran envergadura en construcción y minería.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-40 sm:h-48 md:h-52">
              <Image 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" 
                alt="Grúas horquillas - Total Service SPA" 
                fill
                className="object-contain"
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Grúas Horquillas</h2>
            <div className="space-y-1 text-gray-800 text-sm">
              <p>Arriendo de grúas horquillas para manejo de carga en almacenes y construcción. Incluye traslado en valor mensual. Equipos modernos y certificados.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-40 sm:h-48 md:h-52">
              <Image 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="Rodillo tripulado - Total Service SPA" 
                fill
                className="object-contain"
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Rodillo Tripulado</h2>
            <div className="space-y-1 text-gray-800 text-sm">
              <p>Arriendo de rodillo tripulado para compactación de suelos en obras civiles. Incluye traslado en valor mensual.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-40 sm:h-48 md:h-52">
              <Image 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="Minicargador - Total Service SPA" 
                fill
                className="object-contain"
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Minicargador</h2>
            <div className="space-y-1 text-gray-800 text-sm">
              <p>Arriendo de minicargador incluye operador calificado, combustible y servicio de traslado en valor mensual. Ideal para espacios reducidos y trabajos de precisión.</p>
            </div>
          </div>
        </div>

        <ContactBar />
      </div>
      </div>
    </>
  );
}
