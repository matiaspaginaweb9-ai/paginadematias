import type { Metadata } from "next";
import { EmpresaPageLayout } from "@/components/empresa-page-layout";

export const metadata: Metadata = {
  title: "Historia",
  description: "Total Services SPA: empresa de servicios industriales y arriendo de maquinaria pesada desde 2017. Sociedad por acciones en Quillota, Región de Valparaíso.",
};

export default function HistoriaPage() {
  return (
    <EmpresaPageLayout title="Historia" breadcrumbLabel="Historia">
      <div className="prose prose-gray max-w-none prose-lg">
        <p className="text-gray-700 leading-relaxed">
          Somos una empresa dedicada a servicios industriales y arriendo de maquinaria pesada. Iniciamos operaciones el 01 de Junio del 2017 y estamos legalmente constituidos como SOCIEDAD POR ACCIONES, dentro del régimen de sociedades mercantiles y comerciales del país.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Contamos con una amplia flota de equipos modernos y en excelente estado, incluyendo retroexcavadoras, excavadoras, grúas, rodillos, minicargadores, camiones aspiradores y traslados de residuos con resolución sanitaria.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Ofrecemos otros servicios especializados como mantención de plantas de tratamiento de aguas, traslado de residuos con resolución sanitaria, proyectos de piping HDPE y aceros, obras civiles, proyectos de electricidad y transporte industrial.
        </p>
      </div>
    </EmpresaPageLayout>
  );
}
