import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center group flex-shrink-0">
      <svg 
        className="h-5 w-auto sm:hidden group-hover:opacity-90 transition-opacity" 
        viewBox="0 0 225 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <text 
          x="0" 
          y="20" 
          fontFamily="Arial Black, Arial, sans-serif" 
          fontSize="18" 
          fontStyle="italic" 
          fontWeight="900" 
          fill="#FF6B35"
        >
          TOTAL
        </text>
        <polygon 
          points="70,4 227,4 222,24 65,24" 
          fill="#FF6B35"
        />
        <text 
          x="80" 
          y="20" 
          fontFamily="Arial Black, Arial, sans-serif" 
          fontSize="18" 
          fontStyle="italic"
          fontWeight="900" 
          fill="white"
          letterSpacing="0.5"
        >
          SERVICES
        </text>
      </svg>
      <svg 
        className="hidden sm:block h-6 w-auto md:h-8 group-hover:opacity-90 transition-opacity" 
        viewBox="0 0 235 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <text 
          x="0" 
          y="20" 
          fontFamily="Arial Black, Arial, sans-serif" 
          fontSize="18" 
          fontStyle="italic" 
          fontWeight="900" 
          fill="#FF6B35"
        >
          TOTAL
        </text>
        <polygon 
          points="73,4 230,4 225,24 68,24" 
          fill="#FF6B35"
        />
        <text 
          x="83" 
          y="20" 
          fontFamily="Arial Black, Arial, sans-serif" 
          fontSize="18" 
          fontStyle="italic"
          fontWeight="900" 
          fill="white"
          letterSpacing="0.5"
        >
          SERVICES
        </text>
      </svg>
    </Link>
  );
}
