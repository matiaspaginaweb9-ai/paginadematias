import type { Metadata } from "next";
import { EmpresaPageLayout } from "@/components/empresa-page-layout";

export const metadata: Metadata = {
  title: "Política Alcohol y Drogas",
  description: "Política de Control de Alcohol y Drogas de Total Services SPA. Ambiente libre de riesgos y prevención.",
};

export default function PoliticaAlcoholDrogasPage() {
  return (
    <EmpresaPageLayout title="Política Alcohol y Drogas" breadcrumbLabel="Política Alcohol y Drogas">
      <div className="space-y-8 text-gray-700">
        <p className="text-base sm:text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Política de Control de Alcohol y Drogas
        </p>

        <p className="leading-relaxed">
          Total Services SPA busca desarrollar sus actividades dentro de un ambiente libre de riesgos que afecten la salud y la vida de sus trabajadores y otras personas bajo su responsabilidad, esto es aplicable en todas sus dependencias y faenas.
        </p>
        <p className="leading-relaxed">
          Dentro del contexto anterior es un objetivo estratégico de Total Services SPA que su personal desarrolle sus funciones sin que existan factores que alteren su comportamiento, especialmente aquellos asociados al consumo de alcohol y drogas, que constituyen un riesgo tanto para la salud e integridad física de sus colaboradores y otros actores relacionados.
        </p>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Alcance</h2>
          <p className="leading-relaxed mb-4">
            La presente política tiene un carácter eminentemente preventivo y busca anticipar y abordar el consumo problemático de drogas y alcohol que afectan negativamente a la organización y sus colaboradores.
          </p>
          <p className="font-medium text-gray-900 mb-2">Las estrategias se centran en:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 leading-relaxed">
            <li>Comunicación y entrega de información de la problemática asociada al consumo de alcohol y drogas como parte del proceso de inducción y capacitación permanente de la organización.</li>
            <li>Actividades de toma de consciencia, autocuidado, acompañamiento y seguridad.</li>
            <li>Control interno y medidas disciplinarias de acuerdo con los requisitos legales vigentes, cautelando la transparencia, objetividad, confidencialidad y respeto por las personas.</li>
            <li>Tomas de muestra aleatorias, dentro de un marco de objetividad, transparencia, confidencialidad y resguardo del respeto hacia las personas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Aplicación</h2>
          <p className="leading-relaxed mb-4">
            El consumo de alcohol y drogas en situaciones de trabajo se considera una conducta contraria a la presente política y una infracción grave al reglamento interno de orden, higiene y seguridad de Total Services SPA, documento que contiene las medidas disciplinarias correspondientes.
          </p>
          <p className="leading-relaxed">
            Las consideraciones mencionadas en esta política son recogidas y comunicadas al personal a través del Anexo al &quot;Reglamento Interno de Orden, Higiene y Seguridad&quot; en los &quot;títulos&quot; y &quot;artículos&quot; respectivos.
          </p>
        </section>
      </div>
    </EmpresaPageLayout>
  );
}
