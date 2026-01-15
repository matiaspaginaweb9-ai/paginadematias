import Link from "next/link";
import { MessageCircle, Mail, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="https://wa.me/56961582373" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <MessageCircle className="w-4 h-4 text-green-500" />
              <span>+56 9 6158 2373</span>
            </a>
            <a href="mailto:TSERVICESSPA@GMAIL.COM" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>TSERVICESSPA@GMAIL.COM</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            TOTAL SERVICE
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={cn("text-sm font-medium transition-colors hover:text-yellow-400")}>
                  Inicio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/acerca-de" className={cn("text-sm font-medium transition-colors hover:text-yellow-400")}>
                  Acerca de
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/catalogo" className={cn("text-sm font-medium transition-colors hover:text-yellow-400")}>
                  Catálogo
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <Link href="/catalogo">Ver Catálogo</Link>
        </Button>
      </div>
    </header>
  );
}
