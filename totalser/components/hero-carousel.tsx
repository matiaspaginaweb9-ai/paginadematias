"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_INTERVAL_MS = 23000;
const DRAG_THRESHOLD = 60;

const btnOutline =
  "border-2 border-[#FF6B35] text-[#FF6B35] bg-transparent hover:bg-[#FF6B35] hover:text-white active:scale-[0.98] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 min-h-[44px] w-full sm:w-auto transition-colors rounded-md";

const slides = [
  {
    image: "/images/Mantención de Plantas.png",
    imageAlt: "Servicios industriales Total Services SPA",
    title: "Total Services SPA",
    text: "Total Services SPA ofrece una amplia gama de servicios industriales para la agroindustria, minería y construcción de acuerdo a los requerimientos y necesidades de cada uno de nuestros clientes. Nuestra reconocida calidad se hace presente en todos nuestros procesos, servicios y contratos, los que desarrollamos y ejecutamos en línea con los más altos estándares de seguridad y sustentabilidad y eficiencia operacional.",
    buttons: (
      <>
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
      </>
    ),
  },
  {
    image: "/images/WhatsApp Image 2026-01-15 at 16.04.17.jpeg",
    imageAlt: "Arriendo de maquinaria pesada - Total Services SPA",
    title: "Arriendo de Maquinaria Pesada en Chile",
    text: "Total Services SPA: Líderes en arriendo de maquinaria pesada para construcción, minería e infraestructura. Retroexcavadoras, excavadoras, grúas horquilla, camiones aspiradores, camiones ampliroll, rodillos tripulados, minicargadores y más equipos modernos con operadores calificados.",
    buttons: (
      <Button
        asChild
        size="lg"
        className="bg-[#FF6B35] hover:bg-[#FF5722] text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 min-h-[44px] w-full sm:w-auto rounded-md active:scale-[0.98]"
      >
        <Link href="/catalogo" className="flex items-center justify-center gap-1.5">
          Ver Catálogo
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
        </Link>
      </Button>
    ),
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startPercent = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const lastDragOffset = useRef(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const go = (delta: number) => {
    setIndex((i) => (i + delta + slides.length) % slides.length);
  };

  const basePercent = (100 / slides.length) * index;
  const slideWidthPercent = 100 / slides.length;

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    startX.current = e.clientX;
    startPercent.current = basePercent;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !sectionRef.current) return;
    const w = sectionRef.current.offsetWidth;
    const delta = e.clientX - startX.current;
    const percentDelta = (delta / w) * 100;
    let next = startPercent.current + percentDelta;
    const min = 0;
    const max = 100 - slideWidthPercent;
    next = Math.max(min, Math.min(max, next));
    const off = ((next - basePercent) / slideWidthPercent) * 100;
    lastDragOffset.current = off;
    setDragOffset(off);
  };

  const onPointerUp = () => {
    const off = lastDragOffset.current;
    setIsDragging(false);
    if (Math.abs(off) > DRAG_THRESHOLD) {
      setIndex((i) => (i + (off > 0 ? 1 : -1) + slides.length) % slides.length);
    }
    setDragOffset(0);
  };

  const dragPercent = basePercent + (dragOffset / 100) * slideWidthPercent;
  const tx = `translateX(-${dragPercent}%)`;
  const transition = isDragging ? "none" : "transform 0.4s ease-out";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-[380px] sm:min-h-[480px] md:min-h-[560px] flex items-center select-none pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{ touchAction: "pan-y", WebkitTapHighlightColor: "transparent" }}
    >
      <div
        className="absolute inset-0 flex w-full will-change-transform"
        style={{ width: `${slides.length * 100}%`, transform: tx, transition }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-shrink-0" style={{ width: `${slideWidthPercent}%` }}>
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className="object-cover opacity-30"
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : undefined}
              unoptimized
              sizes="100vw"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 pointer-events-none" />
      <div
        className="absolute inset-0 flex w-full will-change-transform"
        style={{ width: `${slides.length * 100}%`, transform: tx, transition }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex-shrink-0 flex items-center" style={{ width: `${slideWidthPercent}%` }}>
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10 w-full">
              <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight px-2 sm:px-4">
                  <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF5722] bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                  {slide.text}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 sm:px-4">
                  {slide.buttons}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 active:bg-black/80 text-white transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 active:bg-black/80 text-white transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 pb-[env(safe-area-inset-bottom)]">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`min-w-[10px] min-h-[10px] w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-[#FF6B35]" : "bg-white/50 hover:bg-white/70"}`}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
