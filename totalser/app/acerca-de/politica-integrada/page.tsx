import type { Metadata } from "next";
import { EmpresaPageLayout } from "@/components/empresa-page-layout";

export const metadata: Metadata = {
  title: "Política Integrada",
  description: "Política integrada de calidad, seguridad y salud en el trabajo y medioambiente de Total Services SPA.",
};

export default function PoliticaIntegradaPage() {
  return (
    <EmpresaPageLayout title="Política Integrada" breadcrumbLabel="Política Integrada">
      <div className="space-y-6">
        <p className="text-base font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Política integrada de calidad, seguridad y salud en el trabajo y medioambiente
        </p>
        <p className="text-gray-700 leading-relaxed">
          La dirección de Total Services SPA, organización dedicada a la prestación de servicios industriales, considera como principios básicos de su gestión la realización de sus actividades con un alto nivel de calidad, dentro de una cultura organizacional comprometida con principios preventivos de seguridad y salud en el trabajo y medioambiente en un marco de armonía con todas sus partes interesadas.
        </p>
        <p className="text-gray-700 leading-relaxed">
          La dirección de Total Services SPA desarrolla sus procesos y actividades controlando los principales riesgos, buscando proporcionar condiciones de trabajo seguras y saludables, promoviendo la consulta y participación de las personas trabajadoras o de sus representantes en temas de seguridad y salud en el trabajo.
        </p>
        <p className="font-medium text-gray-900 pt-2">Los objetivos estratégicos de Total Services SPA contemplan:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>El cumplimiento de los requisitos legales aplicables, especialmente aquellos relacionados con aspectos de seguridad, salud en el trabajo y medioambientales.</li>
          <li>Un enfoque de mejora continua.</li>
          <li>Buscar e implementar medidas para disminuir y/o prevenir eventos de contaminación, derivadas de su producción.</li>
          <li>Buscar prevenir accidentes y enfermedades profesionales estableciendo programas y acciones pertinentes a su mitigación y/o eliminación.</li>
          <li>Mantener un alto nivel de satisfacción de sus clientes.</li>
          <li>Desarrollar sus actividades bajo un enfoque de cumplimiento ASG (Ambiental, Social y de Gobernanza).</li>
        </ul>
        <p className="text-gray-700 leading-relaxed pt-2">
          Esta política es parte del proceso de inducción de todo el personal de la organización, se encuentra disponible para todas las partes interesadas y es revisada como mínimo una vez al año, siendo modificada acorde a las necesidades definidas por la alta dirección.
        </p>
      </div>
    </EmpresaPageLayout>
  );
}
