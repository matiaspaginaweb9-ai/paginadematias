"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 sm:py-2.5 px-3 sm:px-4">
        <div className="container mx-auto flex flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
          <a 
            href="https://wa.me/56961582373" 
            className="flex items-center gap-1.5 sm:gap-2 hover:text-yellow-400 transition-all duration-300 hover:scale-105 group flex-1 sm:flex-initial"
          >
            <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-green-500 group-hover:scale-110 transition-transform flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="font-medium text-[10px] sm:text-xs md:text-sm truncate">+56 9 6158 2373</span>
          </a>
          <a 
            href="mailto:TSERVICESSPA@GMAIL.COM" 
            className="flex items-center gap-1.5 sm:gap-2 hover:text-yellow-400 transition-all duration-300 hover:scale-105 group"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="hidden lg:inline font-medium text-xs sm:text-sm">TSERVICESSPA@GMAIL.COM</span>
            <span className="lg:hidden text-[10px] sm:text-xs font-medium">EMAIL</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 h-14 sm:h-16 md:h-20">
        <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group flex-shrink-0">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
            TOTAL SERVICE
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={cn("text-sm font-medium transition-all duration-300 hover:text-yellow-400 px-3 py-2 rounded-md hover:bg-yellow-50")}>
                    Inicio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/acerca-de" className={cn("text-sm font-medium transition-all duration-300 hover:text-yellow-400 px-3 py-2 rounded-md hover:bg-yellow-50")}>
                    Acerca de
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/catalogo" className={cn("text-sm font-medium transition-all duration-300 hover:text-yellow-400 px-3 py-2 rounded-md hover:bg-yellow-50")}>
                    Catálogo
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link href="/catalogo">Ver Catálogo</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white animate-in slide-in-from-top duration-300 shadow-lg">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 space-y-1.5 sm:space-y-2">
            <Link 
              href="/" 
              className="block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-yellow-50 hover:text-yellow-600 active:bg-yellow-100 transition-all duration-200 font-medium text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/acerca-de" 
              className="block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-yellow-50 hover:text-yellow-600 active:bg-yellow-100 transition-all duration-200 font-medium text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link 
              href="/catalogo" 
              className="block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-yellow-50 hover:text-yellow-600 active:bg-yellow-100 transition-all duration-200 font-medium text-sm sm:text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Button asChild className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold text-sm sm:text-base py-2.5 sm:py-3">
              <Link href="/catalogo" onClick={() => setMobileMenuOpen(false)}>Ver Catálogo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
