import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Truck, Users, Award } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.totalservicesspa.cl"),
  title: "Sobre Nosotros | Total Services SPA - Maquinaria Pesada Chile",
  description: "Total Services SPA: Empresa líder en arriendo de maquinaria pesada desde 2017. Ubicados en Quillota, Región de Valparaíso. Especialistas en construcción, minería e infraestructura. Equipos modernos con operadores calificados. +56 9 6158 2373",
  keywords: ["Total Services SPA empresa", "maquinaria pesada Quillota", "arriendo maquinaria experiencia", "equipos modernos construcción", "operadores calificados", "servicios industriales Chile"],
  alternates: {
    canonical: "https://www.totalservicesspa.cl/acerca-de",
  },
  openGraph: {
    title: "Acerca de Total Services SPA - Nuestra Empresa",
    description: "Líderes en arriendo de maquinaria pesada con años de experiencia en construcción, minería e infraestructura. Equipos modernos y operadores calificados.",
    url: "https://www.totalservicesspa.cl/acerca-de",
    siteName: "Total Services SPA",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg",
        width: 1200,
        height: 630,
        alt: "Total Services SPA - Empresa líder en maquinaria pesada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acerca de Total Services SPA",
    description: "Líderes en arriendo de maquinaria pesada con años de experiencia",
    images: ["https://www.totalservicesspa.cl/images/WhatsApp%20Image%202026-01-15%20at%2015.19.44.jpeg"],
  },
};

export default function AcercaDe() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.totalservicesspa.cl/acerca-de#webpage",
    "url": "https://www.totalservicesspa.cl/acerca-de",
    "name": "Acerca de Total Services SPA",
    "description": "Conoce Total Services SPA: líderes en arriendo de maquinaria pesada con más de una década de experiencia",
    "inLanguage": "es-CL",
    "isPartOf": {
      "@id": "https://www.totalservicesspa.cl/#website",
    },
    "about": {
      "@id": "https://www.totalservicesspa.cl/#organization",
    },
    "breadcrumb": {
      "@id": "https://www.totalservicesspa.cl/acerca-de#breadcrumb",
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
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Acerca de",
        "item": "https://www.totalservicesspa.cl/acerca-de",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold px-4">
              Acerca de <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF5722] bg-clip-text text-transparent">Total Services SPA</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 px-4">
              Empresa especializada en terminación y acabado de edificios, servicios industriales y arriendo de maquinaria pesada. Desde 2017 en Quillota, Región de Valparaíso
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4">
                En TOTAL SERVICES SPA somos una empresa dedicada a servicios industriales y arriendo de maquinaria pesada.
                Iniciamos operaciones el 01 de Junio del 2017 y estamos legalmente constituidos como SOCIEDAD POR ACCIONES, dentro del régimen de sociedades mercantiles y comerciales del país.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4">
                Estamos comprometidos a acompañarte en cada paso, aportando valor real a tus proyectos y ayudándote a alcanzar tus objetivos con soluciones efectivas y personalizadas. Contamos con una amplia flota de equipos modernos y en excelente estado, incluyendo retroexcavadoras , excavadoras , grúas horquilla diesel , rodillos compactadores , minicargadores y camiones aspiradores y traslados de residuos con resolución sanitaria.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4">
                Nuestro equipo de atención estará encantado de resolver tus dudas, ofrecerte información detallada y ayudarte a tomar la mejor decisión según tus necesidades. Ofrecemos servicios especializados como mantención de plantas de tratamiento de aguas, traslado de residuos con resolución sanitaria, proyectos de piping HDPE y aceros, obras civiles y transporte industrial. Puedes contactarnos para descubrir cómo podemos contribuir al crecimiento de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">Valores de Total Services SPA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-orange-100 rounded-full">
                      <Truck className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Equipos Modernos</CardTitle>
                  <CardDescription className="text-base">
                    Flota actualizada con las últimas tecnologías
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-orange-100 rounded-full">
                      <Users className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Personal Calificado</CardTitle>
                  <CardDescription className="text-base">
                    Operadores con años de experiencia certificada
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-orange-100 rounded-full">
                      <Award className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Calidad Garantizada</CardTitle>
                  <CardDescription className="text-base">
                    Estándares internacionales de seguridad
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#FF6B35]">
              <CardHeader className="text-center">
                  <CardTitle className="text-2xl sm:text-3xl mb-4">Nuestra Misión</CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Acompañarte en cada paso, aportando valor real a tus proyectos y ayudándote a alcanzar tus objetivos con soluciones efectivas y personalizadas. Estamos comprometidos con la excelencia en terminación y acabado de edificios, servicios industriales y arriendo de maquinaria pesada, ofreciendo equipos confiables y modernos, personal capacitado y certificado, y un servicio excepcional que supere las expectativas en cada proyecto.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-500 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <CardTitle className="text-white">WhatsApp</CardTitle>
                  </div>
                  <CardContent>
                    <a 
                      href="https://wa.me/56961582373" 
                      className="text-[#FF6B35] hover:text-[#FF5722] text-lg font-semibold"
                    >
                      +56 9 6158 2373
                    </a>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-500 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Email</CardTitle>
                  </div>
                  <CardContent>
                    <a 
                      href="mailto:TSERVICESSPA@GMAIL.COM" 
                      className="text-[#FF6B35] hover:text-[#FF5722] text-lg font-semibold"
                    >
                      TSERVICESSPA@GMAIL.COM
                    </a>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF5722] text-white text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Link href="/catalogo">Ver Nuestro Catálogo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
