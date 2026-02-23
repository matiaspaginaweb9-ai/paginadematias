import type { Metadata } from "next";
import { EmpresaPageLayout } from "@/components/empresa-page-layout";
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "RIOHS",
  description: "Registro de Incidencias en Seguridad y Salud Ocupacional de Total Services SPA. Prevención de riesgos y mejora continua.",
};

const RIOHS_PDF_URL = "/documents/RIOHS-2025-1.pdf";

export default function RiohsPage() {
  return (
    <EmpresaPageLayout title="RIOHS" breadcrumbLabel="RIOHS">
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Total Services SPA está comprometida con la prevención de riesgos y la salud ocupacional. Nuestro Registro de Incidencias en Seguridad y Salud Ocupacional (RIOHS) forma parte del sistema de gestión que nos permite mejorar continuamente las condiciones de trabajo y garantizar un entorno seguro para nuestro equipo y para cada proyecto.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button asChild className="bg-[#FF6B35] hover:bg-[#FF5722] text-white rounded-lg min-h-[44px] w-full sm:w-auto">
            <a href={RIOHS_PDF_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px] py-2.5">
              <ExternalLink className="w-4 h-4 shrink-0" />
              Ver PDF
            </a>
          </Button>
          <Button asChild variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50 rounded-lg min-h-[44px] w-full sm:w-auto">
            <a href={RIOHS_PDF_URL} download="RIOHS-2025-1.pdf" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px] py-2.5">
              <FileDown className="w-4 h-4 shrink-0" />
              Descargar PDF
            </a>
          </Button>
        </div>
      </div>
    </EmpresaPageLayout>
  );
}
