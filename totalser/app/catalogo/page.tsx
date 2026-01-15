import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";

export default function Catalogo() {
  return (
    <div className="min-h-screen bg-stone-200" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Cpath d='M0 0h60v60H0z' fill='%23f5f5f5'/%3E%3Cpath d='M0 0h60v60H0z' fill='%23e5e5e5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E")`}}>
      <div className="bg-gray-800 text-white py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg font-semibold">CATÁLOGO TOTAL SERVICE</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <div className="bg-gray-800 text-white py-3 px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span>+56 9 6158 2373</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>TSERVICESSPA@GMAIL.COM</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5">
            <div className="bg-yellow-400 px-4 py-2 mb-4">
              <p className="text-black font-bold text-lg">CAPACIDAD 8.000 KG</p>
            </div>
            <div className="space-y-2 text-gray-800 text-lg">
              <p>Valor hora 60.000 lodos y otros</p>
              <p>Mínimo 6 horas 360.000</p>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex justify-center">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                alt="Camión Aspirador" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5 flex justify-center md:order-2">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="Retroexcavadora" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 md:order-1">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">RETROEXCAVADORA</h2>
            <div className="space-y-2 text-gray-800 text-lg">
              <p>Valor hora x día operador y combustible 28.000</p>
              <p>Valor hora x mes 26.000</p>
              <p>Incluye traslado en valor mes</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                alt="Excavadora" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">EXCAVADORA</h2>
            <div className="bg-yellow-400 px-4 py-2 mb-4 inline-block">
              <p className="text-black font-bold text-lg">20 TON</p>
            </div>
            <div className="space-y-2 text-gray-800 text-lg">
              <p>Valor hora por día 50.000</p>
              <p>Valor hora por mes 43.000</p>
              <p>Incluye operador combustible y traslado en valor mes</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5 flex justify-center md:order-2">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" 
                alt="Grúa Horquilla Diesel" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 md:order-1">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">GRÚA HORQUILA</h2>
            <div className="bg-yellow-400 px-4 py-2 mb-4 inline-block">
              <p className="text-black font-bold text-lg">DIESEL 3 TON</p>
            </div>
            <div className="space-y-2 text-gray-800 text-lg">
              <p>Valor día 90.000</p>
              <p>Valor mes 700.000</p>
              <p>Incluye traslado en valor mes</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80" 
                alt="Grúa Horquilla Gas" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">GRÚA HORQUILA</h2>
            <div className="bg-yellow-400 px-4 py-2 mb-4 inline-block">
              <p className="text-black font-bold text-lg">GAS- BENCINA 2.5 TON</p>
            </div>
            <div className="space-y-2 text-gray-800 text-lg">
              <p>Valor día 90.000</p>
              <p>Valor mes 700.000</p>
              <p>Sin operador sin combustible</p>
              <p>incluye traslado en valor mes</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5 flex justify-center md:order-2">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                alt="Rodillo Tripulado" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 md:order-1">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">RODILLO TRIPULADO</h2>
            <div className="bg-yellow-400 px-4 py-2 mb-4 inline-block">
              <p className="text-black font-bold text-lg">BOMAG 120</p>
            </div>
            <div className="space-y-2 text-gray-800 text-lg">
              <p>Valor día 70.000</p>
              <p>Valor mes 1.200.000</p>
              <p>Incluye traslado en valor mes</p>
              <p>Sin operador sin combustible</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                alt="Minicargador" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">MINICARGADOR</h2>
            <div className="bg-yellow-400 px-4 py-2 mb-4 inline-block">
              <p className="text-black font-bold text-lg">BOBCAT</p>
            </div>
            <div className="space-y-2 text-gray-800 text-lg">
              <p>Valor hora por día 25.000</p>
              <p>Valor hora por mes 22.000</p>
              <p>Incluye operador, combustible y traslado en valor mes</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white py-3 px-4 mt-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span>+56 9 6158 2373</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>TSERVICESSPA@GMAIL.COM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
