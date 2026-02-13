"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const btnOutline =
  "border-2 border-[#FF6B35] text-[#FF6B35] bg-transparent hover:bg-[#FF6B35] hover:text-white active:scale-[0.98] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 min-h-[44px] w-full sm:w-auto transition-colors rounded-md";

export function HeroCarousel() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-[420px] sm:min-h-[480px] md:min-h-[560px] flex items-center pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/Mantención de Plantas.png"
          alt="Servicios industriales Total Services SPA"
          fill
          className="object-cover opacity-30"
          priority
          fetchPriority="high"
          unoptimized
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-24 lg:py-32 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-6 md:space-y-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight px-2 sm:px-4">
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF5722] bg-clip-text text-transparent">
              Total Services SPA
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            Ofrecemos una amplia gama de servicios industriales para la agroindustria, minería y construcción de acuerdo a los requerimientos y necesidades de cada uno de nuestros clientes. Nuestra reconocida calidad se hace presente en todos nuestros procesos, servicios y contratos, los que desarrollamos y ejecutamos en línea con los más altos estándares de seguridad y sustentabilidad y eficiencia operacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-stretch sm:items-center px-2 sm:px-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF5722] text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 min-h-[44px] w-full sm:w-auto rounded-md active:scale-[0.98]"
            >
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
            <Button asChild size="lg" className={btnOutline}>
              <Link href="/catalogo" className="flex items-center justify-center gap-1.5">
                Ver Catálogo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </Link>
            </Button>
            <Button asChild size="lg" className={btnOutline}>
              <Link href="/acerca-de">Conocer Más</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
