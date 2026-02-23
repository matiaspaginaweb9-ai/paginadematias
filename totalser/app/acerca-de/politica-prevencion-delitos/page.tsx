import type { Metadata } from "next";
import { EmpresaPageLayout } from "@/components/empresa-page-layout";

export const metadata: Metadata = {
  title: "Política Prevención Delitos",
  description: "Política Integrada de Prevención de Delitos, Cumplimiento y Antisobornos de Total Services SPA. Ley 20.393.",
};

export default function PoliticaPrevencionDelitosPage() {
  return (
    <EmpresaPageLayout title="Política Prevención Delitos" breadcrumbLabel="Política Prevención Delitos">
      <div className="space-y-8 text-gray-700">
        <p className="text-base sm:text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Política Integrada de Prevención de Delitos, Cumplimiento y Antisobornos
        </p>

        <p className="leading-relaxed">
          Total Services SPA, a través de su Modelo de Prevención de Delitos (MPD), establece, implementa, mantiene y actualiza su sistema de gestión de cumplimiento (SGCUM), y sin que la enumeración sea taxativa, para prevenir, evitar y detectar la comisión de delitos de lavado de activos, financiamiento del terrorismo, cohecho a funcionarios públicos, receptación, negociación incompatible, administración desleal, corrupción entre privados, apropiación indebida, contaminación de cuerpos de agua, entre otros, y cualquier otro delito que las legislaciones respectivas incorporen en el futuro a la Ley N° 20.393 sobre Responsabilidad Penal de las Personas Jurídicas.
        </p>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Elementos del SGCUM - MPD</h2>
          <p className="leading-relaxed mb-4">Los elementos que contempla el SGCUM - MPD de Total Services SPA son los siguientes:</p>
          <ol className="list-decimal pl-5 sm:pl-6 space-y-3 leading-relaxed">
            <li><strong className="text-gray-900">Designación del Encargado de Prevención de Delitos.</strong></li>
            <li><strong className="text-gray-900">Definición de medios y facultades del Encargado de Prevención.</strong></li>
            <li>
              <strong className="text-gray-900">Implementación del SGCUM - MPD.</strong> Lo anterior, mediante actividades de prevención; detección; respuesta; supervisión, reporte y certificación, que consideren entre otros, lo siguiente:
              <ul className="list-disc pl-5 sm:pl-6 mt-3 space-y-2">
                <li>Identificación de los procesos y actividades en cuyo contexto se genere o incremente la comisión de los delitos señalados en la Ley N° 20.393 de acuerdo con el Modelo de Gestión de Riesgos de Total Services SPA.</li>
                <li>Establecimiento de políticas y procedimientos que permitan a las personas que intervienen en las actividades o procesos antes indicados, programar y ejecutar sus tareas o labores de una manera que prevenga la comisión de los mencionados delitos.</li>
                <li>Identificación de los procedimientos de administración y auditoría de los recursos financieros, a fin de prevenir su utilización en los delitos antes señalados.</li>
                <li>Establecimiento de un procedimiento de denuncia y de investigación de conductas sospechosas que puedan constituir los delitos señalados en la Ley, así como la existencia de sanciones administrativas internas en contra de las personas que incumplan lo establecido en el SGCUM - MPD.</li>
              </ul>
            </li>
          </ol>
        </section>

        <p className="leading-relaxed pt-2 border-t border-gray-100">
          La Alta Dirección y el Encargado de Prevención de Delitos son responsables de la adopción, implementación y administración del Modelo de Prevención de Delitos el cual consta en el presente documento y que regula las materias señaladas precedentemente.
        </p>
      </div>
    </EmpresaPageLayout>
  );
}
