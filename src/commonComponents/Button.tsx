// import Link from 'next/link';
// import { ReactNode, MouseEvent } from 'react';

// interface ButtonProps {
//   href: string;
//    onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
//   children: ReactNode;
//   className?: string;
// }

// export default function Button({ href, children, className = '' }: ButtonProps) {
//   return (
//     <Link href={href} passHref
//         className={`
//           relative inline-block px-8 py-3 border-1 border-white text-white 
//           font-semibold uppercase tracking-wider overflow-hidden 
//           transition-all duration-300 ease-in-out
//           hover:text-black hover:bg-white
//           ${className}
//         `}
//       >
//         {/* Decorative Borders */}
// <div className="pointer-events-none absolute inset-[2vw] z-10 hidden lg:block">
//   {/* Border lines */}
//   {/* TOP BORDER LEFT PART */}
//   <div className="absolute top-[2vw] left-[4.9vw] w-[28vw]  border-t-2 border-white" />

//   {/* TOP BORDER RIGHT PART */}
//   <div className="absolute top-[2vw] right-[4.9vw] w-[28vw]  border-t-2 border-white" />

//   {/* BOTTOM BORDER */}
//   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[89.7%] border-b-2 border-white" />

//   {/* VERTICAL BORDERS */}
//   <div className="absolute top-1/2 right-0 h-[68.5vh] min-h-[500px] max-h-[700px] border-r-2 border-white -translate-y-[47%]" />
//   <div className="absolute top-1/2 left-0 h-[68.5vh] min-h-[500px] max-h-[700px] border-l-2 border-white -translate-y-[47%]" />

//   {/* Corner curves */}
//   <div className="absolute top-[2vw] left-0 w-[5vw] h-[5vw]  border-b-2 border-r-2 border-white rounded-br-full z-10" />
//   <div className="absolute bottom-0 left-0 w-[5vw] h-[5vw]  border-t-2 border-r-2 border-white rounded-tr-full z-10" />
//   <div className="absolute bottom-0 right-0 w-[5vw] h-[5vw]  border-t-2 border-l-2 border-white rounded-tl-full z-10" />
//   <div className="absolute top-[2vw] right-0 w-[5vw] h-[5vw]  border-b-2 border-l-2 border-white rounded-bl-full z-10" />

//   {/* Corner stars */}
//   <div className="absolute top-[0.5vw] -left-[1.5vw] w-[5vw] h-[5vw]  flex items-center justify-center z-20">
//     <PiStarFourFill className="w-[1.5vw] h-[1.5vw] max-w-[24px] max-h-[24px]" />
//   </div>
//   <div className="absolute top-[0.5vw] -right-[1.5vw] w-[5vw] h-[5vw]  flex items-center justify-center z-20">
//     <PiStarFourFill className="w-[1.5vw] h-[1.5vw] max-w-[24px] max-h-[24px]" />
//   </div>
//   <div className="absolute -bottom-[1.5vw] -left-[1.5vw] w-[5vw] h-[5vw]  flex items-center justify-center z-20">
//     <PiStarFourFill className="w-[1.5vw] h-[1.5vw] max-w-[24px] max-h-[24px]" />
//   </div>
//   <div className="absolute -bottom-[1.5vw] -right-[1.5vw] w-[5vw] h-[5vw]  flex items-center justify-center z-20">
//     <PiStarFourFill className="w-[1.5vw] h-[1.5vw] max-w-[24px] max-h-[24px]" />
//   </div>
// </div>
//     </Link>
//   );
// }
