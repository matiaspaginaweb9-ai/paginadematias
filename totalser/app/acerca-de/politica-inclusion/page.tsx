import type { Metadata } from "next";
import { EmpresaPageLayout } from "@/components/empresa-page-layout";

export const metadata: Metadata = {
  title: "Política Inclusión",
  description: "Política de Inclusión, Equidad de Género, Prevención de Acoso y Violencia y Conciliación Laboral de Total Services SPA.",
};

export default function PoliticaInclusionPage() {
  return (
    <EmpresaPageLayout title="Política Inclusión" breadcrumbLabel="Política Inclusión">
      <div className="space-y-8 text-gray-700">
        <p className="text-base sm:text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Política de Inclusión, Equidad de Género, Prevención de Acoso y Violencia y Conciliación Laboral
        </p>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Introducción</h2>
          <p className="leading-relaxed mb-4">
            Total Services SPA promueve el desarrollo de un ambiente de trabajo tolerante, armónico, inclusivo y sin discriminación, respetuoso de los DDHH de sus colaboradores y otras partes interesadas.
          </p>
          <p className="leading-relaxed">
            Coherente con los principios y valores expresados en su &quot;Carta de Valores corporativos&quot;, la alta dirección de Total Services SPA entiende la importancia cardinal de desarrollar sus actividades bajo un enfoque que recoja las exigencias de una sociedad moderna y pluralista. Dentro de este contexto, la adopción de una Política de Integración, Equidad de Género y Conciliación Laboral es una acción esencial para alinear su gestión con las expresadas a través de la legislación nacional.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Objetivo General</h2>
          <p className="leading-relaxed">
            Desarrollar una cultura corporativa inclusiva para nuestros colaboradores con discapacidad, que promueva conductas libres de discriminación, reconociendo y buscando la igualdad sustantiva de género, permitiendo el ejercicio de los derechos a los recursos para todos quienes integran la compañía.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Objetivos específicos</h2>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 leading-relaxed">
            <li>Definir lineamientos que permitan diagnosticar tanto el grado de participación de personas con discapacidad dentro de la organización, como la adecuación del entorno físico, procesos y sistemas acorde a los principios de accesibilidad y ajustes razonables.</li>
            <li>Establecer programas y planes que permitan una efectiva participación de actuales y futuros colaboradores con discapacidad.</li>
            <li>Buscar la erradicación de la violencia y la discriminación por razones de género, orientación e identidad sexual, promoviendo el ejercicio de los derechos de todas las personas como colaborador de la Empresa.</li>
            <li>Desarrollar medidas, acciones y adecuaciones institucionales en los ámbitos de proveedores y colaboradores externos, con el fin de alcanzar la igualdad sustantiva de género en el quehacer institucional de la Compañía, reconociendo la diversidad sexogenérica, de subjetividades, multiplicidad de cuerpos, modos y trayectorias de vida de las personas.</li>
            <li>Generar un protocolo claro para la prevención, investigación y sanción del acoso sexual, laboral y violencia en el trabajo, resguardando y respetando la privacidad de quienes puedan estar involucrados en la denuncia.</li>
            <li>Desarrollar jornadas y condiciones de trabajo que permitan armonizar las obligaciones laborales, familiares y sociales de los trabajadores.</li>
            <li>Establecer procesos de selección, contratación, inducción, gestión de talento y desvinculación coherentes con la presente política.</li>
          </ul>
        </section>

        <p className="leading-relaxed text-sm sm:text-base pt-2 border-t border-gray-100">
          Este documento es revisado y evaluado anualmente por la Alta Dirección y forma parte del proceso de inducción y capacitación para el personal de la organización.
        </p>
      </div>
    </EmpresaPageLayout>
  );
}
