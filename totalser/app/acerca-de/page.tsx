import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.totalservicesspa.cl"),
  title: "Sobre Nosotros | Total Services SPA - Maquinaria Pesada Chile",
  description: "Total Services SPA: Empresa líder en arriendo de maquinaria pesada desde 2017. Ubicados en Quillota, Región de Valparaíso. Especialistas en construcción, minería e infraestructura.",
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
    "isPartOf": { "@id": "https://www.totalservicesspa.cl/#website" },
    "about": { "@id": "https://www.totalservicesspa.cl/#organization" },
    "breadcrumb": { "@id": "https://www.totalservicesspa.cl/acerca-de#breadcrumb" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.totalservicesspa.cl" },
      { "@type": "ListItem", "position": 2, "name": "Acerca de", "item": "https://www.totalservicesspa.cl/acerca-de" },
    ],
  };

  const links = [
    { href: "/acerca-de/historia", label: "Historia" },
    { href: "/acerca-de/mision-vision", label: "Misión y Visión" },
    { href: "/acerca-de/riohs", label: "RIOHS" },
    { href: "/acerca-de/politica-integrada", label: "Política Integrada" },
    { href: "/acerca-de/politica-rse", label: "Política RSE" },
    { href: "/acerca-de/politica-inclusion", label: "Política Inclusión" },
    { href: "/acerca-de/politica-alcohol-drogas", label: "Política Alcohol y Drogas" },
    { href: "/acerca-de/politica-prevencion-delitos", label: "Política Prevención Delitos" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-gray-300 mb-4">
                <Building2 className="w-4 h-4 text-[#FF6B35]" />
                <span>Nuestra empresa</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold px-4 tracking-tight">
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF5722] bg-clip-text text-transparent">Total Services SPA</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-300 px-4 max-w-2xl mx-auto leading-relaxed">
                Especialistas en terminación y acabado de edificios, servicios industriales y arriendo de maquinaria pesada. Desde 2017 en Quillota, Región de Valparaíso.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 text-center">
                Conoce nuestra historia, misión, visión y políticas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 sm:px-5 shadow-sm transition-all duration-200 hover:border-[#FF6B35]/50 hover:shadow-md hover:-translate-y-0.5 min-h-[48px]"
                  >
                    <span className="font-medium text-gray-800 group-hover:text-[#FF6B35] transition-colors">{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0iI0ZGNkIzNSIgb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiKSIvPjwvc3ZnPg==')]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4">Contacto</h2>
              <p className="text-center text-gray-400 mb-12">Estamos aquí para ayudarte con tu proyecto</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-green-500/20 text-green-400 group-hover:scale-105 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <CardTitle className="text-white text-lg">WhatsApp</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="https://wa.me/56961582373" className="text-[#FF6B35] hover:text-[#FF5722] text-lg font-semibold transition-colors">
                      +56 9 6158 2373
                    </a>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300 group-hover:scale-105 transition-transform">
                        <Mail className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-white text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:TSERVICESSPA@GMAIL.COM" className="text-[#FF6B35] hover:text-[#FF5722] text-lg font-semibold transition-colors break-all">
                      TSERVICESSPA@GMAIL.COM
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF5722] text-white text-sm sm:text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <Link href="/catalogo">Ver catálogo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
