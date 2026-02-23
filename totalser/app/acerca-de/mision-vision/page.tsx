import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import { EmpresaPageLayout } from "@/components/empresa-page-layout";

export const metadata: Metadata = {
  title: "Misión y Visión",
  description: "Misión y visión de Total Services SPA: excelencia en servicios industriales, maquinaria pesada y compromiso con calidad e inclusión.",
};

export default function MisionVisionPage() {
  return (
    <EmpresaPageLayout title="Misión y Visión" breadcrumbLabel="Misión y Visión">
      <div className="space-y-8">
        <Card className="border-l-4 border-l-[#FF6B35] bg-orange-50/50 shadow-none">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Nuestra Misión</CardTitle>
            <CardDescription className="text-base text-gray-700 leading-relaxed mt-2">
              Acompañarte en cada paso, aportando valor real a tus proyectos y ayudándote a alcanzar tus objetivos con soluciones efectivas y personalizadas. Estamos comprometidos con la excelencia en terminación y acabado de edificios, servicios industriales y arriendo de maquinaria pesada, ofreciendo equipos confiables y modernos, personal capacitado y certificado, y un servicio excepcional que supere las expectativas en cada proyecto.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-l-4 border-l-gray-300 bg-gray-50/50 shadow-none">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Nuestra Visión</CardTitle>
            <CardDescription className="text-base text-gray-700 leading-relaxed mt-2">
              Consolidarnos como líderes en nuestras áreas de desarrollo, marcando nuestra diferencia a través de altos índices de calidad, innovación e inclusión incorporando criterios de sustentabilidad, responsabilidad social y gobernanza que sean apreciadas y valoradas por todas nuestras partes relacionadas.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </EmpresaPageLayout>
  );
}
