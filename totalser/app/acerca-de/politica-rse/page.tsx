import type { Metadata } from "next";
import { EmpresaPageLayout } from "@/components/empresa-page-layout";

export const metadata: Metadata = {
  title: "Política RSE",
  description: "Política de Responsabilidad Social Empresarial de Total Services SPA. Partes interesadas y desarrollo sustentable.",
};

export default function PoliticaRsePage() {
  return (
    <EmpresaPageLayout title="Política RSE" breadcrumbLabel="Política RSE">
      <div className="space-y-6">
        <p className="text-base font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Política de Responsabilidad Social Empresarial
        </p>
        <p className="text-gray-700 leading-relaxed">
          Coherente con sus valores corporativos, Total Services SPA entiende que toda acción empresarial se inserta dentro de un contexto de múltiples &quot;partes interesadas&quot;:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li><strong className="text-gray-900">Trabajadores:</strong> nuestro principal activo y por ende piedra angular de nuestro crecimiento.</li>
          <li><strong className="text-gray-900">Sociedad:</strong> la sustentabilidad y disminución de nuestros impactos son el norte que guía la relación con nuestro entorno social.</li>
          <li><strong className="text-gray-900">Clientes:</strong> buscamos satisfacer sus requerimientos y necesidades dentro de una relación honesta y transparente.</li>
          <li><strong className="text-gray-900">Proveedores:</strong> copartícipes de nuestros negocios, trabajamos bajo un marco de respeto mutuo.</li>
          <li><strong className="text-gray-900">Organización:</strong> el crecimiento sostenible bajo un enfoque de riesgos aúna y convoca las voluntades de los socios miembros de Total Services SPA.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          El modelo de RSE procura que el desarrollo de sus actividades se dé en un ambiente de armonía y sinergia con sus &quot;partes interesadas&quot; bajo un enfoque de desarrollo sustentable y respetuoso de la legislación laboral, el medioambiente y la seguridad y salud en el trabajo, generando valor agregado para las comunidades con las que la organización interactúa.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Esta política es parte de los planes estratégicos de Total Services SPA y es revisada periódicamente para asegurar su adecuación.
        </p>
      </div>
    </EmpresaPageLayout>
  );
}
