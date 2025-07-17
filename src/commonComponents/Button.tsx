import Link from 'next/link';
import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  href: string;
   onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, children, className = '' }: ButtonProps) {
  return (
    <Link href={href} passHref
        className={`
          relative inline-block px-8 py-3 border-1 border-white text-white 
          font-semibold uppercase tracking-wider overflow-hidden 
          transition-all duration-300 ease-in-out
          hover:text-black hover:bg-white
          ${className}
        `}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 z-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
