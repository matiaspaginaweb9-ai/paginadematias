import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.totalservicesspa.cl"),
  title: "Servicios | Total Services SPA - Servicios Industriales Chile",
  description: "Servicios industriales de Total Services SPA: mantención plantas de tratamiento, traslado de residuos, piping HDPE, obras civiles, arriendo maquinaria pesada, transporte industrial e ingeniería eléctrica. Minería y construcción.",
  keywords: ["servicios industriales Chile", "mantención plantas tratamiento", "traslado residuos", "piping HDPE", "obras civiles", "arriendo maquinaria pesada", "transporte industrial", "ingeniería eléctrica", "Total Services SPA"],
  alternates: {
    canonical: "https://www.totalservicesspa.cl/servicios",
  },
  openGraph: {
    title: "Servicios - Total Services SPA | Servicios Industriales",
    description: "Amplia gama de servicios industriales para minería y construcción. Calidad, seguridad y eficiencia operacional.",
    url: "https://www.totalservicesspa.cl/servicios",
    siteName: "Total Services SPA",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios - Total Services SPA",
    description: "Servicios industriales para minería y construcción en Chile",
  },
};

export default function Servicios() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.totalservicesspa.cl" },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://www.totalservicesspa.cl/servicios" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20 md:py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2 sm:px-4">
                Nuestros <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF5722] bg-clip-text text-transparent">Servicios</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 px-2 sm:px-4 max-w-2xl mx-auto">
                Soluciones industriales para minería y construcción. Calidad, seguridad y eficiencia en cada proyecto.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-10 sm:py-16 md:py-24 overflow-hidden bg-[#fafafa]">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fafafa] to-orange-50/30" aria-hidden />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent" aria-hidden />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-14 md:mb-20">
                <span className="inline-flex items-center text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#FF6B35] mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 rounded-full bg-white/90 shadow-sm border border-[#FF6B35]/10">
                  Lo que hacemos
                </span>
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 text-gray-900 tracking-tight px-2">
                  Todos nuestros servicios
                </h2>
                <div className="w-12 sm:w-16 h-1 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF5722] mx-auto mb-4 sm:mb-6" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-2 sm:px-4 max-w-3xl mx-auto leading-relaxed">
                  Total Services SPA ofrece una amplia gama de servicios industriales para la minería de Chile de acuerdo a los requerimientos y necesidades de cada uno de sus clientes. Nuestra reconocida calidad se hace presente en todos nuestros procesos, servicios y contratos, los que desarrollamos y ejecutamos en línea con los más altos estándares de seguridad y sustentabilidad, eficiencia operacional e innovación tecnológica.
                </p>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <article className="flex flex-col md:flex-row md:items-stretch rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black">
                  <div className="relative w-full md:w-[48%] h-52 sm:h-60 md:h-auto md:min-h-[360px] shrink-0">
                    <Image src="/images/Mantención de Plantas.png" alt="Mantención de plantas de tratamiento de aguas - Total Services SPA" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 48vw" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:from-transparent md:via-transparent md:to-black/20" />
                  </div>
                  <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 md:pl-8 md:pr-10 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF6B35] mb-3 md:mb-4">Mantención de Plantas de Tratamiento de Aguas</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                      Realizamos mantención preventiva y correctiva de plantas de tratamiento de aguas residuales e industriales. Incluye limpieza de sedimentadores, revisión de bombas y equipos, dragado de lodos, desinfección y monitoreo de parámetros. Contamos con personal certificado y equipos especializados para garantizar el cumplimiento normativo y la operación continua de sus instalaciones.
                    </p>
                    <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20mantenci%C3%B3n%20de%20plantas%20de%20tratamiento%20de%20aguas." className="self-start px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">Consultar</a>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row-reverse md:items-stretch rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black">
                  <div className="relative w-full md:w-[48%] h-52 sm:h-60 md:h-auto md:min-h-[360px] shrink-0">
                    <Image src="/images/WhatsApp Image 2026-01-15 at 16.02.19.jpeg" alt="Traslado de residuos con resolución sanitaria - Total Services SPA" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 48vw" />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent md:from-transparent md:to-black/20" />
                  </div>
                  <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 md:pr-8 md:pl-10 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF6B35] mb-3 md:mb-4">Traslado de Residuos con Resolución Sanitaria</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                      Ofrecemos transporte y disposición de residuos con resolución sanitaria vigente. Contamos con camión aspirador y flota autorizada para el traslado de residuos líquidos, lodos y residuos industriales. Todas las operaciones se realizan con trazabilidad completa y certificaciones al día para la región de Valparaíso y zonas aledañas.
                    </p>
                    <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20traslado%20de%20residuos%20con%20resoluci%C3%B3n%20sanitaria." className="self-start px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">Consultar</a>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row md:items-stretch rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black">
                  <div className="relative w-full md:w-[48%] h-52 sm:h-60 md:h-auto md:min-h-[360px] shrink-0">
                    <Image src="/images/hippipe.png" alt="Proyectos piping HDPE y aceros - Total Services SPA" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 48vw" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:from-transparent md:via-transparent md:to-black/20" />
                  </div>
                  <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 md:pl-8 md:pr-10 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF6B35] mb-3 md:mb-4">Proyectos Piping HDPE y Aceros</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                      Ejecutamos proyectos integrales de tuberías en polietileno de alta densidad (HDPE) y acero: diseño, suministro, instalación por termofusión o soldadura, y pruebas de presión. Atendemos redes de agua potable, aguas servidas, minería e industria. Incluye obras de bypass, rehabilitación y nuevas líneas con estándares de calidad y plazos acordados.
                    </p>
                    <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20proyectos%20de%20piping%20HDPE%20y%20aceros." className="self-start px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">Consultar</a>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row-reverse md:items-stretch rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black">
                  <div className="relative w-full md:w-[48%] h-52 sm:h-60 md:h-auto md:min-h-[360px] shrink-0">
                    <Image src="/images/WhatsApp Image 2026-01-15 at 16.03.38.jpeg" alt="Obras civiles e infraestructura - Total Services SPA" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 48vw" />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent md:from-transparent md:to-black/20" />
                  </div>
                  <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 md:pr-8 md:pl-10 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF6B35] mb-3 md:mb-4">Obras Civiles e Infraestructura</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                      Desarrollamos obras civiles y de infraestructura para construcción y minería: movimientos de tierra, excavaciones, compactación, instalación de redes y obras de soporte. Disponemos de maquinaria pesada y equipos de compactación para proyectos de diversa envergadura, con protocolos de seguridad y cumplimiento de plazos.
                    </p>
                    <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20obras%20civiles%20e%20infraestructura." className="self-start px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">Consultar</a>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row md:items-stretch rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black">
                  <div className="relative w-full md:w-[48%] h-52 sm:h-60 md:h-auto md:min-h-[360px] shrink-0">
                    <Image src="/images/WhatsApp Image 2026-01-15 at 16.04.17.jpeg" alt="Arriendo de maquinaria pesada - Total Services SPA" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 48vw" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:from-transparent md:via-transparent md:to-black/20" />
                  </div>
                  <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 md:pl-8 md:pr-10 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF6B35] mb-3 md:mb-4">Arriendo de Maquinaria Pesada</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                      Ponemos a disposición una amplia flota de maquinaria pesada para arriendo: retroexcavadoras, excavadoras 20 ton, grúas horquilla diesel y a gas, rodillos tripulados, minicargadores y camiones. Incluimos operador calificado, combustible y traslado en modalidad mensual. Ideal para construcción, minería e infraestructura en Quillota, Valparaíso y todo Chile.
                    </p>
                    <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20arrendar%20maquinaria%20pesada." className="self-start px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">Consultar</a>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row-reverse md:items-stretch rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black">
                  <div className="relative w-full md:w-[48%] h-52 sm:h-60 md:h-auto md:min-h-[360px] shrink-0">
                    <Image src="/images/transporte.png" alt="Transporte industrial - Total Services SPA" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 48vw" />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent md:from-transparent md:to-black/20" />
                  </div>
                  <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 md:pr-8 md:pl-10 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF6B35] mb-3 md:mb-4">Transporte Industrial</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                      Brindamos transporte industrial especializado para la minería, construcción e industria: movilización de equipos, materiales y carga especial. Coordinamos rutas, permisos y plazos según las necesidades del proyecto. Flota propia y logística integrada para asegurar entregas en tiempo y forma.
                    </p>
                    <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20transporte%20industrial." className="self-start px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">Consultar</a>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row md:items-stretch rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-black">
                  <div className="relative w-full md:w-[48%] h-52 sm:h-60 md:h-auto md:min-h-[360px] shrink-0">
                    <Image src="/images/WhatsApp Image 2026-01-15 at 16.03.38.jpeg" alt="Ingeniería eléctrica - Total Services SPA" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 48vw" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:from-transparent md:via-transparent md:to-black/20" />
                  </div>
                  <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 md:pl-8 md:pr-10 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF6B35] mb-3 md:mb-4">Ingeniería Eléctrica</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                      Ofrecemos diseño, instalación y mantenimiento de sistemas eléctricos industriales: tableros de fuerza y control, redes de distribución, iluminación y automatización. Desarrollamos proyectos de electrificación para faenas mineras, plantas industriales y obras de construcción, con normativa vigente y estándares de seguridad.
                    </p>
                    <a href="https://wa.me/56961582373?text=Hola%2C%20me%20interesa%20ingenier%C3%ADa%20el%C3%A9ctrica%20industrial." className="self-start px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors">Consultar</a>
                  </div>
                </article>
              </div>
              <div className="mt-10 sm:mt-12 flex justify-center">
                <div className="h-1 w-24 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 sm:px-4">¿Necesitas una cotización?</h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 px-2 sm:px-4">Contáctanos por WhatsApp o email. Servicio en Quillota y toda la región de Valparaíso.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4">
                <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF5722] text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 w-full sm:w-auto">
                  <a href="https://wa.me/56961582373">Contactar por WhatsApp</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 w-full sm:w-auto">
                  <Link href="/catalogo">Ver Catálogo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
