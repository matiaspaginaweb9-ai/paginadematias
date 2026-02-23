import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  breadcrumbLabel: string;
  children: React.ReactNode;
};

export function EmpresaPageLayout({ title, breadcrumbLabel, children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 lg:py-14">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/acerca-de" className="hover:text-[#FF6B35] transition-colors">Empresa</Link>
            <ChevronRight className="w-4 h-4 shrink-0" />
            <span className="text-white font-medium">{breadcrumbLabel}</span>
          </nav>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight max-w-4xl">
            {title}
          </h1>
        </div>
      </section>
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl sm:rounded-2xl bg-white shadow-sm border border-gray-100 p-5 sm:p-8 md:p-10 min-w-0 overflow-hidden break-words">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
