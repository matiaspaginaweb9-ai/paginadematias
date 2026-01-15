import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Truck, Users, Award, Target } from "lucide-react";
import Link from "next/link";

export default function AcercaDe() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold px-4">
              Acerca de <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Total Service</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 px-4">
              Líderes en arriendo de maquinaria pesada con más de una década de experiencia
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4">
                Total Service es una empresa especializada en el arriendo de maquinaria pesada para proyectos de construcción, minería e infraestructura. Con años de experiencia en el mercado, nos hemos consolidado como una de las opciones más confiables para empresas que buscan equipos de alta calidad.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4">
                Contamos con una amplia flota de equipos modernos y en excelente estado, incluyendo retroexcavadoras, excavadoras, grúas horquilla, rodillos compactadores, minicargadores y camiones aspiradores. Todos nuestros equipos son sometidos a rigurosos controles de mantenimiento para garantizar su óptimo funcionamiento.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4">
                Nuestro compromiso es brindar soluciones eficientes y confiables, con operadores calificados y servicio de traslado incluido en nuestros planes mensuales. Trabajamos con empresas de todos los tamaños, desde proyectos pequeños hasta grandes obras, siempre con los más altos estándares de calidad y seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-yellow-100 rounded-full">
                      <Truck className="w-8 h-8 text-yellow-600" />
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
                    <div className="p-4 bg-yellow-100 rounded-full">
                      <Users className="w-8 h-8 text-yellow-600" />
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
                    <div className="p-4 bg-yellow-100 rounded-full">
                      <Award className="w-8 h-8 text-yellow-600" />
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
            <Card className="border-2 border-yellow-500">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl mb-4">Nuestra Misión</CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Proporcionar soluciones de maquinaria pesada que impulsen el éxito de nuestros clientes, 
                  ofreciendo equipos confiables, personal capacitado y un servicio excepcional que supere 
                  las expectativas en cada proyecto.
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
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">WhatsApp</CardTitle>
                  </div>
                  <CardContent>
                    <a 
                      href="https://wa.me/56961582373" 
                      className="text-yellow-400 hover:text-yellow-300 text-lg font-semibold"
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
                      className="text-yellow-400 hover:text-yellow-300 text-lg font-semibold"
                    >
                      TSERVICESSPA@GMAIL.COM
                    </a>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                <Link href="/catalogo">Ver Nuestro Catálogo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
