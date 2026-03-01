export const TornEdge = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative w-full h-12 overflow-hidden -mt-1 z-10 ${className}`}>
        <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute top-0 left-0 w-full h-[150%] transform rotate-180 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1200,80 C1100,20 1000,100 900,40 C800,-20 700,80 600,20 C500,-40 400,60 300,10 C200,-40 100,50 0,0 L0,120 L1200,120 Z" />
        </svg>
    </div>
  );
};
