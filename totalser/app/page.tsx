import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Truck, Wrench, Shield, Clock, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Total Service SPA - Inicio | Arriendo de Maquinaria Pesada en Chile",
  description: "Total Service SPA ofrece servicios industriales: arriendo de maquinaria pesada, mantención de plantas de tratamiento, traslado de residuos, proyectos piping HDPE, obras civiles y transporte. Contacto: +56 9 6158 2373",
  openGraph: {
    title: "Total Service SPA - Arriendo de Maquinaria Pesada",
    description: "Servicios industriales completos: maquinaria pesada, plantas de tratamiento, traslado de residuos y más",
    images: ["/images/WhatsApp Image 2026-01-15 at 15.19.44.jpeg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight px-4">
              Maquinaria Pesada
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                de Alta Calidad
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
              Soluciones confiables para construcción, minería e infraestructura. 
              Equipos modernos con operadores calificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Link href="/catalogo" className="flex items-center justify-center">
                  Ver Catálogo
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Link href="/acerca-de">Conocer Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardHeader>
                <Truck className="w-12 h-12 text-yellow-500 mb-4" />
                <CardTitle className="text-2xl">Amplia Flota</CardTitle>
                <CardDescription className="text-base">
                  Retroexcavadoras, excavadoras, grúas horquilla y más equipos en excelente estado
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardHeader>
                <Wrench className="w-12 h-12 text-yellow-500 mb-4" />
                <CardTitle className="text-2xl">Operadores Calificados</CardTitle>
                <CardDescription className="text-base">
                  Personal especializado con años de experiencia en maquinaria pesada
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-yellow-500 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-yellow-500 mb-4" />
                <CardTitle className="text-2xl">Seguridad Garantizada</CardTitle>
                <CardDescription className="text-base">
                  Cumplimos con los más altos estándares de seguridad y calidad
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">Servicios Industriales</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">Soluciones completas para tus proyectos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.01.47.jpeg" 
                    alt="Mantención plantas de tratamientos" 
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Mantención Plantas de Tratamientos</CardTitle>
                  <CardDescription className="text-sm">
                    Servicios especializados de mantenimiento para plantas de tratamiento de aguas
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.02.19.jpeg" 
                    alt="Traslado de residuos con resolución sanitaria" 
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Traslado de Residuos con Resolución Sanitaria</CardTitle>
                  <CardDescription className="text-sm">
                    Transporte seguro y certificado de residuos con todas las autorizaciones
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.02.56.jpeg" 
                    alt="Proyectos piping Hdpe y aceros" 
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Proyectos Piping HDPE y Aceros</CardTitle>
                  <CardDescription className="text-sm">
                    Instalación y mantenimiento de sistemas de tuberías en HDPE y acero
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.03.38.jpeg" 
                    alt="Obras civiles" 
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Obras Civiles</CardTitle>
                  <CardDescription className="text-sm">
                    Construcción y desarrollo de proyectos de infraestructura civil
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.04.17.jpeg" 
                    alt="Arriendo de maquinaria" 
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Arriendo de Maquinaria</CardTitle>
                  <CardDescription className="text-sm">
                    Amplia flota de maquinaria pesada disponible para arriendo
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image 
                    src="/images/WhatsApp Image 2026-01-15 at 16.05.57.jpeg" 
                    alt="Transporte" 
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Transporte</CardTitle>
                  <CardDescription className="text-sm">
                    Servicios de transporte especializado para tus necesidades
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
              Contáctanos y obtén una cotización personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <a href="https://wa.me/56961582373">
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Link href="/catalogo">Ver Catálogo Completo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
